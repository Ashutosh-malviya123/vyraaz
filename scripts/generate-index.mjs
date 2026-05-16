import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const serverEntry = path.resolve('dist/server/index.js');
if (!existsSync(serverEntry)) {
  console.error('[generate-index] dist/server/index.js not found. Run `bun run build` first.');
  process.exit(1);
}

const mod = await import(serverEntry);
const handler = mod.default ?? mod;
const fetchFn = typeof handler === 'function' ? handler : handler?.fetch;
if (typeof fetchFn !== 'function') {
  console.error('[generate-index] No fetch handler exported from server build.');
  process.exit(1);
}

const req = new Request('http://localhost/', { method: 'GET' });
const res = await fetchFn(req, {}, {});
if (!res || typeof res.text !== 'function') {
  console.error('[generate-index] Handler did not return a Response.');
  process.exit(1);
}
const html = await res.text();

await mkdir('dist/client', { recursive: true });
await writeFile('dist/client/index.html', html, 'utf8');
console.log(`[generate-index] Wrote dist/client/index.html (${html.length} bytes, status ${res.status})`);