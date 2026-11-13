// Builds the published site from src/: one minified script, one minified stylesheet, and an offline cache.
// Run with:  npm run build
import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const src = p => path.join(root, 'src', p);
const out = p => path.join(root, p);

// The game imports the engine as "three" and "three/addons/...": point both at the copies kept in src/vendor.
const vendorThree = {
  name: 'vendor-three',
  setup(b) {
    b.onResolve({ filter: /^three$/ }, () => ({ path: src('vendor/three/three.module.js') }));
    b.onResolve({ filter: /^three\/addons\// }, a => ({ path: src('vendor/three/addons/' + a.path.slice('three/addons/'.length)) }));
  },
};

await build({
  entryPoints: [src('game.js')], outfile: out('app.js'),
  bundle: true, minify: true, format: 'esm', target: 'es2020', legalComments: 'none',
  banner: { js: '/* Bug Bounty Wanderland. Includes three.js (MIT licence, see src/vendor/three/LICENSE). Built from src/ by build.mjs. */' },
  plugins: [vendorThree], logLevel: 'warning',
});

// Styles: the two sheets joined in order, then minified.
const cssJoined = readFileSync(src('style.css'), 'utf8') + '\n' + readFileSync(src('game.css'), 'utf8');
writeFileSync(out('app.src.css'), cssJoined);
await build({ entryPoints: [out('app.src.css')], outfile: out('app.css'), minify: true, logLevel: 'warning' });
(await import('node:fs/promises')).unlink(out('app.src.css'));

// A short fingerprint of each file, so browsers fetch a new copy exactly when the content changes.
const tag = f => createHash('sha256').update(readFileSync(out(f))).digest('hex').slice(0, 10);
const v = { js: tag('app.js'), css: tag('app.css'), boot: tag('boot.js') };

let html = readFileSync(out('index.html'), 'utf8');
const swap = (re, to, what) => { if (!re.test(html)) throw new Error('index.html: could not find ' + what); html = html.replace(re, to); };
swap(/app\.js\?v=[\w-]+/, `app.js?v=${v.js}`, 'the app.js reference');
swap(/app\.css\?v=[\w-]+/, `app.css?v=${v.css}`, 'the app.css reference');
swap(/boot\.js\?v=[\w-]+/, `boot.js?v=${v.boot}`, 'the boot.js reference');
writeFileSync(out('index.html'), html);

// Offline cache. Its version changes whenever any published file changes, which retires the old cache.
const version = createHash('sha256').update(html).digest('hex').slice(0, 12);
const assets = ['./', `app.js?v=${v.js}`, `app.css?v=${v.css}`, `boot.js?v=${v.boot}`];
writeFileSync(out('sw.js'), readFileSync(src('sw.template.js'), 'utf8').replace('__VERSION__', version).replace('__ASSETS__', JSON.stringify(assets)));

const kb = f => (readFileSync(out(f)).length / 1024).toFixed(0) + ' KB';
console.log(`built: app.js ${kb('app.js')}, app.css ${kb('app.css')}, sw.js (cache ${version})`);
