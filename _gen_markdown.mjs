// Writes a Markdown twin next to every built HTML page:  dist/<route>/index.md
//
// functions/_middleware.js serves these files when a request prefers
// `Accept: text/markdown` ("Markdown for Agents" content negotiation). Browsers
// never send that header, so they keep getting HTML.
//
// Conversion happens here, at build time, rather than at the edge: the output
// is deterministic, can be inspected in dist/, and costs nothing per request.
//
// What goes into the twin: YAML front matter (title, description, canonical
// URL) followed by the page's outermost <main>, with site chrome removed
// (nav, sidebars, scripts, forms, inline SVG). Relative links are made
// absolute so the Markdown still works once an agent has copied it elsewhere.
//
// Runs from the `astro:build:done` hook in astro.config.mjs. Manual run:
//   node _gen_markdown.mjs [distDir]

import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeRemark from 'rehype-remark';
import remarkGfm from 'remark-gfm';
import remarkStringify from 'remark-stringify';

const SITE = 'https://testpreppilot.com';

// Elements that are page furniture, not content. <nav> covers the breadcrumb
// and the in-article TOC; <aside> covers the exam-page sidebar.
const DROP = new Set([
  'script', 'style', 'noscript', 'template', 'svg', 'canvas', 'iframe',
  'nav', 'aside', 'form', 'button', 'input', 'select', 'textarea', 'dialog',
]);

function walkHtml(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const abs = join(dir, name);
    if (statSync(abs).isDirectory()) {
      // Pagefind's bundle and Astro's hashed assets never contain pages.
      if (name === '_astro' || name === 'pagefind') continue;
      walkHtml(abs, out);
    } else if (name === 'index.html') {
      out.push(abs);
    }
  }
  return out;
}

function findFirst(node, test) {
  if (test(node)) return node;
  for (const child of node.children || []) {
    const hit = findFirst(child, test);
    if (hit) return hit;
  }
  return null;
}

function findAll(node, test, out = []) {
  if (test(node)) out.push(node);
  for (const child of node.children || []) findAll(child, test, out);
  return out;
}

const isEl = (tag) => (n) => n.type === 'element' && n.tagName === tag;

function textOf(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textOf).join('');
}

function prune(node) {
  if (!node.children) return;
  node.children = node.children.filter((c) => {
    if (c.type === 'comment') return false;
    if (c.type !== 'element') return true;
    if (DROP.has(c.tagName)) return false;
    const p = c.properties || {};
    if (p.hidden != null || p.ariaHidden === 'true' || p.ariaHidden === true) return false;
    return true;
  });
  node.children.forEach(prune);
}

function absolutise(node) {
  for (const el of findAll(node, (n) => n.type === 'element')) {
    const p = el.properties || {};
    for (const attr of ['href', 'src']) {
      const v = p[attr];
      if (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//')) p[attr] = SITE + v;
    }
  }
}

// YAML double-quoted scalar: JSON string syntax is a valid subset.
const yaml = (s) => JSON.stringify(s);

const processor = unified()
  .use(rehypeRemark)
  .use(remarkGfm)
  .use(remarkStringify, { bullet: '-', fences: true, rule: '-' });
const parser = unified().use(rehypeParse);

export function htmlToMarkdown(html, route) {
  const tree = parser.parse(html);
  const head = findFirst(tree, isEl('head'));
  const title = textOf(findFirst(head || tree, isEl('title'))).trim();
  const metas = findAll(head || tree, isEl('meta'));
  const description = metas.find((m) => m.properties?.name === 'description')?.properties?.content || '';
  const canonical =
    findAll(head || tree, isEl('link')).find((l) => (l.properties?.rel || []).includes('canonical'))?.properties?.href ||
    SITE + route;

  const main = findFirst(tree, isEl('main')) || findFirst(tree, isEl('body'));
  if (!main) return null;
  prune(main);
  absolutise(main);

  const body = processor
    .stringify(processor.runSync({ type: 'root', children: [main] }))
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  if (!body) return null;

  const front = ['---', `title: ${yaml(title)}`];
  if (description) front.push(`description: ${yaml(description)}`);
  front.push(`url: ${yaml(canonical)}`, '---', '');
  return front.join('\n') + '\n' + body + '\n';
}

export function generateMarkdown(distDir) {
  const pages = walkHtml(distDir);
  let written = 0;
  let skipped = 0;
  for (const abs of pages) {
    const rel = relative(distDir, abs).split(sep).join('/');
    const route = '/' + rel.replace(/index\.html$/, '');
    const md = htmlToMarkdown(readFileSync(abs, 'utf8'), route);
    if (!md) {
      skipped++;
      continue;
    }
    writeFileSync(abs.replace(/index\.html$/, 'index.md'), md, 'utf8');
    written++;
  }
  console.log(`[markdown] ${written} Markdown twins written${skipped ? `, ${skipped} pages had no <main> content` : ''}`);
  return { written, skipped };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  generateMarkdown(process.argv[2] || join(fileURLToPath(new URL('.', import.meta.url)), 'dist'));
}
