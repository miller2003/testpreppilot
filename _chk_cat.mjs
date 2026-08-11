import fs from 'fs';
import { buildDirectory } from './src/data/examCatalog/index.mjs';

const s = fs.readFileSync('src/data/categories.ts', 'utf8');
console.log('=== src/data/categories.ts (旧, 只驱动 /categories/*) ===');
console.log('  ' + [...s.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]).join(', '));

console.log('\n=== examCatalog buildDirectory() (真实分类, 未被任何页面使用) ===');
const d = buildDirectory();
for (const c of d) {
  console.log('  ' + c.id.padEnd(32) + String(c.total).padStart(4) + ' 考试  ' + String(c.groups.length).padStart(2) + ' 组  | ' + c.name);
}
console.log('  合计 ' + d.reduce((a, c) => a + c.total, 0) + ' 考试 / ' + d.length + ' 分类');
