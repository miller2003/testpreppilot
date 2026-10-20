// Prints the credential-field manifest as JSON on stdout, for _gen_og.py.
//
// The OG generator is Python (Pillow) and the catalog is JavaScript, so one of
// them has to hand data to the other. Printing JSON over stdout keeps the
// catalog as the single source of truth — the alternative, copying the field
// names into the Python file, is how a social card ends up advertising a field
// that was renamed three months ago.
//
// Used by _gen_og.py; not part of the site build.

import { buildDirectory } from './src/data/examCatalog/index.mjs';

const fields = buildDirectory().map((c) => ({
  id: c.id,
  name: c.name,
  total: c.total,
  specialisms: (c.groups || []).length,
}));

process.stdout.write(JSON.stringify(fields));
