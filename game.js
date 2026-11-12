// Bug Bounty Wanderland: a calm, endless open world about the ethical hacking community.
// Everything is generated in code: terrain, models, textures, weather and music.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { mergeGeometries as mergeRaw } from 'three/addons/utils/BufferGeometryUtils.js';
// Some built-in shapes are indexed and some aren't; normalise before merging.
const mergeGeometries = list => mergeRaw(list.some(g => !g.index) ? list.map(g => g.index ? g.toNonIndexed() : g) : list);
import { WORLDS, WEATHERS, SEVERITY, POWERS, ORB_TYPES, FUEL, ACHIEVEMENTS, GROUP_LABEL, TIPS, rankFor, xpForLevel } from './data.js';
import { HACKERS, PLAYER } from './hackers.js';

// =====================================================================
// Helpers
// =====================================================================
const $ = id => document.getElementById(id);
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
};
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const rand = (a, b) => a + Math.random() * (b - a);
const smooth = (e0, e1, x) => { const t = clamp((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };
const pick = a => a[Math.floor(Math.random() * a.length)];
const damp = (k, dt) => 1 - Math.exp(-k * dt);
const wrapAngle = a => { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a; };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const money = n => '$' + Math.round(n).toLocaleString('en-US');

function hash2(x, y) {
  let h = (Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}
function noise2(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
  const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
  return lerp(lerp(hash2(ix, iy), hash2(ix + 1, iy), sx), lerp(hash2(ix, iy + 1), hash2(ix + 1, iy + 1), sx), sy);
}
function fbm2(x, y, o = 4) {
  let v = 0, a = 0.5, t = 0;
  for (let i = 0; i < o; i++) { v += a * noise2(x, y); t += a; x = x * 2.03 + 17.1; y = y * 2.03 + 9.7; a *= 0.5; }
  return v / t;
}
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function tileFbm(size, base, oct, seed) {
  const out = new Float32Array(size * size); let amp = 1, tot = 0;
  for (let o = 0; o < oct; o++) {
    const cells = base << o, sx0 = seed * 131, sy0 = o * 977 + seed * 7;
    for (let y = 0; y < size; y++) {
      const fy = y / size * cells, iy = Math.floor(fy), ty = fy - iy, sy = ty * ty * (3 - 2 * ty), y0 = iy % cells, y1 = (iy + 1) % cells;
      for (let x = 0; x < size; x++) {
        const fx = x / size * cells, ix = Math.floor(fx), tx = fx - ix, sx = tx * tx * (3 - 2 * tx), x0 = ix % cells, x1 = (ix + 1) % cells;
        out[y * size + x] += amp * lerp(lerp(hash2(x0 + sx0, y0 + sy0), hash2(x1 + sx0, y0 + sy0), sx), lerp(hash2(x0 + sx0, y1 + sy0), hash2(x1 + sx0, y1 + sy0), sx), sy);
      }
    }
    tot += amp; amp *= 0.5;
  }
  for (let i = 0; i < out.length; i++) out[i] /= tot;
  return out;
}

// =====================================================================
// Save data
// =====================================================================
if (location.hash === '#reset') { try { localStorage.removeItem('bbw_save'); localStorage.removeItem('bbw_intro'); } catch (e) { /* ignore */ } history.replaceState(null, '', location.pathname); }
const SAVE = Object.assign({
  xp: 0, level: 1, bounty: 0, submitted: 0, reports: [], bugs: { low: 0, medium: 0, high: 0, critical: 0 },
  collected: [], lodges: [], codex: [PLAYER.handle], shrines: {}, ach: [], worlds: ['tundra'], world: 'tundra',
  pos: {}, dist: 0, weathers: [], powersUsed: [], mount: 'reindeer', avatar: 'hacker', bestChain: 0, warps: 0, fuel: 40,
  cans: 0, orbs: 0, questStep: 0, quest: null, animals: [],
}, store.get('bbw_save', {}));
const collectedSet = new Set(SAVE.collected), lodgeSet = new Set(SAVE.lodges), codexSet = new Set(SAVE.codex);
codexSet.add(PLAYER.handle);
// Drop any cards from older versions that are no longer in the (fictional) codex.
const KNOWN_HANDLES = new Set([PLAYER.handle, ...HACKERS.map(h => h.handle)]);
for (const h of [...codexSet]) if (!KNOWN_HANDLES.has(h)) codexSet.delete(h);
for (const k of Object.keys(SAVE.shrines)) if (!KNOWN_HANDLES.has(SAVE.shrines[k])) delete SAVE.shrines[k];
if (!Number.isFinite(SAVE.fuel)) SAVE.fuel = 40;
let saveDirty = false;
function save() { saveDirty = true; }
function flushSave() {
  if (!saveDirty) return; saveDirty = false;
  SAVE.collected = [...collectedSet].slice(-6000); SAVE.lodges = [...lodgeSet].slice(-3000); SAVE.codex = [...codexSet];
  store.set('bbw_save', SAVE);
}
setInterval(flushSave, 2500);
addEventListener('pagehide', () => { saveDirty = true; flushSave(); });

// =====================================================================
// Quality, renderer, scene
// =====================================================================
const isTouch = ('ontouchstart' in window) || (window.matchMedia && matchMedia('(pointer: coarse)').matches);
if (isTouch) document.body.classList.add('touch');
const QUALITY = {
  high:   { pr: 2,    shadow: 2048, bloom: true,  particles: 2600, radius: 5, trees: 70, cover: 340, coverR: 2 },
  medium: { pr: 1.25, shadow: 1024, bloom: true,  particles: 1500, radius: 4, trees: 50, cover: 200, coverR: 1 },
  low:    { pr: 1,    shadow: 0,    bloom: false, particles: 700,  radius: 3, trees: 34, cover: 0,   coverR: 0 },
};
let qName = store.get('bbw_quality', isTouch ? 'medium' : 'high');
if (!QUALITY[qName]) qName = 'high';
const Q = QUALITY[qName];

const canvas = $('c');
let renderer;
try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' }); }
catch (e) { $('loadText').textContent = 'Sorry, your browser or device does not support 3D graphics (WebGL).'; throw e; }
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, Q.pr));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = Q.shadow > 0;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const maxAniso = renderer.capabilities.getMaxAnisotropy();

const scene = new THREE.Scene();
const VIEW = Q.radius * 64;
const FOG = new THREE.Color();
scene.fog = new THREE.FogExp2(FOG, 2 / VIEW);
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 1500);
let composer = null, bloomPass = null, gradePass = null;
if (Q.bloom) {
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  bloomPass = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.6, 0.7, 0.82);
  composer.addPass(bloomPass);
  // Soft vignette, a touch more colour, and a gentle radial blur while using turbo.
  gradePass = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, uVig: { value: 0.34 }, uSpeed: { value: 0 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `uniform sampler2D tDiffuse; uniform float uVig; uniform float uSpeed; varying vec2 vUv;
      void main(){
        vec2 d = vUv - 0.5; vec3 c = texture2D(tDiffuse, vUv).rgb;
        if (uSpeed > 0.01) { for (int i = 1; i < 5; i++) c += texture2D(tDiffuse, vUv - d * uSpeed * 0.014 * float(i)).rgb; c /= 5.0; }
        float v = smoothstep(0.9, 0.3, length(d * vec2(1.0, 0.88)));
        c *= mix(1.0 - uVig, 1.0, v);
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); c = max(mix(vec3(l), c, 1.1), 0.0);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  composer.addPass(gradePass);
  composer.addPass(new OutputPass());
}
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight); if (composer) composer.setSize(innerWidth, innerHeight);
});

// =====================================================================
// Procedural textures
// =====================================================================
function makeCanvas(w, h = w) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
function texFrom(c, srgb, repeat = 1) {
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = maxAniso; t.repeat.set(repeat, repeat);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace; return t;
}
function normalTex(h, size, strength, repeat = 1) {
  const [c, g] = makeCanvas(size), img = g.createImageData(size, size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const l = h[y * size + (x - 1 + size) % size], r = h[y * size + (x + 1) % size], u = h[((y - 1 + size) % size) * size + x], d = h[((y + 1) % size) * size + x];
    const nx = (l - r) * strength, ny = (d - u) * strength, len = Math.hypot(nx, ny, 1), i = (y * size + x) * 4;
    img.data[i] = (nx / len * 0.5 + 0.5) * 255; img.data[i + 1] = (ny / len * 0.5 + 0.5) * 255; img.data[i + 2] = (1 / len * 0.5 + 0.5) * 255; img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0); return texFrom(c, false, repeat);
}
const SNOW_NORMAL = normalTex(tileFbm(256, 8, 4, 7), 256, 4);
const CLOTH_NORMAL = normalTex(tileFbm(256, 24, 3, 21), 256, 2.5, 2);
const WATER_NORMAL = normalTex(tileFbm(256, 4, 4, 61), 256, 2.2);
const ICE_NORMAL = (() => {
  const S = 512, h = tileFbm(S, 4, 5, 51), [cc, cg] = makeCanvas(S);
  cg.fillStyle = '#000'; cg.fillRect(0, 0, S, S); cg.strokeStyle = '#fff'; cg.lineWidth = 1.4;
  for (let k = 0; k < 26; k++) {
    let x = Math.random() * S, y = Math.random() * S, a = Math.random() * 6.28; const pts = [[x, y]];
    for (let s = 0; s < 8; s++) { a += rand(-0.7, 0.7); x += Math.cos(a) * rand(10, 30); y += Math.sin(a) * rand(10, 30); pts.push([x, y]); }
    for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) { cg.beginPath(); pts.forEach(([px, py], i) => i ? cg.lineTo(px + ox, py + oy) : cg.moveTo(px + ox, py + oy)); cg.stroke(); }
  }
  const crack = cg.getImageData(0, 0, S, S).data, hh = new Float32Array(S * S);
  for (let i = 0; i < S * S; i++) hh[i] = h[i] * 0.4 - crack[i * 4] / 255 * 0.5;
  return normalTex(hh, S, 3);
})();
const BARK = (() => {
  const S = 256, n = tileFbm(S, 4, 4, 41), [c, g] = makeCanvas(S), img = g.createImageData(S, S), hh = new Float32Array(S * S);
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const i = y * S + x, stripe = 0.5 + 0.5 * Math.sin((x / S) * Math.PI * 18 + n[i] * 6), v = 0.55 + stripe * 0.3 + n[i] * 0.2;
    hh[i] = stripe * 0.7 + n[i] * 0.3; img.data[i * 4] = v * 110; img.data[i * 4 + 1] = v * 74; img.data[i * 4 + 2] = v * 50; img.data[i * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0); return { map: texFrom(c, true), normal: normalTex(hh, S, 6) };
})();
const CIRCUIT = (() => { // glowing traces for shrines
  const S = 256, [c, g] = makeCanvas(S); g.fillStyle = '#000'; g.fillRect(0, 0, S, S);
  g.strokeStyle = '#fff'; g.lineWidth = 2; g.fillStyle = '#fff';
  const rng = mulberry32(9);
  for (let k = 0; k < 34; k++) {
    let x = Math.floor(rng() * 16) * 16 + 8, y = Math.floor(rng() * 16) * 16 + 8;
    g.beginPath(); g.moveTo(x, y);
    for (let s = 0; s < 4; s++) { if (rng() < 0.5) x += (rng() < 0.5 ? -1 : 1) * 16 * (1 + Math.floor(rng() * 3)); else y += (rng() < 0.5 ? -1 : 1) * 16 * (1 + Math.floor(rng() * 3)); g.lineTo(x, y); }
    g.stroke(); g.fillRect(x - 3, y - 3, 6, 6);
  }
  return texFrom(c, true);
})();
function radialTex(stops, size = 128) {
  const [c, g] = makeCanvas(size), gr = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  stops.forEach(([o, a]) => gr.addColorStop(o, `rgba(255,255,255,${a})`)); g.fillStyle = gr; g.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const GLOW = radialTex([[0, 1], [0.25, 0.55], [0.6, 0.12], [1, 0]]);
const FLAKE = radialTex([[0, 1], [0.45, 0.7], [1, 0]], 64);
const PETAL = (() => { const [c, g] = makeCanvas(64); g.translate(32, 32); g.rotate(0.6); g.fillStyle = '#fff'; g.beginPath(); g.ellipse(0, 0, 26, 14, 0, 0, Math.PI * 2); g.fill(); g.fillStyle = 'rgba(0,0,0,0.12)'; g.beginPath(); g.moveTo(-26, 0); g.lineTo(-14, -3); g.lineTo(-14, 3); g.fill(); return new THREE.CanvasTexture(c); })();
const LEAF = (() => { const [c, g] = makeCanvas(64); g.translate(32, 32); g.rotate(-0.5); g.fillStyle = '#fff'; g.beginPath(); g.moveTo(-28, 0); g.quadraticCurveTo(0, -20, 28, 0); g.quadraticCurveTo(0, 20, -28, 0); g.fill(); g.strokeStyle = 'rgba(0,0,0,0.25)'; g.lineWidth = 2; g.beginPath(); g.moveTo(-26, 0); g.lineTo(26, 0); g.stroke(); return new THREE.CanvasTexture(c); })();
const DATA = (() => { const [c, g] = makeCanvas(16, 64); const gr = g.createLinearGradient(0, 0, 0, 64); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.8, 'rgba(255,255,255,0.6)'); gr.addColorStop(1, 'rgba(255,255,255,1)'); g.fillStyle = gr; g.fillRect(5, 0, 6, 64); return new THREE.CanvasTexture(c); })();
const BEAM = (() => { const [c, g] = makeCanvas(64); const gr = g.createLinearGradient(0, 64, 0, 0); gr.addColorStop(0, 'rgba(255,255,255,.9)'); gr.addColorStop(0.3, 'rgba(255,255,255,.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();

// Text labels drawn onto canvases (names floating above shrines and towers).
// Label textures are cached by their text, so identical signs share one texture.
const labelCache = new Map();
const BLANK = new THREE.CanvasTexture(makeCanvas(4)[0]);
function labelTex(title, sub, color, w, h) {
  const key = [title, sub, color, w, h].join('|');
  let tex = labelCache.get(key);
  if (tex) return tex;
  const [c, g] = makeCanvas(w, h);
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.shadowColor = color; g.shadowBlur = 18;
  g.fillStyle = color; g.font = `700 ${sub ? 52 : 62}px "Segoe UI", system-ui, sans-serif`;
  g.fillText(title, w / 2, sub ? h * 0.38 : h / 2, w - 20);
  if (sub) { g.shadowBlur = 8; g.font = '500 30px "Segoe UI", system-ui, sans-serif'; g.fillStyle = 'rgba(255,255,255,0.85)'; g.fillText(sub, w / 2, h * 0.8, w - 20); }
  tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  labelCache.set(key, tex);
  return tex;
}
function makeLabel(w = 512, h = 128) {
  const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: BLANK, transparent: true, depthWrite: false, fog: true }));
  spr.userData = { w, h };
  return spr;
}
function drawLabel(spr, title, sub = '', color = '#ffffff', scale = 1) {
  const { w, h } = spr.userData;
  spr.material.map = labelTex(title, sub, color, w, h);
  spr.scale.set(4 * scale * (w / 512), 4 * scale * (h / 512), 1);
}

// =====================================================================
// Materials
// =====================================================================
const M = {
  terrain: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, normalMap: SNOW_NORMAL, normalScale: new THREE.Vector2(0.7, 0.7) }),
  ice: new THREE.MeshPhysicalMaterial({ color: 0x9ec3e4, roughness: 0.14, clearcoat: 1, clearcoatRoughness: 0.06, normalMap: ICE_NORMAL, normalScale: new THREE.Vector2(0.35, 0.35) }),
  water: new THREE.MeshPhysicalMaterial({ color: 0x355a78, roughness: 0.06, metalness: 0.1, clearcoat: 1, normalMap: WATER_NORMAL, normalScale: new THREE.Vector2(0.4, 0.4) }),
  mirror: new THREE.MeshStandardMaterial({ color: 0x0c0614, roughness: 0.03, metalness: 0.9, normalMap: WATER_NORMAL, normalScale: new THREE.Vector2(0.08, 0.08) }),
  snow: new THREE.MeshStandardMaterial({ color: 0xf2f5ff, roughness: 0.9, normalMap: SNOW_NORMAL, normalScale: new THREE.Vector2(0.6, 0.6) }),
  tree: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }),
  cover: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, side: THREE.DoubleSide }),
  prop: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, flatShading: true }),
  propGlow: new THREE.MeshBasicMaterial({ vertexColors: true }),
  crystal: new THREE.MeshBasicMaterial({ vertexColors: true }),
  rock: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: true, normalMap: SNOW_NORMAL }),
  bark: new THREE.MeshStandardMaterial({ map: BARK.map, normalMap: BARK.normal, roughness: 0.95 }),
  wood: new THREE.MeshStandardMaterial({ map: BARK.map, normalMap: BARK.normal, color: 0x9a6b4b, roughness: 0.9 }),
  roof: new THREE.MeshStandardMaterial({ color: 0x3a2a2e, roughness: 0.9 }),
  stone: new THREE.MeshStandardMaterial({ color: 0x5b5f6e, roughness: 0.95, normalMap: SNOW_NORMAL }),
  windowDim: new THREE.MeshBasicMaterial({ color: new THREE.Color(1.0, 0.55, 0.22).multiplyScalar(0.9) }),
  windowLit: new THREE.MeshBasicMaterial({ color: new THREE.Color(1.0, 0.62, 0.28).multiplyScalar(3.2) }),
  fairy: new THREE.MeshBasicMaterial({ vertexColors: true }),
  star: new THREE.MeshStandardMaterial({ color: 0xffd36b, roughness: 0.2, metalness: 0.5, emissive: 0xffb13b, emissiveIntensity: 2.4 }),
  monolith: new THREE.MeshStandardMaterial({ color: 0x1a1d2a, roughness: 0.35, metalness: 0.6, emissive: 0x5ce1ff, emissiveMap: CIRCUIT, emissiveIntensity: 1.6 }),
  monolithLit: new THREE.MeshStandardMaterial({ color: 0x2a2416, roughness: 0.35, metalness: 0.6, emissive: 0xffc35a, emissiveMap: CIRCUIT, emissiveIntensity: 2.2 }),
  holo: new THREE.MeshBasicMaterial({ color: new THREE.Color(0.4, 1.6, 2.2), transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }),
  steel: new THREE.MeshStandardMaterial({ color: 0x8a90a0, roughness: 0.45, metalness: 0.8 }),
  redLight: new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 0.4, 0.5) }),
  ring: new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 0.6, 1.6), transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
  sign: new THREE.MeshStandardMaterial({ color: 0x3a2a20, roughness: 0.8 }),
  coal: new THREE.MeshStandardMaterial({ color: 0x18181c, roughness: 0.6 }),
  carrot: new THREE.MeshStandardMaterial({ color: 0xff8a2a, roughness: 0.6 }),
  red: new THREE.MeshStandardMaterial({ color: 0xc8303d, roughness: 0.45 }),
  green: new THREE.MeshStandardMaterial({ color: 0x2f8f5b, roughness: 0.45 }),
  blue: new THREE.MeshStandardMaterial({ color: 0x3a6fd8, roughness: 0.45 }),
  ribbon: new THREE.MeshStandardMaterial({ color: 0xffd27a, roughness: 0.3, metalness: 0.6, emissive: 0x6b4a10, emissiveIntensity: 0.6 }),
  dark: new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.3 }),
  bugLeg: new THREE.MeshStandardMaterial({ color: 0x1a1c24, roughness: 0.4, metalness: 0.4 }),
  wing: new THREE.MeshBasicMaterial({ color: new THREE.Color(1.4, 1.6, 2.0), transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
  trail: new THREE.MeshStandardMaterial({ color: 0xaab4d8, roughness: 1, transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }),
  // Avatars
  velvet: new THREE.MeshPhysicalMaterial({ color: 0xa3121f, roughness: 0.62, sheen: 1, sheenRoughness: 0.45, sheenColor: new THREE.Color(0xff7a86), normalMap: CLOTH_NORMAL, normalScale: new THREE.Vector2(0.35, 0.35) }),
  fur: new THREE.MeshStandardMaterial({ color: 0xf7f4ee, roughness: 1, normalMap: CLOTH_NORMAL, normalScale: new THREE.Vector2(1.2, 1.2) }),
  hoodie: new THREE.MeshPhysicalMaterial({ color: 0xe9eaf0, roughness: 0.85, sheen: 0.6, sheenColor: new THREE.Color(0xdfe8ff), normalMap: CLOTH_NORMAL, normalScale: new THREE.Vector2(0.9, 0.9) }),
  hoodIn: new THREE.MeshStandardMaterial({ color: 0x2a2e3a, roughness: 0.9, side: THREE.DoubleSide }),
  jeans: new THREE.MeshStandardMaterial({ color: 0x2b3a5c, roughness: 0.85, normalMap: CLOTH_NORMAL }),
  sneaker: new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.5 }),
  sole: new THREE.MeshStandardMaterial({ color: 0x5ce1ff, roughness: 0.4, emissive: 0x1a6a80, emissiveIntensity: 0.6 }),
  pack: new THREE.MeshStandardMaterial({ color: 0x23262f, roughness: 0.7, normalMap: CLOTH_NORMAL }),
  neon: new THREE.MeshBasicMaterial({ color: new THREE.Color(0.4, 2.2, 2.8) }),
  skin: new THREE.MeshPhysicalMaterial({ color: 0xe8b896, roughness: 0.55, sheen: 0.4, sheenColor: new THREE.Color(0xffc0a0) }),
  leather: new THREE.MeshStandardMaterial({ color: 0x15110f, roughness: 0.32, metalness: 0.15 }),
  gold: new THREE.MeshStandardMaterial({ color: 0xffc95a, roughness: 0.25, metalness: 1 }),
  mitten: new THREE.MeshStandardMaterial({ color: 0x1f5e3c, roughness: 0.85, normalMap: CLOTH_NORMAL }),
  sack: new THREE.MeshStandardMaterial({ color: 0x8a6440, roughness: 0.95, normalMap: CLOTH_NORMAL, normalScale: new THREE.Vector2(1.5, 1.5) }),
  nose: new THREE.MeshStandardMaterial({ color: 0xe0907a, roughness: 0.5 }),
  deer: new THREE.MeshStandardMaterial({ color: 0x7b5434, roughness: 0.95, normalMap: CLOTH_NORMAL, normalScale: new THREE.Vector2(1.6, 1.6) }),
  deerLight: new THREE.MeshStandardMaterial({ color: 0xe6d6bd, roughness: 1, normalMap: CLOTH_NORMAL, normalScale: new THREE.Vector2(1.6, 1.6) }),
  antler: new THREE.MeshStandardMaterial({ color: 0xd9c8a5, roughness: 0.7 }),
  hoof: new THREE.MeshStandardMaterial({ color: 0x2a211b, roughness: 0.5 }),
  blanket: new THREE.MeshPhysicalMaterial({ color: 0x1f6b45, roughness: 0.7, sheen: 1, sheenColor: new THREE.Color(0x7fe0a8), normalMap: CLOTH_NORMAL }),
  paint: new THREE.MeshPhysicalMaterial({ color: 0x1d8fb0, roughness: 0.3, metalness: 0.3, clearcoat: 1, clearcoatRoughness: 0.1 }),
  chrome: new THREE.MeshStandardMaterial({ color: 0xdfe4ee, roughness: 0.15, metalness: 1 }),
  rubber: new THREE.MeshStandardMaterial({ color: 0x1a1a1c, roughness: 0.8 }),
  wicker: new THREE.MeshStandardMaterial({ map: BARK.map, color: 0xd9b07a, roughness: 0.9 }),
};
M.fairy.color.setScalar(3.2);
M.crystal.color.setScalar(0.9);
for (const m of [M.ice, M.water, M.mirror]) Object.assign(m, { polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
const SEV_MATS = SEVERITY.map(s => new THREE.MeshStandardMaterial({ color: s.color, emissive: s.color, emissiveIntensity: 2.2, roughness: 0.3, metalness: 0.2 }));

// Shared shader tweaks: wind sway for trees, soft dissolve near the camera, glowing grid for the Neon world.
const U = {
  time: { value: 0 }, wind: { value: 0.3 }, fade: { value: 0 },
  grid: { value: 0 }, gridC1: { value: new THREE.Vector3(1, 0.2, 0.85) }, gridC2: { value: new THREE.Vector3(0.2, 0.9, 1) }, player: { value: new THREE.Vector2() },
  sparkle: { value: 0 },
};
function patch(mat, { sway = 0, swayBase = 0.8, fade = false, grid = false }) {
  mat.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, { uTime: U.time, uWind: U.wind, uFade: U.fade, uGrid: U.grid, uGridC1: U.gridC1, uGridC2: U.gridC2, uPlayer: U.player, uSparkle: U.sparkle });
    const head = '#include <common>\nvarying vec3 vWPos;\nuniform float uTime;\nuniform float uWind;\nuniform float uFade;\nuniform float uGrid;\nuniform vec3 uGridC1;\nuniform vec3 uGridC2;\nuniform vec2 uPlayer;\nuniform float uSparkle;';
    sh.vertexShader = sh.vertexShader.replace('#include <common>', head);
    if (sway) sh.vertexShader = sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 swIp = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
      #else
        vec3 swIp = vec3(0.0);
      #endif
      float swAmt = max(position.y - ${swayBase.toFixed(3)}, 0.0) * ${sway.toFixed(3)} * uWind;
      transformed.x += sin(uTime * 1.4 + swIp.x * 0.15 + swIp.z * 0.1) * swAmt;
      transformed.z += cos(uTime * 1.1 + swIp.z * 0.13) * swAmt * 0.6;`);
    sh.vertexShader = sh.vertexShader.replace('#include <project_vertex>', `#include <project_vertex>
      vec4 wpTmp = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        wpTmp = instanceMatrix * wpTmp;
      #endif
      vWPos = (modelMatrix * wpTmp).xyz;`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', head);
    if (fade) sh.fragmentShader = sh.fragmentShader.replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
      float fdD = distance(vWPos, cameraPosition);
      if (fdD < uFade) { float dith = fract(sin(dot(floor(gl_FragCoord.xy), vec2(12.9898, 78.233))) * 43758.5453); if (dith > smoothstep(uFade - 3.5, uFade, fdD) * 0.9) discard; }`);
    if (grid) sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      if (uGrid > 0.0) {
        vec2 gp = vWPos.xz / 6.0; vec2 gd = abs(fract(gp - 0.5) - 0.5) / fwidth(gp); float gl1 = 1.0 - min(min(gd.x, gd.y), 1.0);
        vec2 gp2 = vWPos.xz / 48.0; vec2 gd2 = abs(fract(gp2 - 0.5) - 0.5) / fwidth(gp2); float gl2 = 1.0 - min(min(gd2.x, gd2.y), 1.0);
        float pDist = length(vWPos.xz - uPlayer);
        float pulse = 0.85 + 0.15 * sin(uTime * 0.4 - pDist * 0.02); // a slow, barely-there breathing, never a flicker
        float near1 = smoothstep(90.0, 15.0, distance(vWPos, cameraPosition));
        float near2 = smoothstep(260.0, 30.0, distance(vWPos, cameraPosition));
        totalEmissiveRadiance += uGrid * (uGridC1 * gl1 * 0.45 * pulse * near1 + uGridC2 * gl2 * 0.8 * near2);
      }
      if (uSparkle > 0.0) { // tiny glints on snow and sand that twinkle as you ride past
        vec2 spP = vWPos.xz * 5.0; vec2 spC = floor(spP);
        float spH = fract(sin(dot(spC, vec2(12.9898, 78.233))) * 43758.5453);
        float spT = pow(0.5 + 0.5 * sin(uTime * 1.6 + spH * 200.0 + dot(cameraPosition.xz, vec2(0.9, 0.7))), 8.0);
        float spD = smoothstep(0.3, 0.0, length(fract(spP) - 0.5));
        totalEmissiveRadiance += vec3(0.8, 0.9, 1.0) * step(0.975, spH) * spT * spD * uSparkle * 2.2 * smoothstep(60.0, 6.0, distance(vWPos, cameraPosition));
      }`);
  };
  mat.needsUpdate = true;
}
patch(M.terrain, { grid: true });
patch(M.tree, { sway: 0.03, fade: true });
patch(M.cover, { sway: 0.4, swayBase: 0.05 });
patch(M.crystal, { fade: true });
patch(M.rock, { fade: true });

// =====================================================================
// Sky
// =====================================================================
const v3 = a => new THREE.Vector3(...a);
const SKY = {
  uTime: { value: 0 }, uZenith: { value: new THREE.Vector3() }, uMid: { value: new THREE.Vector3() }, uFog: { value: new THREE.Vector3() },
  uA1: { value: new THREE.Vector3() }, uA2: { value: new THREE.Vector3() }, uAurora: { value: 0.3 }, uStars: { value: 1 },
  uSun: { value: new THREE.Vector3(0, 0.3, -1) }, uSunColor: { value: new THREE.Vector3(1, 1, 1) }, uSunSize: { value: 0.9996 }, uSunGlow: { value: 0.3 },
  uClouds: { value: 0 }, uCloudColor: { value: new THREE.Vector3() }, uRetro: { value: 0 }, uMeteors: { value: 0 },
};
const skyMat = new THREE.ShaderMaterial({
  uniforms: SKY, side: THREE.BackSide, depthWrite: false, fog: false,
  vertexShader: `varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform float uTime, uAurora, uStars, uSunSize, uSunGlow, uClouds, uRetro, uMeteors;
    uniform vec3 uZenith, uMid, uFog, uA1, uA2, uSun, uSunColor, uCloudColor;
    varying vec3 vDir;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
      return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y); }
    float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ v += a*noise(p); p *= 2.03; a *= 0.5; } return v; }
    void main(){
      vec3 d = normalize(vDir); float h = d.y;
      vec3 col = mix(uFog, uMid, smoothstep(0.0, 0.2, h));
      col = mix(col, uZenith, smoothstep(0.2, 0.85, h));
      float az = atan(d.z, d.x);
      vec2 sp = vec2(az * 140.0, h * 260.0); vec2 cell = floor(sp); vec2 f = fract(sp) - 0.5;
      float r = hash(cell);
      float star = step(0.986, r) * smoothstep(0.28, 0.0, length(f)) * smoothstep(0.03, 0.3, h);
      star *= (0.55 + 0.45 * sin(uTime * (1.0 + r * 2.0) + r * 60.0)) * uStars * (1.0 - uClouds * 0.85);
      col += vec3(0.95, 0.95, 1.0) * star * 1.4;
      for (int i = 0; i < 2; i++){
        float fi = float(i);
        float band = fbm(vec2(az * 2.2 + fi * 2.1 + uTime * 0.012, fi * 3.0 + uTime * 0.02));
        float center = 0.26 + fi * 0.09 + (band - 0.5) * 0.2;
        float curtain = smoothstep(0.35, 0.8, fbm(vec2(az * 11.0 + uTime * 0.05, fi * 5.0 + h * 2.0)));
        float a = smoothstep(0.12, 0.0, abs(h - center)) * curtain * smoothstep(0.04, 0.16, h);
        col += mix(uA1, uA2, fi) * a * uAurora;
      }
      vec3 sd = normalize(uSun); float m = dot(d, sd);
      float disc = smoothstep(uSunSize, uSunSize + (1.0 - uSunSize) * 0.25, m);
      if (uRetro > 0.5) {
        float yy = d.y - sd.y;
        float stripes = yy > 0.0 ? 1.0 : step(0.42 + yy * 3.0, fract(yy * 70.0 + uTime * 0.2));
        col += mix(vec3(1.0, 0.15, 0.55), vec3(1.0, 0.85, 0.3), smoothstep(-0.15, 0.15, yy)) * disc * stripes * 2.4;
      } else col += uSunColor * disc * 2.4;
      col += uSunColor * pow(max(m, 0.0), 160.0) * uSunGlow * 0.5;
      col += uSunColor * pow(max(m, 0.0), 7.0) * uSunGlow * 0.14;
      if (uClouds > 0.01 && h > 0.0) {
        vec2 cp = d.xz / (h + 0.12) * 1.1 + vec2(uTime * 0.012, uTime * 0.005);
        float c = fbm(cp);
        float cov = smoothstep(1.0 - uClouds * 0.75, 1.05, c + 0.3) * smoothstep(0.0, 0.18, h);
        vec3 cc = uCloudColor * (0.55 + 0.9 * pow(max(m, 0.0), 5.0));
        col = mix(col, cc, cov * 0.9);
      }
      if (uMeteors > 0.0) {
        for (int i = 0; i < 3; i++) {
          float fi = float(i); float T = uTime * 0.32 + fi * 0.37; float id = floor(T); float p = fract(T);
          vec2 s0 = vec2(hash(vec2(id, fi)) * 6.283 - 3.1416, 0.38 + hash(vec2(fi + 3.0, id)) * 0.4);
          vec2 dm = normalize(vec2(0.6, -0.32)); vec2 headp = s0 + dm * p * 0.55;
          vec2 q = vec2(az, h) - headp; vec2 tv = -dm * 0.14;
          float tt = clamp(dot(q, tv) / dot(tv, tv), 0.0, 1.0); float dd = length(q - tv * tt);
          col += vec3(1.0, 0.95, 0.85) * smoothstep(0.004, 0.0, dd) * (1.0 - tt) * smoothstep(0.0, 0.1, p) * smoothstep(1.0, 0.7, p) * 2.6 * uMeteors;
        }
      }
      gl_FragColor = vec4(col, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`
});
const sky = new THREE.Mesh(new THREE.SphereGeometry(1100, 48, 24), skyMat);
sky.renderOrder = -1; scene.add(sky);
const envScene = new THREE.Scene();
envScene.add(new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), skyMat));
const pmrem = new THREE.PMREMGenerator(renderer);
let envRT = null;

// Lights
const hemi = new THREE.HemisphereLight(0xffffff, 0x222222, 0.85);
const sunLight = new THREE.DirectionalLight(0xffffff, 1.8);
sunLight.castShadow = Q.shadow > 0;
if (sunLight.castShadow) {
  sunLight.shadow.mapSize.set(Q.shadow, Q.shadow);
  Object.assign(sunLight.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30, near: 1, far: 160 });
  sunLight.shadow.bias = -0.0005; sunLight.shadow.normalBias = 0.04;
}
const lantern = new THREE.PointLight(0xffa860, 5, 10, 1.6);
scene.add(hemi, sunLight, sunLight.target, lantern);

// =====================================================================
// World definition & height function
// =====================================================================
let W = WORLDS.find(w => w.id === SAVE.world) || WORLDS[0];
const ridge = n => 1 - Math.abs(n * 2 - 1);
// Every world has its own kind of land, not just its own colours.
function H(x, z) {
  const sx = x + W.seed * 1371, sz = z - W.seed * 917, T = W.terrain;
  let h;
  if (T === 'dunes') { // long sand ridges and flat-topped table mountains
    h = (fbm2(sx * 0.003, sz * 0.003, 3) - W.lakeBias) * 32;
    h += Math.pow(ridge(fbm2(sx * 0.011 + Math.sin(sz * 0.004) * 1.5, sz * 0.005, 2)), 2.2) * 10;
    h += (fbm2(sx * 0.05, sz * 0.05, 2) - 0.5) * 0.8;
    if (h > 0) h += smooth(0.58, 0.68, fbm2(sx * 0.0045 + 9, sz * 0.0045 - 4, 2)) * 20;
  } else if (T === 'terrace') { // stepped hillsides, like rice terraces
    const b = (fbm2(sx * 0.0032 + 100, sz * 0.0032 - 50, 4) - W.lakeBias) * W.hills;
    if (b > 0) { const st = 3.2, k = b / st; h = (Math.floor(k) + smooth(0.7, 1, k - Math.floor(k))) * st; } else h = b;
    h += (fbm2(sx * 0.03, sz * 0.03, 2) - 0.5) * 0.4;
  } else if (T === 'blocks') { // wide flat plains with broad raised platforms
    h = (fbm2(sx * 0.0028 + 100, sz * 0.0028 - 50, 3) - W.lakeBias) * 16;
    const p = fbm2(sx * 0.0055 - 20, sz * 0.0055 + 70, 2);
    if (h > 0) h += smooth(0.55, 0.61, p) * 9 + smooth(0.68, 0.74, p) * 9;
  } else if (T === 'valleys') { // rolling hills cut by winding rivers
    h = (fbm2(sx * 0.0032 + 100, sz * 0.0032 - 50, 4) - 0.36) * W.hills + (fbm2(sx * 0.025, sz * 0.025, 3) - 0.5) * W.bumps;
    const r = Math.abs(fbm2(sx * 0.0016 + 40, sz * 0.0016 - 90, 3) - 0.5) * 2;
    h = h * smooth(0.015, 0.16, r) - (1 - smooth(0.0, 0.05, r)) * 3;
    const m = smooth(0.6, 0.85, fbm2(sx * 0.0011 - 70, sz * 0.0011 + 33, 3));
    if (m > 0 && h > 0) h += m * (ridge(fbm2(sx * 0.006, sz * 0.006, 4)) ** 2) * W.mountains;
  } else if (T === 'islands') { // a scatter of small sandy islands in open sea
    h = (fbm2(sx * 0.0065 + 100, sz * 0.0065 - 50, 3) - 0.56) * 34 + (fbm2(sx * 0.03, sz * 0.03, 2) - 0.5) * 1.2;
    const v = smooth(0.7, 0.9, fbm2(sx * 0.0016 - 70, sz * 0.0016 + 33, 2));
    if (v > 0) h += v * 45; // now and then, one tall green island
  } else if (T === 'karst') { // flat misty valleys between tall stone towers
    h = (fbm2(sx * 0.003 + 100, sz * 0.003 - 50, 3) - W.lakeBias) * 16 + (fbm2(sx * 0.03, sz * 0.03, 2) - 0.5) * 1.5;
    if (h > -1) h += smooth(0.63, 0.74, fbm2(sx * 0.011 + 31, sz * 0.011 - 17, 2)) * (38 + fbm2(sx * 0.02, sz * 0.02, 2) * 40);
  } else if (T === 'craters') { // dusty plains pocked with round craters, and no water at all
    h = 5 + (fbm2(sx * 0.003 + 100, sz * 0.003 - 50, 3) - 0.4) * W.hills + (fbm2(sx * 0.04, sz * 0.04, 2) - 0.5) * 1.2;
    const C = 96, cx = Math.floor(sx / C), cz = Math.floor(sz / C), R = 10 + hash2(cx * 3 + 1, cz * 5 + 2) * 24;
    if (hash2(cx + 91, cz - 37) < 0.75) {
      const ox = (cx + 0.5) * C + (hash2(cx, cz) - 0.5) * (C - R * 2.7), oz = (cz + 0.5) * C + (hash2(cz + 7, cx - 3) - 0.5) * (C - R * 2.7);
      const d = Math.hypot(sx - ox, sz - oz) / R;
      if (d < 1.35) h += (d < 1 ? (d * d - 1) * R * 0.2 : 0) + Math.exp(-(((d - 1) / 0.14) ** 2)) * R * 0.09;
    }
    return Math.max(h, 0.8);
  } else if (T === 'plains') { // wide open, gently rolling meadows with small ponds
    h = (fbm2(sx * 0.0022 + 100, sz * 0.0022 - 50, 3) - 0.38) * 20 + (fbm2(sx * 0.012, sz * 0.012, 2) - 0.5) * 5;
    const m = smooth(0.66, 0.9, fbm2(sx * 0.0011 - 70, sz * 0.0011 + 33, 3));
    if (m > 0) h += m * 60;
  } else { // 'hills': snowy hills, frozen lakes and distant mountains
    h = (fbm2(sx * 0.0032 + 100, sz * 0.0032 - 50, 4) - W.lakeBias) * W.hills;
    h += (fbm2(sx * 0.025, sz * 0.025, 3) - 0.5) * W.bumps;
    const m = smooth(0.52, 0.8, fbm2(sx * 0.0011 - 70, sz * 0.0011 + 33, 3));
    if (m > 0) h += m * (ridge(fbm2(sx * 0.006, sz * 0.006, 4)) ** 2) * W.mountains + m * W.mountains * 0.16;
  }
  if (h < 0) h *= 0.35;
  return h;
}
const groundAt = (x, z) => Math.max(H(x, z), 0);
// Each world also grows its trees differently: [everywhere, extra inside groves, grove size].
const forestDensity = (x, z) => { const [b, a, f] = W.forest; return b + smooth(0.5, 0.72, fbm2(x * f + 300 + W.seed * 50, z * f - 120, 3)) * a; };

// =====================================================================
// Model builders
// =====================================================================
const withColor = (g, hex) => { const c = new THREE.Color(hex), n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g; };
function rodGeo(a, b, r, seg = 8) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), g = new THREE.CylinderGeometry(r, r, A.distanceTo(B), seg);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), B.clone().sub(A).normalize());
  g.applyMatrix4(new THREE.Matrix4().compose(A.clone().add(B).multiplyScalar(0.5), q, new THREE.Vector3(1, 1, 1)));
  return g;
}
const TREE_GEOS = {
  pine: (() => {
    const parts = [withColor(new THREE.CylinderGeometry(0.12, 0.2, 1.2, 7).translate(0, 0.6, 0), 0x4a3324)];
    for (const [r, h, y] of [[1.35, 1.9, 1.5], [1.05, 1.6, 2.45], [0.75, 1.35, 3.3], [0.45, 1.0, 4.0]]) {
      parts.push(withColor(new THREE.ConeGeometry(r, h, 9).translate(0, y, 0), 0x183626));
      parts.push(withColor(new THREE.ConeGeometry(r * 0.78, h * 0.42, 9).translate(0, y + h * 0.3, 0), 0xe9f0ff));
    }
    return mergeGeometries(parts);
  })(),
  sakura: (() => {
    const parts = [withColor(new THREE.CylinderGeometry(0.12, 0.22, 2.2, 7).translate(0, 1.1, 0), 0x4a3030),
      withColor(rodGeo([0, 1.8, 0], [0.7, 2.8, 0.2], 0.08), 0x4a3030), withColor(rodGeo([0, 2.0, 0], [-0.6, 2.9, -0.3], 0.07), 0x4a3030)];
    const cols = [0xf7a8c8, 0xf2c0d8, 0xe890b8, 0xfbd0e0];
    for (const [x, y, z, r] of [[0, 3.2, 0, 1.3], [0.9, 2.9, 0.3, 0.95], [-0.8, 3.0, -0.3, 1.0], [0.2, 3.9, -0.4, 0.9], [-0.3, 3.4, 0.8, 0.85]])
      parts.push(withColor(new THREE.IcosahedronGeometry(r, 1).translate(x, y, z), pick(cols)));
    return mergeGeometries(parts);
  })(),
  cactus: (() => {
    const g = 0x3d7a4a, parts = [withColor(new THREE.CylinderGeometry(0.28, 0.32, 3.2, 10).translate(0, 1.6, 0), g), withColor(new THREE.SphereGeometry(0.28, 10, 8).translate(0, 3.2, 0), g)];
    parts.push(withColor(new THREE.CylinderGeometry(0.17, 0.17, 0.7, 8).rotateZ(Math.PI / 2).translate(0.5, 1.4, 0), g), withColor(new THREE.CylinderGeometry(0.17, 0.17, 1.1, 8).translate(0.85, 1.9, 0), g), withColor(new THREE.SphereGeometry(0.17, 8, 6).translate(0.85, 2.45, 0), g));
    parts.push(withColor(new THREE.CylinderGeometry(0.15, 0.15, 0.6, 8).rotateZ(Math.PI / 2).translate(-0.45, 2.0, 0), g), withColor(new THREE.CylinderGeometry(0.15, 0.15, 0.8, 8).translate(-0.75, 2.35, 0), g), withColor(new THREE.SphereGeometry(0.15, 8, 6).translate(-0.75, 2.75, 0), g));
    parts.push(withColor(new THREE.SphereGeometry(0.09, 8, 6).translate(0, 3.45, 0), 0xff7aa8));
    return mergeGeometries(parts);
  })(),
  crystal: (() => { // slim dark "lamp trees" with a few small, soft lights: easy on the eyes
    const parts = [withColor(new THREE.CylinderGeometry(0.05, 0.12, 4.2, 6).translate(0, 2.1, 0), 0x1c1e36)];
    for (const [x, y, z, c] of [[0.7, 3.4, 0.1, 0x5a78c8], [-0.6, 3.9, -0.2, 0x7a68c0], [0.1, 4.5, 0.5, 0x5a90b8], [-0.2, 2.9, -0.6, 0x5a78c8]]) {
      parts.push(withColor(rodGeo([0, y - 0.5, 0], [x, y, z], 0.025, 5), 0x1c1e36));
      parts.push(withColor(new THREE.SphereGeometry(0.15, 10, 8).translate(x, y, z), c));
    }
    return mergeGeometries(parts);
  })(),
  autumn: (() => {
    const parts = [withColor(new THREE.CylinderGeometry(0.13, 0.22, 2.4, 7).translate(0, 1.2, 0), 0x4a3324)];
    const cols = [0xe07a2a, 0xc84a2a, 0xe8b040, 0xd06030];
    for (const [x, y, z, r] of [[0, 3.1, 0, 1.4], [0.9, 2.7, 0.3, 1.0], [-0.8, 2.8, -0.3, 1.05], [0.1, 4.0, -0.2, 0.95]])
      parts.push(withColor(new THREE.IcosahedronGeometry(r, 1).translate(x, y, z), pick(cols)));
    return mergeGeometries(parts);
  })(),
  palm: (() => {
    const pts = [[0, 0, 0], [0.15, 1.5, 0], [0.45, 3.0, 0], [0.7, 4.3, 0]], parts = [];
    for (let i = 0; i < 3; i++) parts.push(withColor(rodGeo(pts[i], pts[i + 1], 0.15 - i * 0.02, 7), 0x8a6a48));
    for (let i = 0; i < 8; i++) {
      const a = i / 8 * Math.PI * 2, droop = 0.25 + (i % 2) * 0.3;
      const g = new THREE.ConeGeometry(0.32, 2.3, 4).translate(0, 1.15, 0).scale(0.22, 1, 1).rotateZ(-(Math.PI / 2 + droop)).rotateY(a).translate(0.7, 4.3, 0);
      parts.push(withColor(g, i % 2 ? 0x2f8a4a : 0x3fa055));
    }
    for (const [x, z] of [[0.15, 0.1], [-0.1, 0.12], [0, -0.15]]) parts.push(withColor(new THREE.SphereGeometry(0.13, 8, 6).translate(0.7 + x, 4.15, z), 0x5a4030));
    return mergeGeometries(parts);
  })(),
  bamboo: (() => {
    const parts = [], rng = mulberry32(5);
    for (const [x, z, h] of [[0, 0, 6.5], [0.35, 0.2, 5.4], [-0.3, 0.25, 6.0], [0.1, -0.35, 4.8]]) {
      parts.push(withColor(new THREE.CylinderGeometry(0.06, 0.08, h, 6).translate(x, h / 2, z), 0x7ab04a));
      for (let k = 0; k < 5; k++) {
        const y = h * (0.55 + rng() * 0.45), a = rng() * 6.28;
        parts.push(withColor(new THREE.ConeGeometry(0.14, 1.0, 4).translate(0, 0.5, 0).scale(0.3, 1, 1).rotateZ(-(1.2 + rng() * 0.6)).rotateY(a).translate(x, y, z), k % 2 ? 0x4f9a3a : 0x6ab04a));
      }
    }
    return mergeGeometries(parts);
  })(),
  spire: (() => {
    const parts = [];
    for (const [x, z, h, r, t] of [[0, 0, 3.6, 0.55, 0], [0.5, 0.25, 2.2, 0.4, 0.2], [-0.45, -0.2, 2.6, 0.42, -0.18]]) parts.push(withColor(new THREE.ConeGeometry(r, h, 5).translate(0, h / 2, 0).rotateZ(t).translate(x, 0, z), 0x6a6a74));
    parts.push(withColor(new THREE.OctahedronGeometry(0.16, 0).translate(0, 3.75, 0), 0xa0c8ff));
    return mergeGeometries(parts);
  })(),
  birch: (() => {
    const parts = [withColor(new THREE.CylinderGeometry(0.09, 0.15, 3.2, 7).translate(0, 1.6, 0), 0xe8e4dc)], cols = [0x8ac85a, 0x6ab04a, 0xa8d86a, 0x7abf50];
    for (const [x, y, z, r] of [[0, 3.6, 0, 1.1], [0.6, 3.1, 0.2, 0.8], [-0.55, 3.2, -0.25, 0.85], [0.1, 4.4, -0.1, 0.75]]) parts.push(withColor(new THREE.IcosahedronGeometry(r, 1).translate(x, y, z), pick(cols)));
    return mergeGeometries(parts);
  })(),
};
// Small ground cover (grass, frosty shrubs, crystal shards) that makes the land feel alive up close.
function tuftGeo(blades, h, cols, flower) {
  const parts = [], rng = mulberry32(blades * 31 + Math.round(h * 100));
  for (let i = 0; i < blades; i++) {
    const hh = h * (0.6 + rng() * 0.6), a = rng() * 6.283, tilt = 0.12 + rng() * 0.45, off = rng() * 0.14;
    const g = new THREE.ConeGeometry(0.035, hh, 3, 1, true).translate(0, hh / 2, 0).rotateZ(tilt).rotateY(a).translate(Math.cos(a) * off, 0, Math.sin(a) * off);
    parts.push(withColor(g, cols[i % cols.length]));
  }
  if (flower) parts.push(withColor(new THREE.OctahedronGeometry(0.055, 0).translate(0.05, h * 0.95, 0.02), flower));
  const geo = mergeGeometries(parts), n = geo.attributes.normal, p = geo.attributes.position, c = geo.attributes.color;
  for (let i = 0; i < n.count; i++) {
    n.setXYZ(i, 0, 1, 0); // shade like the ground so tufts blend in softly
    const k = flower && p.getY(i) > h * 0.85 ? 1 : 0.5 + 0.5 * clamp(p.getY(i) / h, 0, 1);
    c.setXYZ(i, c.getX(i) * k, c.getY(i) * k, c.getZ(i) * k);
  }
  return geo;
}
const COVER_GEOS = {
  pine: tuftGeo(5, 0.36, [0x9fb4d0, 0xc8d8f0, 0x7f93b0]),
  sakura: tuftGeo(6, 0.42, [0x4f8f3a, 0x6aa84a, 0x3f7a30], 0xffb0d0),
  cactus: tuftGeo(5, 0.45, [0xb89858, 0xd0b070, 0x9a7a44]),
  crystal: tuftGeo(3, 0.32, [0x2a3a6a, 0x3a3470, 0x2a4468]),
  autumn: tuftGeo(6, 0.45, [0x8a8a30, 0xa89a38, 0x6a7a2a], 0xe8903a),
  palm: tuftGeo(5, 0.5, [0x7aa050, 0x9ab860, 0x5a8a40]),
  bamboo: tuftGeo(7, 0.6, [0x3f8a3a, 0x58a048, 0x2f7030]),
  spire: tuftGeo(3, 0.3, [0x9a9aa4, 0x6a6a74, 0xa0c8ff]),
  birch: tuftGeo(6, 0.4, [0x5aa03a, 0x78b848, 0x4a9030], 0xfff0a0),
};
const COVER_DENSITY = { pine: 0.5, sakura: 1, cactus: 0.45, crystal: 0.3, autumn: 1, palm: 0.6, bamboo: 1, spire: 0.25, birch: 1 };
const TREE_R = { pine: 0.35, sakura: 0.25, cactus: 0.32, crystal: 0.45, autumn: 0.25, palm: 0.3, bamboo: 0.4, spire: 0.55, birch: 0.2 };
function rockGeo(snowy) {
  const g = new THREE.DodecahedronGeometry(1, 1), p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const v = new THREE.Vector3().fromBufferAttribute(p, i); v.multiplyScalar(0.8 + noise2(v.x * 3 + 5, v.z * 3 + v.y) * 0.4); p.setXYZ(i, v.x, v.y * 0.7, v.z); }
  g.computeVertexNormals();
  const n = g.attributes.normal, col = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) { const s = snowy && n.getY(i) > 0.55; col[i * 3] = s ? 0.9 : 0.55; col[i * 3 + 1] = s ? 0.93 : 0.55; col[i * 3 + 2] = s ? 1 : 0.58; }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}
const ROCK_GEOS = { snowy: rockGeo(true), plain: rockGeo(false) };

// =====================================================================
// World props and monuments: the small and large things that only exist in one world
// =====================================================================
const pBox = (w, h, d, x, y, z, c) => withColor(new THREE.BoxGeometry(w, h, d).translate(x, y, z), c);
const pCyl = (rt, rb, h, seg, x, y, z, c) => withColor(new THREE.CylinderGeometry(rt, rb, h, seg).translate(x, y, z), c);
const pCone = (r, h, seg, x, y, z, c, rotY = 0) => withColor(new THREE.ConeGeometry(r, h, seg).rotateY(rotY).translate(x, y, z), c);
const pBall = (r, x, y, z, c, sy = 1) => withColor(new THREE.SphereGeometry(r, 12, 8).scale(1, sy, 1).translate(x, y, z), c);
const pDome = (r, x, y, z, c, sy = 1) => withColor(new THREE.SphereGeometry(r, 14, 7, 0, Math.PI * 2, 0, Math.PI / 2).scale(1, sy, 1).translate(x, y, z), c);
const NOGEO = pBox(0.001, 0.001, 0.001, 0, -50, 0, 0);
const WARM = 0xffb060;
// p = how often they appear, s = size range, r = how wide they are for bumping into
const PROPS = {
  tundra: { p: 0.35, s: [0.8, 1.7], r: 0.5, // clusters of pale ice shards
    geo: mergeGeometries([[0, 0, 1.6, 0], [0.4, 0.2, 1.0, 0.3], [-0.35, -0.2, 1.2, -0.25], [0.1, -0.4, 0.8, 0.2]].map(([x, z, h, t]) => withColor(new THREE.OctahedronGeometry(0.3, 0).scale(1, h / 0.6, 1).rotateZ(t).translate(x, h * 0.45, z), 0xbfe4ff))) },
  sakura: { p: 0.4, s: [0.9, 1.25], r: 0.4, // stone lanterns
    geo: mergeGeometries([pCyl(0.35, 0.42, 0.2, 8, 0, 0.1, 0, 0x8a8a90), pCyl(0.12, 0.15, 0.9, 8, 0, 0.65, 0, 0x9a9aa0), pBox(0.52, 0.42, 0.52, 0, 1.3, 0, 0x8a8a90), pCone(0.58, 0.36, 4, 0, 1.69, 0, 0x6a6a72, Math.PI / 4), pBall(0.08, 0, 1.9, 0, 0x6a6a72)]),
    glow: mergeGeometries([pBox(0.3, 0.26, 0.54, 0, 1.3, 0, WARM), pBox(0.54, 0.26, 0.3, 0, 1.3, 0, WARM)]) },
  dunes: { p: 0.5, s: [0.8, 2.4], r: 0.7, // wind-carved sandstone pillars
    geo: mergeGeometries([pCyl(0.5, 0.7, 1.2, 7, 0, 0.6, 0, 0xb8824e), pCyl(0.35, 0.45, 1.0, 7, 0.05, 1.7, 0, 0xc8905a), pCyl(0.7, 0.5, 0.5, 7, 0.1, 2.45, 0, 0xa8703e)]) },
  neon: { p: 0.3, s: [0.8, 1.6], r: 0.6, // quiet dark pillars with one soft band of light
    geo: mergeGeometries([pBox(0.7, 2.6, 0.7, 0, 1.3, 0, 0x242640), pBox(0.9, 0.12, 0.9, 0, 0.06, 0, 0x1a1c30)]),
    glow: mergeGeometries([pBox(0.72, 0.05, 0.72, 0, 2.0, 0, 0x5a78d0), pBox(0.72, 0.03, 0.72, 0, 1.2, 0, 0x6a5ac0)]) },
  autumn: { p: 0.5, s: [0.7, 1.9], r: 0.5, // big red mushrooms
    geo: mergeGeometries([[0, 0, 1.1, 0.62], [0.65, 0.3, 0.7, 0.42], [-0.4, 0.5, 0.5, 0.3]].flatMap(([x, z, h, r]) => [pCyl(r * 0.2, r * 0.26, h, 8, x, h / 2, z, 0xf0e6d0), pDome(r, x, h - 0.05, z, 0xc8402a, 0.7), pBall(r * 0.16, x + r * 0.4, h + r * 0.38, z + r * 0.2, 0xfff4e0), pBall(r * 0.13, x - r * 0.35, h + r * 0.45, z - r * 0.3, 0xfff4e0)])) },
  lagoon: { p: 0.35, s: [1, 1.25], r: 0.35, // tiki torches beside beach rocks
    geo: mergeGeometries([pCyl(0.05, 0.06, 1.8, 6, 0, 0.9, 0, 0x6a4a30), pCyl(0.14, 0.06, 0.2, 8, 0, 1.85, 0, 0x4a3424), withColor(new THREE.DodecahedronGeometry(0.42, 0).scale(1, 0.7, 1).translate(0.55, 0.2, 0.2), 0x8a8478)]),
    glow: pCone(0.1, 0.32, 6, 0, 2.1, 0, 0xffa040) },
  bamboo: { p: 0.4, s: [1, 1.25], r: 0.25, // red paper lanterns on wooden posts
    geo: mergeGeometries([pCyl(0.05, 0.06, 2.4, 6, 0, 1.2, 0, 0x3a2a20), pBox(0.75, 0.06, 0.06, 0.32, 2.36, 0, 0x3a2a20), pCyl(0.1, 0.1, 0.05, 8, 0.6, 2.28, 0, 0x2a2018), pCyl(0.1, 0.1, 0.05, 8, 0.6, 1.72, 0, 0x2a2018)]),
    glow: pBall(0.22, 0.6, 2.0, 0, 0xff6a44, 1.25) },
  moon: { p: 0.25, s: [1, 1.3], r: 0.35, // little solar beacons
    geo: mergeGeometries([pCyl(0.04, 0.05, 1.6, 6, 0, 0.8, 0, 0xb0b0b8), withColor(new THREE.BoxGeometry(1.0, 0.6, 0.04).rotateX(-0.6).translate(0, 1.5, 0), 0x2a4a9a), pBox(0.4, 0.2, 0.4, 0, 0.1, 0, 0xc8a040)]),
    glow: pBall(0.07, 0, 1.9, 0, 0xff5050) },
  meadow: { p: 0.4, s: [0.9, 1.2], r: 0.9, // hay bales by a stretch of fence
    geo: mergeGeometries([withColor(new THREE.CylinderGeometry(0.7, 0.7, 1.1, 14).rotateZ(Math.PI / 2).translate(0, 0.7, 0), 0xd8b850), pBox(0.1, 1, 0.1, -1.3, 0.5, 1.4, 0x8a6a48), pBox(0.1, 1, 0.1, 1.3, 0.5, 1.4, 0x8a6a48), pBox(2.7, 0.08, 0.06, 0, 0.5, 1.4, 0x9a7a54), pBox(2.7, 0.08, 0.06, 0, 0.85, 1.4, 0x9a7a54)]) },
};
const MONUMENTS = {
  tundra: { r: 3, // an igloo with a warm doorway
    geo: mergeGeometries([pDome(2.6, 0, 0, 0, 0xeef4ff), pBox(1.3, 1.2, 1.5, 0, 0.6, -2.6, 0xe4ecfa), pBox(0.75, 0.85, 0.1, 0, 0.45, -3.36, 0x2a2a34)]),
    glow: pBox(0.6, 0.7, 0.06, 0, 0.42, -3.4, WARM) },
  sakura: { r: 0, // a red gate you can ride straight through
    geo: mergeGeometries([pCyl(0.22, 0.27, 5, 10, -2, 2.5, 0, 0xc0392b), pCyl(0.22, 0.27, 5, 10, 2, 2.5, 0, 0xc0392b), pBox(6, 0.35, 0.5, 0, 5.1, 0, 0xc0392b), pBox(6.7, 0.2, 0.72, 0, 5.4, 0, 0x26262c), pBox(5, 0.25, 0.3, 0, 4.2, 0, 0xc0392b)]) },
  dunes: { r: 6.5, // a small pyramid with a golden cap
    geo: mergeGeometries([pCone(8.5, 10, 4, 0, 5, 0, 0xc89a5e, Math.PI / 4), pCone(1.3, 1.6, 4, 0, 9.7, 0, 0xe8c070, Math.PI / 4)]) },
  neon: { r: 0, // a tall ring gate with a faint rim of light
    geo: mergeGeometries([withColor(new THREE.TorusGeometry(3.2, 0.2, 8, 40).translate(0, 3.5, 0), 0x2c2e50), pBox(2.2, 0.3, 1.2, 0, 0.15, 0, 0x1e2038)]),
    glow: withColor(new THREE.TorusGeometry(3.2, 0.045, 6, 48).translate(0, 3.5, 0.21), 0x6a8ae0) },
  autumn: { r: 5.2, // a red barn
    geo: mergeGeometries([pBox(6, 3.5, 8, 0, 1.75, 0, 0x9a2a22), withColor(new THREE.ConeGeometry(5.6, 2.6, 4).rotateY(Math.PI / 4).scale(1, 1, 1.32).translate(0, 4.8, 0), 0x3a2a26), pBox(2, 2.4, 0.1, 0, 1.2, -4.03, 0xf0e8d8), pBox(6.1, 0.2, 8.1, 0, 3.4, 0, 0xf0e8d8)]) },
  lagoon: { r: 2.2, // a striped lighthouse
    geo: mergeGeometries([pCyl(1.2, 1.8, 9, 14, 0, 4.5, 0, 0xf4f0e8), pCyl(1.56, 1.66, 1.2, 14, 0, 3, 0, 0xc8402a), pCyl(1.34, 1.42, 1.2, 14, 0, 6.3, 0, 0xc8402a), pCyl(1.5, 1.5, 0.2, 14, 0, 9.1, 0, 0x2a2a30), pCone(1.0, 0.9, 10, 0, 10.85, 0, 0xc8402a)]),
    glow: pCyl(0.8, 0.8, 1.2, 10, 0, 9.8, 0, 0xffe08a) },
  bamboo: { r: 2.8, // a three-storey pagoda
    geo: mergeGeometries([0, 1, 2].flatMap(i => { const w = 4 - i, y = i * 2.3; return [pBox(w, 1.6, w, 0, y + 0.8, 0, 0x8a2a22), pCone(w, 0.9, 4, 0, y + 2.05, 0, 0x26302a, Math.PI / 4)]; }).concat([pCyl(0.06, 0.06, 1.4, 6, 0, 7.8, 0, 0xe8c070)])),
    glow: pBox(0.9, 1.1, 0.06, 0, 0.6, -2.02, WARM) },
  moon: { r: 2.4, // a landed spacecraft with a little cyan flag
    geo: mergeGeometries([pCyl(1.3, 1.3, 1.2, 8, 0, 2.0, 0, 0xc8a040), pBox(1.3, 1.0, 1.3, 0, 3.1, 0, 0xb8b8c0), ...[[1, 1], [-1, 1], [-1, -1], [1, -1]].flatMap(([a, b]) => [withColor(rodGeo([a * 0.9, 1.6, b * 0.9], [a * 2.0, 0.05, b * 2.0], 0.06, 6), 0xb0b0b8), pCyl(0.3, 0.3, 0.06, 10, a * 2.0, 0.03, b * 2.0, 0xb0b0b8)]),
      withColor(new THREE.ConeGeometry(0.5, 0.3, 12, 1, true).rotateZ(-0.6).translate(0.9, 3.9, 0), 0xf0f0f4), pCyl(0.03, 0.03, 2.2, 5, 3.2, 1.1, 1.2, 0xd0d0d8), pBox(0.8, 0.5, 0.02, 3.62, 1.9, 1.2, 0x5ce1ff)]),
    glow: pBox(0.5, 0.3, 0.05, 0, 3.2, -0.66, 0x80d0ff) },
  meadow: { r: 2, spin: { pos: [0, 6.6, -1.4], // a windmill whose sails turn
      geo: mergeGeometries([0, 1, 2, 3].map(k => withColor(new THREE.BoxGeometry(0.4, 4.2, 0.06).translate(0, 2.4, 0).rotateZ(k * Math.PI / 2), 0xf8f4ec)).concat([withColor(new THREE.CylinderGeometry(0.2, 0.2, 0.5, 8).rotateX(Math.PI / 2), 0x6a4a30)])) },
    geo: mergeGeometries([pCyl(1.0, 1.7, 7, 12, 0, 3.5, 0, 0xf0e8d8), pCone(1.3, 1.3, 12, 0, 7.65, 0, 0xb04a3a), pBox(0.8, 1.5, 0.1, 0, 0.75, -1.66, 0x6a4a30)]) },
};

function makeCabin(withSign) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.BoxGeometry(5.4, 2, 4.4), M.stone); base.position.y = -0.6;
  const walls = new THREE.Mesh(new THREE.BoxGeometry(5, 3, 4), M.wood); walls.position.y = 1.5;
  const roofGeo = new THREE.CylinderGeometry(3.3, 3.3, 5.6, 3, 1); roofGeo.rotateZ(Math.PI / 2); roofGeo.rotateX(Math.PI / 6);
  const roof = new THREE.Mesh(roofGeo, M.roof); roof.scale.set(1, 0.62, 0.72); roof.position.y = 3.95;
  const snowRoof = new THREE.Mesh(roofGeo, M.snow); snowRoof.scale.set(1.04, 0.66, 0.76); snowRoof.position.y = 4.12;
  const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.7, 2, 0.7), M.stone); chimney.position.set(1.4, 5, 0.6);
  const door = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2, 0.08), M.roof); door.position.set(0, 1.0, -2.02);
  g.add(base, walls, roof, snowRoof, chimney, door);
  const windows = [];
  for (const [x, z, ry] of [[-1.5, -2.01, Math.PI], [1.5, -2.01, Math.PI], [-2.51, 0, -Math.PI / 2], [2.51, 0, Math.PI / 2]]) {
    const w = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.9), M.windowDim); w.position.set(x, 1.8, z); w.rotation.y = ry; g.add(w); windows.push(w);
  }
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW, color: 0xffa050, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false }));
  glow.scale.set(9, 5, 1); glow.position.set(0, 1.8, -2.8); g.add(glow);
  const smoke = [];
  for (let i = 0; i < 6; i++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: FLAKE, color: 0xb8bfd8, transparent: true, opacity: 0, depthWrite: false })); s.position.set(1.4, 6.3, 0.6); g.add(s); smoke.push(s); }
  let label = null;
  if (withSign) {
    // A signpost in front of the lodge, plus a floating label.
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.6, 0.12), M.sign); post.position.set(-2.4, 0.8, -3.4);
    const board = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.6, 0.08), M.sign); board.position.set(-2.4, 1.55, -3.4);
    const shield = new THREE.Mesh(new THREE.CircleGeometry(0.2, 6), M.holo); shield.position.set(-2.4, 1.55, -3.45); shield.rotation.y = Math.PI;
    g.add(post, board, shield);
    label = makeLabel(); label.position.set(0, 7.6, 0); g.add(label);
  }
  // A tall warm light pillar so lodges are easy to spot from far away.
  const beam = makeBeam(0xffa040); beam.scale.set(1.6, 90, 1.6); beam.position.y = 4; g.add(beam);
  g.traverse(o => { if (o.isMesh) { o.receiveShadow = true; o.castShadow = o !== base && o.material !== M.holo && o !== beam; } });
  g.userData = { windows, glow, smoke, snowRoof, label, beam };
  return g;
}
function setLodgeState(lodge, done, isHome) {
  const u = lodge.userData;
  u.windows.forEach(w => { w.material = done ? M.windowLit : M.windowDim; });
  u.glow.material.opacity = done ? 0.45 : 0.2;
  u.snowRoof.visible = !!W.snowy;
  u.beam.visible = true; // every lodge always accepts reports
  u.beam.material.color.set(isHome ? 0x60e8ff : 0xffa040);
  u.isHome = isHome; u.done = done;
  if (u.label) {
    if (isHome) drawLabel(u.label, '🏠 ' + PLAYER.handle, 'home lab · bring reports here', '#9ff0ff', 1.3);
    else drawLabel(u.label, '🏠 Triage Lodge', done ? '✓ visited · always open' : 'bring your reports here', '#ffd38a', 1.3);
  }
}

function makeShrine() {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.5, 0.45, 8), M.stone); base.position.y = 0.1;
  const step = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.05, 0.25, 8), M.stone); step.position.y = 0.45;
  const mono = new THREE.Mesh(new THREE.BoxGeometry(1.0, 3.2, 0.45), M.monolith); mono.position.y = 2.15;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.03, 8, 48), M.holo); ring.position.y = 2.4; ring.rotation.x = Math.PI / 2;
  const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.28, 0), M.holo); gem.position.y = 4.2;
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW, color: 0x5ce1ff, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
  glow.scale.set(5, 5, 1); glow.position.y = 2.6;
  const label = makeLabel(); label.position.y = 5.6;
  g.add(base, step, mono, ring, gem, glow, label);
  [base, step, mono].forEach(m => { m.castShadow = true; m.receiveShadow = true; });
  g.userData = { mono, ring, gem, glow, label };
  return g;
}
function setShrineState(shrine, hacker, unlocked) {
  const u = shrine.userData;
  u.mono.material = unlocked ? M.monolithLit : M.monolith;
  u.glow.material.color.set(unlocked ? 0xffc35a : 0x5ce1ff);
  if (unlocked) drawLabel(u.label, hacker.handle, hacker.name || GROUP_LABEL[hacker.group].replace(/^\S+\s/, ''), '#ffd38a', 1.1);
  else drawLabel(u.label, '?', 'Hacker Shrine · come closer', '#9ff0ff', 1.1);
}

const TOWER_GEO = (() => {
  const parts = [], H0 = 16, legs = [[1.7, 1.7], [-1.7, 1.7], [-1.7, -1.7], [1.7, -1.7]], top = 0.3;
  const at = (i, t) => { const [x, z] = legs[i]; const s = lerp(1, top / 1.7, t); return [x * s, t * H0, z * s]; };
  for (let i = 0; i < 4; i++) parts.push(rodGeo(at(i, 0), at(i, 1), 0.07));
  for (let k = 0; k < 6; k++) for (let i = 0; i < 4; i++) {
    const t0 = k / 6, t1 = (k + 1) / 6, j = (i + 1) % 4;
    parts.push(rodGeo(at(i, t0), at(j, t1), 0.035), rodGeo(at(j, t0), at(i, t1), 0.035), rodGeo(at(i, t1), at(j, t1), 0.04));
  }
  parts.push(rodGeo([0, H0, 0], [0, H0 + 4, 0], 0.06));
  parts.push(new THREE.CylinderGeometry(0.7, 0.7, 0.15, 16).rotateX(Math.PI / 2.4).translate(0, H0 - 1.2, 0.5));
  return mergeGeometries(parts);
})();
function makeTower() {
  const g = new THREE.Group();
  const frame = new THREE.Mesh(TOWER_GEO, M.steel); frame.castShadow = true;
  const hut = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2, 2.4), M.wood); hut.position.y = 1; hut.castShadow = hut.receiveShadow = true;
  const light = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 8), M.redLight); light.position.y = 20.1;
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW, color: 0xff4060, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  halo.scale.set(4, 4, 1); halo.position.y = 20.1;
  const rings = [];
  for (let i = 0; i < 3; i++) { const r = new THREE.Mesh(new THREE.TorusGeometry(1, 0.05, 6, 40), M.ring.clone()); r.rotation.x = Math.PI / 2; r.position.y = 17; g.add(r); rings.push(r); }
  const label = makeLabel(); label.position.y = 23.2;
  drawLabel(label, '📻 Lantern Radio', 'calm hacker radio · tune in', '#ffa0d8', 1.5);
  const nameLabel = makeLabel(); nameLabel.position.y = 4.2;
  g.add(frame, hut, light, halo, label, nameLabel);
  g.userData = { light, halo, rings, nameLabel };
  return g;
}
function setTowerState(tower, hacker, unlocked) {
  const u = tower.userData;
  if (unlocked) drawLabel(u.nameLabel, hacker.handle, hacker.group === 'radio-host' ? 'host' : 'guest', '#ffd38a', 1);
  else drawLabel(u.nameLabel, 'On air', 'ride closer to listen', '#ffa0d8', 1);
}

const BIG_TREE_LIGHTS = (() => {
  const cols = [0xffd27a, 0xff8fa3, 0xa9d8ff, 0xb8ffd0, 0xffb070], parts = [], rng = mulberry32(77);
  for (let i = 0; i < 90; i++) { const y = 1.2 + rng() * 3.0, r = lerp(1.35, 0.35, (y - 1.2) / 3.0) + 0.05, a = rng() * Math.PI * 2; parts.push(withColor(new THREE.SphereGeometry(0.06, 6, 4).translate(Math.cos(a) * r, y, Math.sin(a) * r), cols[i % cols.length])); }
  return mergeGeometries(parts);
})();
function makeStarMesh(size = 0.38) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) { const r = i % 2 ? size * 0.42 : size, a = i / 10 * Math.PI * 2 + Math.PI / 2; i ? shape.lineTo(Math.cos(a) * r, Math.sin(a) * r) : shape.moveTo(Math.cos(a) * r, Math.sin(a) * r); }
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.1, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.03, bevelSegments: 2 }); geo.center();
  return new THREE.Mesh(geo, M.star);
}
function makeLandmark() {
  const g = new THREE.Group(), s = 3.2;
  const tree = new THREE.Mesh(TREE_GEOS.pine, M.tree); tree.scale.setScalar(s); tree.castShadow = true;
  const lights = new THREE.Mesh(BIG_TREE_LIGHTS, M.fairy); lights.scale.setScalar(s);
  const star = makeStarMesh(0.6); star.position.y = 4.6 * s;
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW, color: 0xffd27a, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  halo.scale.set(6, 6, 1); halo.position.y = 4.6 * s;
  g.add(tree, lights, star, halo); g.userData = { star };
  return g;
}

const BUG_LEGS = (() => {
  const parts = [];
  for (const s of [-1, 1]) for (const z of [-0.15, 0.05, 0.25]) parts.push(rodGeo([s * 0.15, 0, z], [s * 0.42, -0.25, z + 0.08 * Math.sign(z || 1)], 0.018, 5));
  for (const s of [-1, 1]) parts.push(rodGeo([s * 0.06, 0.1, -0.45], [s * 0.2, 0.35, -0.7], 0.012, 4));
  return mergeGeometries(parts);
})();
const BEAM_GEO = new THREE.CylinderGeometry(0.35, 0.35, 1, 12, 1, true).translate(0, 0.5, 0);
function makeBeam(color) {
  return new THREE.Mesh(BEAM_GEO, new THREE.MeshBasicMaterial({ map: BEAM, color, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
}
function makeBug() {
  const g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const shell = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 14), SEV_MATS[0]); shell.scale.set(0.85, 0.6, 1.1);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 10), M.bugLeg); head.position.set(0, 0.04, -0.38);
  const legs = new THREE.Mesh(BUG_LEGS, M.bugLeg);
  const wings = [];
  for (const s of [-1, 1]) { const w = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.28).translate(s * 0.3, 0, 0), M.wing); w.position.set(0, 0.18, 0.05); w.rotation.x = -Math.PI / 2; body.add(w); wings.push({ w, s }); }
  body.add(shell, head, legs);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW, color: 0xffffff, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false }));
  halo.scale.set(2.4, 2.4, 1);
  const beam = makeBeam(0xffffff);
  g.add(halo, beam);
  shell.castShadow = true;
  g.userData = { body, shell, wings, halo, beam };
  return g;
}
function setBugSeverity(bug, s) {
  const u = bug.userData, sev = SEVERITY[s];
  u.shell.material = SEV_MATS[s]; u.halo.material.color.set(sev.color); u.beam.material.color.set(sev.color);
  const bw = [0.35, 0.42, 0.6, 0.85, 1.1][s]; // thin, soft lights; only rare finds stand out
  u.beam.scale.set(bw, sev.beam * 0.6, bw);
  bug.scale.setScalar(1 + s * 0.12);
}
function makeOrb() {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 2, roughness: 0.2, transparent: true, opacity: 0.9 });
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 1), mat);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false }));
  halo.scale.set(3, 3, 1);
  const label = makeLabel(256, 128); label.position.y = 1.3;
  const beam = makeBeam(0xffffff); beam.scale.set(0.45, 18, 0.45);
  g.add(core, halo, label, beam);
  g.userData = { core, halo, label, beam };
  return g;
}
function setOrbType(orb, type) {
  const p = POWERS[type], u = orb.userData;
  u.core.material.color.set(p.color); u.core.material.emissive.set(p.color); u.halo.material.color.set(p.color); u.beam.material.color.set(p.color);
  drawLabel(u.label, p.icon, '', p.css, 0.8);
}
// Fuel can: a little glowing jerrycan that fills the turbo tank.
const FUEL_MATS = {
  body: new THREE.MeshPhysicalMaterial({ color: 0xd8402a, roughness: 0.32, metalness: 0.55, clearcoat: 1, clearcoatRoughness: 0.15 }),
  stripe: new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 1.7, 0.4) }),
};
const FUEL_GEO = mergeGeometries([
  new THREE.BoxGeometry(0.42, 0.52, 0.2),
  new THREE.TorusGeometry(0.09, 0.025, 6, 14, Math.PI).translate(-0.06, 0.27, 0),
  new THREE.CylinderGeometry(0.045, 0.05, 0.1, 10).translate(0.13, 0.3, 0),
]);
function makeFuel() {
  const g = new THREE.Group();
  const can = new THREE.Mesh(FUEL_GEO, FUEL_MATS.body); can.castShadow = true;
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.43, 0.07, 0.21), FUEL_MATS.stripe);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW, color: 0xff9a40, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false }));
  halo.scale.set(1.8, 1.8, 1);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.02, 6, 32), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 1.2, 0.3), transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false }));
  ring.rotation.x = Math.PI / 2; ring.position.y = -0.45;
  const spin = new THREE.Group(); spin.add(can, stripe);
  g.add(spin, halo, ring);
  g.userData = { spin, ring };
  return g;
}

function makeWarp() {
  const g = new THREE.Group();
  const knotMat = new THREE.MeshStandardMaterial({ color: 0xb070ff, emissive: 0x9a50ff, emissiveIntensity: 2.6, roughness: 0.2, metalness: 0.4 });
  const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.5, 0.13, 120, 14), knotMat);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.04, 8, 48), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 0.8, 2.6), transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false }));
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW, color: 0xb070ff, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }));
  halo.scale.set(5, 5, 1);
  const beam = makeBeam(0xb070ff); beam.scale.set(1.4, 130, 1.4);
  const label = makeLabel(); label.position.y = 2.4; drawLabel(label, '🌀 Zero-Day Warp', 'a door to a new calm world', '#d8b0ff', 1.1);
  g.add(knot, ring, halo, beam, label);
  g.userData = { knot, ring };
  return g;
}
function makeSnowman() {
  const g = new THREE.Group();
  const add = (geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; g.add(m); return m; };
  add(new THREE.SphereGeometry(0.52, 24, 16), M.snow, 0, 0.45, 0); add(new THREE.SphereGeometry(0.38, 24, 16), M.snow, 0, 1.1, 0); add(new THREE.SphereGeometry(0.27, 24, 16), M.snow, 0, 1.58, 0);
  add(new THREE.ConeGeometry(0.05, 0.3, 10).rotateX(Math.PI / 2), M.carrot, 0, 1.58, 0.36);
  add(new THREE.TorusGeometry(0.26, 0.07, 10, 24), M.red, 0, 1.36, 0).rotation.x = Math.PI / 2;
  add(new THREE.CylinderGeometry(0.17, 0.17, 0.3, 20), M.coal, 0, 1.92, 0); add(new THREE.CylinderGeometry(0.28, 0.28, 0.04, 24), M.coal, 0, 1.79, 0);
  for (const x of [-0.09, 0.09]) add(new THREE.SphereGeometry(0.035, 8, 6), M.coal, x, 1.66, 0.24);
  // A tiny laptop at its feet: even snowmen hunt bugs here.
  add(new THREE.BoxGeometry(0.4, 0.03, 0.28), M.dark, 0.5, 0.05, 0.4);
  const scr = add(new THREE.PlaneGeometry(0.38, 0.24), M.holo, 0.5, 0.18, 0.27); scr.rotation.x = -0.25;
  return g;
}

// =====================================================================
// Chunk streaming
// =====================================================================
const CH = 64, SEG = 32, STEP = CH / SEG, VN = SEG + 1, GN = VN + 2;
const CHUNK_INDEX = (() => { const idx = []; for (let j = 0; j < SEG; j++) for (let i = 0; i < SEG; i++) { const a = j * VN + i, b = a + 1, c = a + VN, d = c + 1; idx.push(a, c, b, b, c, d); } return idx; })();
const chunks = new Map(), pool = [], allChunks = [];
const hgrid = new Float32Array(GN * GN);
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3(), _e = new THREE.Euler();
const displayed = new Set(); // hacker handles currently shown on shrines/towers nearby

function makeChunkObj() {
  const geo = new THREE.BufferGeometry();
  for (const [n, s] of [['position', 3], ['normal', 3], ['color', 3], ['uv', 2]]) geo.setAttribute(n, new THREE.BufferAttribute(new Float32Array(VN * VN * s), s));
  geo.setIndex(CHUNK_INDEX);
  const group = new THREE.Group();
  const terrain = new THREE.Mesh(geo, M.terrain); terrain.receiveShadow = true;
  const trees = new THREE.InstancedMesh(TREE_GEOS[W.tree], W.tree === 'crystal' ? M.crystal : M.tree, Q.trees);
  const rocks = new THREE.InstancedMesh(W.snowy ? ROCK_GEOS.snowy : ROCK_GEOS.plain, M.rock, 8); rocks.receiveShadow = true;
  const lodge = makeCabin(true), shrine = makeShrine(), tower = makeTower(), landmark = makeLandmark(), snowman = makeSnowman(), orb = makeOrb(), warp = makeWarp();
  const bugs = [makeBug(), makeBug(), makeBug()];
  const fuels = [makeFuel(), makeFuel(), makeFuel()];
  group.add(terrain, trees, rocks, lodge, shrine, tower, landmark, snowman, orb, warp, ...bugs, ...fuels);
  const PR = PROPS[W.id], MO = MONUMENTS[W.id];
  const props = new THREE.InstancedMesh(PR.geo, M.prop, 5), propGlow = new THREE.InstancedMesh(PR.glow || NOGEO, M.propGlow, 5);
  props.castShadow = props.receiveShadow = true;
  const monument = new THREE.Mesh(MO.geo, M.prop), monGlow = new THREE.Mesh(MO.glow || NOGEO, M.propGlow), spin = new THREE.Mesh(MO.spin ? MO.spin.geo : NOGEO, M.prop);
  monument.castShadow = monument.receiveShadow = spin.castShadow = true; monument.add(monGlow, spin);
  if (MO.spin) spin.position.set(...MO.spin.pos);
  group.add(props, propGlow, monument);
  let cover = null;
  if (Q.cover) { cover = new THREE.InstancedMesh(COVER_GEOS[W.tree], W.tree === 'crystal' ? M.crystal : M.cover, Q.cover); cover.receiveShadow = true; group.add(cover); }
  scene.add(group);
  const c = { group, terrain, trees, rocks, cover, props, propGlow, monument, monGlow, spin, lodge, shrine, tower, landmark, snowman, orb, warp, bugs, fuels, colliders: [], cx: 0, cz: 0, key: '', info: null };
  allChunks.push(c);
  return c;
}

const HACKER_ORDER = (() => { const r = mulberry32(2026); const a = HACKERS.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; })();
const isCT = h => h.group === 'radio-host' || h.group === 'radio-guest'; // Lantern Radio cast
function assignHacker(wantCT) {
  const pool = HACKER_ORDER.filter(h => isCT(h) === wantCT);
  const list = pool.length ? pool : HACKER_ORDER;
  for (const h of list) if (!codexSet.has(h.handle) && !displayed.has(h.handle)) return h;
  const unlocked = list.filter(h => !displayed.has(h.handle));
  return unlocked.length ? pick(unlocked) : pick(list);
}
const hackerByHandle = handle => HACKERS.find(h => h.handle === handle) || (handle === PLAYER.handle ? PLAYER : null);

let home = null; // the player's home lab in the current world
function freeChunk(c) {
  c.group.visible = false;
  if (c.info) { if (c.info.shrine) displayed.delete(c.info.shrine.hacker.handle); if (c.info.tower) displayed.delete(c.info.tower.hacker.handle); }
  c.info = null;
}

function buildChunk(c, cx, cz) {
  c.cx = cx; c.cz = cz;
  const key = W.id + ':' + cx + ',' + cz; c.key = key;
  const ox = cx * CH, oz = cz * CH;
  c.group.position.set(ox, 0, oz); c.group.visible = true;
  for (let j = 0; j < GN; j++) for (let i = 0; i < GN; i++) hgrid[j * GN + i] = H(ox + (i - 1) * STEP, oz + (j - 1) * STEP);
  const geo = c.terrain.geometry, pos = geo.attributes.position.array, nrm = geo.attributes.normal.array, col = geo.attributes.color.array, uv = geo.attributes.uv.array, G = W.ground;
  for (let j = 0; j < VN; j++) for (let i = 0; i < VN; i++) {
    const k = j * VN + i, gi = (j + 1) * GN + (i + 1), h = hgrid[gi];
    pos[k * 3] = i * STEP; pos[k * 3 + 1] = h; pos[k * 3 + 2] = j * STEP;
    let nx = hgrid[gi - 1] - hgrid[gi + 1], nz = hgrid[gi - GN] - hgrid[gi + GN], ny = 2 * STEP;
    const len = Math.hypot(nx, ny, nz); nx /= len; ny /= len; nz /= len;
    nrm[k * 3] = nx; nrm[k * 3 + 1] = ny; nrm[k * 3 + 2] = nz;
    const wx = ox + i * STEP, wz = oz + j * STEP;
    uv[k * 2] = wx * 0.08; uv[k * 2 + 1] = wz * 0.08;
    const n = noise2(wx * 0.15, wz * 0.15), patchN = fbm2(wx * 0.04, wz * 0.04, 2), shade = 0.88 + n * 0.12;
    const rock = smooth(0.82, 0.62, ny), high = smooth(45, 90, h), shore = smooth(1.2, -0.2, h);
    for (let ch = 0; ch < 3; ch++) {
      let v = lerp(G.flat[ch], G.flat2[ch], smooth(0.4, 0.65, patchN));
      v = lerp(v, G.steep[ch], rock); v = lerp(v, G.peak[ch], high * (1 - rock * 0.5)); v = lerp(v, G.shore[ch], shore * 0.7);
      col[k * 3 + ch] = v * shade;
    }
  }
  for (const a of ['position', 'normal', 'color', 'uv']) geo.attributes[a].needsUpdate = true;
  geo.computeBoundingSphere();

  const rng = mulberry32(Math.floor(hash2(cx * 7 + 3 + W.seed * 101, cz * 13 - 5) * 4294967296));
  c.colliders.length = 0;
  const info = { lodge: null, shrine: null, tower: null, bugs: [], orb: null, warp: null, fuels: [] };
  c.info = info;
  const local = (x, z) => [x - ox, z - oz];
  const slopeAt = (x, z) => Math.abs(H(x + 2, z) - H(x - 2, z)) + Math.abs(H(x, z + 2) - H(x, z - 2));
  const avoid = [];
  if (home && Math.abs(home.x - (ox + 32)) < 80 && Math.abs(home.z - (oz + 32)) < 80) avoid.push({ x: home.x, z: home.z, r: 9 });
  const clear = (x, z, r) => !avoid.some(a => (a.x - x) ** 2 + (a.z - z) ** 2 < (a.r + r) ** 2);
  const findSpot = (minH, maxSlope, margin, r) => {
    for (let t = 0; t < 8; t++) {
      const x = ox + margin + rng() * (CH - margin * 2), z = oz + margin + rng() * (CH - margin * 2), h = H(x, z);
      if (h > minH && h < 45 && slopeAt(x, z) < maxSlope && clear(x, z, r)) return [x, z, h];
    }
    return null;
  };
  for (const o of [c.lodge, c.shrine, c.tower, c.landmark, c.snowman, c.orb, c.warp, ...c.bugs, ...c.fuels]) o.visible = false;

  // Triage lodge
  if (rng() < 0.16) {
    const s = findSpot(1, 2.4, 12, 6);
    if (s) {
      const [x, z, h] = s, [lx, lz] = local(x, z), done = lodgeSet.has(key); // done = visited before
      c.lodge.position.set(lx, h - 0.15, lz); c.lodge.rotation.y = rng() * Math.PI * 2; c.lodge.visible = true;
      setLodgeState(c.lodge, done, false);
      info.lodge = { x, z, done, key };
      c.colliders.push({ x, z, r: 3.4 }); avoid.push({ x, z, r: 6 });
    }
  }
  // Hacker shrine
  const rs = rng();
  if (!info.lodge && rs < 0.075) {
    const s = findSpot(0.4, 3.5, 8, 3);
    if (s) {
      const [x, z, h] = s, [lx, lz] = local(x, z);
      const saved = SAVE.shrines[key] && hackerByHandle(SAVE.shrines[key]);
      const hacker = saved || assignHacker(false); displayed.add(hacker.handle);
      const unlocked = codexSet.has(hacker.handle);
      c.shrine.position.set(lx, h - 0.1, lz); c.shrine.visible = true; setShrineState(c.shrine, hacker, unlocked);
      info.shrine = { x, z, hacker, unlocked, key, seen: false };
      c.colliders.push({ x, z, r: 1.4 }); avoid.push({ x, z, r: 4 });
    }
  }
  // Lantern Radio tower
  const rt = rng();
  if (!info.lodge && !info.shrine && rt < 0.06) {
    const s = findSpot(0.6, 3.5, 10, 4);
    if (s) {
      const [x, z, h] = s, [lx, lz] = local(x, z);
      const saved = SAVE.shrines[key] && hackerByHandle(SAVE.shrines[key]);
      const hacker = saved || assignHacker(true); displayed.add(hacker.handle);
      const unlocked = codexSet.has(hacker.handle);
      c.tower.position.set(lx, h - 0.1, lz); c.tower.rotation.y = rng() * 6.28; c.tower.visible = true; setTowerState(c.tower, hacker, unlocked);
      info.tower = { x, z, hacker, unlocked, key, seen: false };
      c.colliders.push({ x, z, r: 2.4 }); avoid.push({ x, z, r: 5 });
    }
  }
  // Landmark tree (winter only) and a snowman with a laptop
  const rl = rng(), rx = rng(), rz = rng();
  if (W.landmark && !info.lodge && rl < 0.05) {
    const x = ox + 16 + rx * 32, z = oz + 16 + rz * 32, h = H(x, z);
    if (h > 0.5 && slopeAt(x, z) < 4 && clear(x, z, 3)) { const [lx, lz] = local(x, z); c.landmark.position.set(lx, h - 0.3, lz); c.landmark.visible = true; c.colliders.push({ x, z, r: 1.6 }); avoid.push({ x, z, r: 4 }); }
  }
  const rsn = rng(), sx = rng(), sz = rng(), sr = rng();
  if (W.snowy && rsn < 0.12) {
    const x = ox + 6 + sx * 52, z = oz + 6 + sz * 52, h = H(x, z);
    if (h > 0.4 && slopeAt(x, z) < 3 && clear(x, z, 1)) { const [lx, lz] = local(x, z); c.snowman.position.set(lx, h - 0.1, lz); c.snowman.rotation.y = sr * 6.28; c.snowman.visible = true; c.colliders.push({ x, z, r: 0.7 }); }
  }
  // Bugs (vulnerabilities to find)
  const nb = rng() < 0.62 ? 1 + (rng() < 0.45 ? 1 : 0) + (rng() < 0.18 ? 1 : 0) : 0;
  for (let i = 0; i < 3; i++) {
    const x = ox + 5 + rng() * 54, z = oz + 5 + rng() * 54, roll = rng() * 100;
    if (i >= nb) continue;
    const bkey = key + ':b' + i;
    if (collectedSet.has(bkey) || !clear(x, z, 1) || H(x, z) > 30) continue; // nothing on top of cliffs you cannot reach
    let s = 0, acc = 0; for (let k = 0; k < SEVERITY.length; k++) { acc += SEVERITY[k].weight; if (roll < acc) { s = k; break; } }
    const y = groundAt(x, z) + 1.3, [lx, lz] = local(x, z), bug = c.bugs[i];
    bug.position.set(lx, y, lz); bug.visible = true; setBugSeverity(bug, s);
    info.bugs.push({ x, z, y, s, key: bkey, obj: bug, ph: rng() * 6, taken: false });
  }
  // Power-up orb
  const ro = rng(), ox2 = rng(), oz2 = rng(), ot = rng();
  if (ro < 0.09 && !sessionTaken.has(key + ':o')) {
    const x = ox + 6 + ox2 * 52, z = oz + 6 + oz2 * 52, type = ORB_TYPES[Math.floor(ot * ORB_TYPES.length)];
    if (clear(x, z, 1) && H(x, z) < 30) { const [lx, lz] = local(x, z), y = groundAt(x, z) + 1.3; c.orb.position.set(lx, y, lz); c.orb.visible = true; setOrbType(c.orb, type); info.orb = { x, z, y, type, key: key + ':o' }; }
  }
  // Zero-day warp (rare)
  const rw = rng(), wx2 = rng(), wz2 = rng();
  if (rw < 0.065 && !sessionTaken.has(key + ':w') && !(home && Math.hypot(home.x - (ox + 32), home.z - (oz + 32)) < 90)) {
    const x = ox + 10 + wx2 * 44, z = oz + 10 + wz2 * 44;
    if (clear(x, z, 2)) { const [lx, lz] = local(x, z), y = groundAt(x, z) + 1.8; c.warp.position.set(lx, y, lz); c.warp.visible = true; info.warp = { x, z, y, key: key + ':w' }; }
  }
  // Fuel cans for turbo (plentiful, they come back after a while)
  for (let k = 0; k < 3; k++) {
    const rf = rng(), fx2 = rng(), fz2 = rng(), fkey = key + ':f' + k;
    if (rf > 0.3 || sessionTaken.has(fkey)) continue;
    const x = ox + 6 + fx2 * 52, z = oz + 6 + fz2 * 52;
    if (!clear(x, z, 1) || H(x, z) > 30) continue;
    const [lx, lz] = local(x, z), y = groundAt(x, z) + 0.9, can = c.fuels[k];
    can.position.set(lx, y, lz); can.visible = true;
    info.fuels.push({ x, z, y, key: fkey, obj: can, taken: false });
  }
  // Trees
  let n = 0;
  const tr = TREE_R[W.tree];
  for (let t = 0; t < Q.trees * 2.2 && n < Q.trees; t++) {
    const x = ox + rng() * CH, z = oz + rng() * CH, keep = rng(), sc = 0.9 + rng() * 1.6, rot = rng() * 6.28;
    if (keep > forestDensity(x, z)) continue;
    const h = H(x, z);
    if (h < 0.6 || h > (W.treeMaxH || 60) || slopeAt(x, z) > 5 || !clear(x, z, 2.5)) continue;
    if (info.bugs.some(b => (b.x - x) ** 2 + (b.z - z) ** 2 < 6)) continue;
    const [lx, lz] = local(x, z);
    _p.set(lx, h - 0.25, lz); _q.setFromEuler(_e.set(0, rot, 0)); _s.set(sc, sc * (0.9 + keep * 0.4), sc);
    c.trees.setMatrixAt(n++, _m.compose(_p, _q, _s));
    c.colliders.push({ x, z, r: tr * sc + 0.1, tree: true });
  }
  c.trees.count = n; c.trees.instanceMatrix.needsUpdate = true; c.trees.computeBoundingSphere();
  // Rocks
  let r = 0;
  for (let t = 0; t < 10 && r < 8; t++) {
    const x = ox + rng() * CH, z = oz + rng() * CH, sc = 0.5 + rng() * 1.8, rot = rng() * 6.28, keep = rng(), h = H(x, z);
    if (h < 0.3 || keep > 0.25 + smooth(1, 6, slopeAt(x, z)) * 0.6 || !clear(x, z, sc)) continue;
    const [lx, lz] = local(x, z);
    _p.set(lx, h - 0.2 * sc, lz); _q.setFromEuler(_e.set(0, rot, 0)); _s.set(sc, sc, sc);
    c.rocks.setMatrixAt(r++, _m.compose(_p, _q, _s));
    if (sc > 0.9) c.colliders.push({ x, z, r: sc * 0.85 });
  }
  c.rocks.count = r; c.rocks.instanceMatrix.needsUpdate = true; c.rocks.computeBoundingSphere();
  // Ground cover, placed from the chunk's own height grid so it sits exactly on the mesh.
  if (c.cover) {
    let g = 0; const dens = COVER_DENSITY[W.tree];
    for (let t = 0; t < Q.cover; t++) {
      const lx = rng() * CH, lz = rng() * CH, keep = rng(), sc = 0.7 + rng() * 1.1, rot = rng() * 6.28;
      const fi = lx / STEP, fj = lz / STEP, i0 = Math.min(SEG - 1, Math.floor(fi)), j0 = Math.min(SEG - 1, Math.floor(fj)), tx = fi - i0, tz = fj - j0, gi = (j0 + 1) * GN + i0 + 1;
      const h00 = hgrid[gi], h10 = hgrid[gi + 1], h01 = hgrid[gi + GN], h11 = hgrid[gi + GN + 1];
      const h = lerp(lerp(h00, h10, tx), lerp(h01, h11, tx), tz);
      if (h < 0.5 || h > 40 || Math.abs(h10 - h00) + Math.abs(h01 - h00) > 2.2) continue;
      if (keep > dens * (0.2 + noise2((ox + lx) * 0.06 + 40, (oz + lz) * 0.06) * 0.95)) continue;
      if (!clear(ox + lx, oz + lz, 1.5)) continue;
      _p.set(lx, h - 0.04, lz); _q.setFromEuler(_e.set(0, rot, 0)); _s.set(sc, sc * (0.8 + keep), sc);
      c.cover.setMatrixAt(g++, _m.compose(_p, _q, _s));
    }
    c.cover.count = g; c.cover.instanceMatrix.needsUpdate = true; c.cover.computeBoundingSphere();
  }
  // This world's own props, and now and then one of its monuments.
  const PR = PROPS[W.id], MO = MONUMENTS[W.id];
  const free = (x, z, rr) => clear(x, z, rr) && !c.colliders.some(k => (k.x - x) ** 2 + (k.z - z) ** 2 < (k.r + rr) ** 2);
  const rm = rng(), mx = rng(), mz = rng(), mr = rng();
  c.monument.visible = false;
  if (rm < 0.09 && !info.lodge && !info.shrine && !info.tower) {
    const x = ox + 14 + mx * 36, z = oz + 14 + mz * 36, h = H(x, z);
    if (h > 1 && h < 34 && slopeAt(x, z) < 2.2 && free(x, z, MO.r + 1.5)) {
      c.monument.position.set(x - ox, h - 0.25, z - oz); c.monument.rotation.y = mr * 6.28; c.monument.visible = true;
      c.monGlow.visible = !!MO.glow; c.spin.visible = !!MO.spin;
      if (MO.r) c.colliders.push({ x, z, r: MO.r });
      avoid.push({ x, z, r: MO.r + 2 });
    }
  }
  let np = 0;
  for (let t = 0; t < 7; t++) {
    const x = ox + 4 + rng() * 56, z = oz + 4 + rng() * 56, sc = lerp(PR.s[0], PR.s[1], rng()), rot = rng() * 6.28, keep = rng();
    if (keep > PR.p || np >= 5) continue;
    const h = H(x, z);
    if (h < 0.7 || h > 34 || slopeAt(x, z) > 2.5 || !free(x, z, PR.r * sc + 0.6)) continue;
    _p.set(x - ox, h - 0.08, z - oz); _q.setFromEuler(_e.set(0, rot, 0)); _s.set(sc, sc, sc); _m.compose(_p, _q, _s);
    c.props.setMatrixAt(np, _m); c.propGlow.setMatrixAt(np, _m); np++;
    c.colliders.push({ x, z, r: PR.r * sc });
  }
  c.props.count = c.propGlow.count = np; c.propGlow.visible = !!PR.glow;
  c.props.instanceMatrix.needsUpdate = c.propGlow.instanceMatrix.needsUpdate = true;
  c.props.computeBoundingSphere(); c.propGlow.computeBoundingSphere();
}
const sessionTaken = new Set();

let lastShadowKey = '';
function streamChunks(px, pz, budget) {
  const pcx = Math.floor(px / CH), pcz = Math.floor(pz / CH), R = Q.radius;
  for (const [key, c] of chunks) if (Math.hypot(c.cx - pcx, c.cz - pcz) > R + 1.2) { freeChunk(c); chunks.delete(key); pool.push(c); }
  const need = [];
  for (let dz = -R; dz <= R; dz++) for (let dx = -R; dx <= R; dx++) {
    if (dx * dx + dz * dz > (R + 0.5) ** 2) continue;
    const key = (pcx + dx) + ',' + (pcz + dz);
    if (!chunks.has(key)) need.push([dx * dx + dz * dz, pcx + dx, pcz + dz, key]);
  }
  need.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < need.length && i < budget; i++) { const [, cx, cz, key] = need[i]; const c = pool.pop() || makeChunkObj(); buildChunk(c, cx, cz); chunks.set(key, c); }
  const sk = pcx + ',' + pcz;
  if (sk !== lastShadowKey || need.length) {
    lastShadowKey = sk;
    for (const c of chunks.values()) {
      const near = Math.max(Math.abs(c.cx - pcx), Math.abs(c.cz - pcz));
      c.trees.castShadow = Q.shadow > 0 && W.tree !== 'crystal' && near <= 1;
      if (c.cover) c.cover.visible = near <= Q.coverR;
    }
  }
  return need.length;
}
function nearbyChunks(x, z) {
  const cx = Math.floor(x / CH), cz = Math.floor(z / CH), out = [];
  for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) { const c = chunks.get((cx + dx) + ',' + (cz + dz)); if (c) out.push(c); }
  return out;
}

// Water / ice / mirror sheet following the player at height 0.
const SHEET = 2400, SHEET_TILE = 24;
const sheet = new THREE.Mesh(new THREE.PlaneGeometry(SHEET, SHEET).rotateX(-Math.PI / 2), M.ice);
sheet.receiveShadow = true; scene.add(sheet);
for (const m of [M.ice, M.water, M.mirror]) m.normalMap.repeat.set(SHEET / SHEET_TILE, SHEET / SHEET_TILE);

// Home lab: onceuponahacker's own cabin near the start of every world.
const homeObj = makeCabin(true); homeObj.visible = false; scene.add(homeObj);
const homeTerminal = new THREE.Group();
{
  const desk = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.08, 0.7), M.wood); desk.position.y = 0.9;
  const legs = new THREE.Mesh(mergeGeometries([[-0.6, -0.28], [0.6, -0.28], [-0.6, 0.28], [0.6, 0.28]].map(([x, z]) => new THREE.BoxGeometry(0.06, 0.9, 0.06).translate(x, 0.45, z))), M.wood);
  const screen = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 0.04), M.dark); screen.position.set(0, 1.25, 0.15);
  const glowS = new THREE.Mesh(new THREE.PlaneGeometry(0.74, 0.44), M.holo); glowS.position.set(0, 1.25, 0.125); glowS.rotation.y = Math.PI;
  homeTerminal.add(desk, legs, screen, glowS); homeTerminal.position.set(2.2, 0, -3.6); homeTerminal.rotation.y = Math.PI;
  homeObj.add(homeTerminal);
}

// =====================================================================
// Weather
// =====================================================================
const PARTICLES = {
  snow:      { tex: FLAKE, size: 0.14, fall: [0.5, 1.3], colors: [0xf0f4ff], sway: 0.25 },
  petals:    { tex: PETAL, size: 0.24, fall: [0.35, 0.8], colors: [0xffb7d0, 0xffd0e0, 0xff9ec0, 0xfff0f4], sway: 0.9 },
  leaves:    { tex: LEAF, size: 0.3, fall: [0.6, 1.2], colors: [0xe07a2a, 0xc84a2a, 0xe8b040, 0xa05a20], sway: 1.1 },
  dust:      { tex: FLAKE, size: 0.07, fall: [-0.05, 0.12], colors: [0xffd6a0, 0xf0c090], sway: 0.3, drift: 4 },
  fireflies: { tex: GLOW, size: 0.32, fall: [-0.15, 0.15], colors: [0xd8ff7a, 0xffe38a], additive: true, glow: 2.5, wander: true },
  data:      { tex: DATA, size: 0.45, fall: [5, 9], colors: [0x40e8ff, 0x7dff9a, 0xff60d8], additive: true, glow: 2.2 },
};
const weatherSys = (() => {
  const N = Q.particles;
  const pos = new Float32Array(N * 3), col = new Float32Array(N * 3), spd = new Float32Array(N), ph = new Float32Array(N);
  for (let i = 0; i < N; i++) { pos[i * 3] = rand(-35, 35); pos[i * 3 + 1] = rand(-5, 25); pos[i * 3 + 2] = rand(-35, 35); ph[i] = Math.random() * 100; }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const mat = new THREE.PointsMaterial({ size: 0.14, map: FLAKE, vertexColors: true, transparent: true, depthWrite: false });
  const pts = new THREE.Points(geo, mat); pts.frustumCulled = false; scene.add(pts);
  // Rain as short streaks.
  const RN = Math.floor(N * 0.7), rpos = new Float32Array(RN * 6), rspd = new Float32Array(RN);
  for (let i = 0; i < RN; i++) { const x = rand(-30, 30), y = rand(-5, 25), z = rand(-30, 30); rpos.set([x, y, z, x, y - 0.6, z], i * 6); rspd[i] = rand(14, 20); }
  const rgeo = new THREE.BufferGeometry(); rgeo.setAttribute('position', new THREE.BufferAttribute(rpos, 3));
  const rmat = new THREE.LineBasicMaterial({ color: 0xaabbdd, transparent: true, opacity: 0.0, depthWrite: false });
  const rain = new THREE.LineSegments(rgeo, rmat); rain.frustumCulled = false; scene.add(rain);
  let type = null;
  return {
    setType(t) {
      type = t; const P = PARTICLES[t]; if (!P) return;
      mat.map = P.tex; mat.size = P.size; mat.blending = P.additive ? THREE.AdditiveBlending : THREE.NormalBlending; mat.needsUpdate = true;
      const cc = new THREE.Color();
      for (let i = 0; i < N; i++) { cc.set(pick(P.colors)); if (P.glow) cc.multiplyScalar(P.glow); col[i * 3] = cc.r; col[i * 3 + 1] = cc.g; col[i * 3 + 2] = cc.b; spd[i] = rand(P.fall[0], P.fall[1]); }
      geo.attributes.color.needsUpdate = true;
    },
    update(dt, amount, rainAmt, wind, cam) {
      const P = PARTICLES[type];
      const count = P ? Math.floor(N * clamp(amount, 0, 1)) : 0;
      geo.setDrawRange(0, count); pts.visible = count > 0;
      if (count) {
        const cx = cam.x, cy = cam.y, cz = cam.z, sway = P.sway || 0, drift = (P.drift || 0) + wind * 3;
        for (let i = 0; i < count; i++) {
          const k = i * 3;
          if (P.wander) { pos[k] += Math.sin(time * 0.7 + ph[i]) * 0.6 * dt; pos[k + 1] += Math.sin(time * 1.3 + ph[i] * 2) * 0.3 * dt; pos[k + 2] += Math.cos(time * 0.6 + ph[i]) * 0.6 * dt; }
          else { pos[k + 1] -= spd[i] * dt; pos[k] += (Math.sin(time * 0.8 + ph[i]) * sway + drift) * dt; pos[k + 2] += Math.cos(time * 0.6 + ph[i]) * sway * 0.6 * dt; }
          if (pos[k + 1] < cy - 6) pos[k + 1] += 30; else if (pos[k + 1] > cy + 25) pos[k + 1] -= 30;
          if (pos[k] < cx - 35) pos[k] += 70; else if (pos[k] > cx + 35) pos[k] -= 70;
          if (pos[k + 2] < cz - 35) pos[k + 2] += 70; else if (pos[k + 2] > cz + 35) pos[k + 2] -= 70;
          // never let a flake drift right into the lens (it would fill the screen)
          const ddx = pos[k] - cx, ddy = pos[k + 1] - cy, ddz = pos[k + 2] - cz;
          if (ddx * ddx + ddy * ddy + ddz * ddz < 4) pos[k + 1] += 4;
        }
        geo.attributes.position.needsUpdate = true;
        if (P.wander) mat.opacity = 0.6 + 0.4 * Math.sin(time * 3); else mat.opacity = 0.95;
      }
      rain.visible = rainAmt > 0.01; rmat.opacity = 0.35 * rainAmt;
      if (rain.visible) {
        const rc = Math.floor(RN * rainAmt); rgeo.setDrawRange(0, rc * 2);
        for (let i = 0; i < rc; i++) {
          const k = i * 6; let x = rpos[k], y = rpos[k + 1] - rspd[i] * dt, z = rpos[k + 2];
          if (y < cam.y - 5) { y += 28; x = cam.x + rand(-30, 30); z = cam.z + rand(-30, 30); }
          if (x < cam.x - 30) x += 60; else if (x > cam.x + 30) x -= 60;
          if (z < cam.z - 30) z += 60; else if (z > cam.z + 30) z -= 60;
          rpos[k] = x; rpos[k + 1] = y; rpos[k + 2] = z; rpos[k + 3] = x + wind * 0.25; rpos[k + 4] = y + 0.7; rpos[k + 5] = z;
        }
        rgeo.attributes.position.needsUpdate = true;
      }
    },
  };
})();
const weather = { id: 'clear', phase: 'in', amt: 0, timer: 30, next: null, fogMul: 1, aurora: 0, clouds: 0, wind: 0.2, meteors: 0 };
function setWeather(id, instant) {
  if (instant) { weather.id = id; weather.amt = 1; weather.phase = 'hold'; weather.timer = rand(70, 130); weatherSys.setType(WEATHERS[id].particle); noteWeather(id); return; }
  weather.next = id; weather.phase = 'out';
}
let weatherChipT = null;
function noteWeather(id) {
  const chip = $('weather');
  chip.textContent = `${WEATHERS[id].icon} ${WEATHERS[id].name}`;
  chip.classList.add('show'); clearTimeout(weatherChipT); weatherChipT = setTimeout(() => chip.classList.remove('show'), 7000); // shows briefly, then gets out of the way
  if (!SAVE.weathers.includes(id)) { SAVE.weathers.push(id); save(); if (SAVE.weathers.length >= 5) unlockAch('weather5'); }
  if (id === 'meteors' && S.state === 'play') { unlockAch('meteors'); toast('☄ <b>Meteor shower!</b> Everything you find is worth double XP while it lasts.', 4200); }
}
function updateWeather(dt) {
  const def = WEATHERS[weather.id];
  if (weather.phase === 'out') { weather.amt -= dt / 5; if (weather.amt <= 0) { weather.amt = 0; weather.id = weather.next; weatherSys.setType(WEATHERS[weather.id].particle); weather.phase = 'in'; noteWeather(weather.id); } }
  else if (weather.phase === 'in') { weather.amt += dt / 6; if (weather.amt >= 1) { weather.amt = 1; weather.phase = 'hold'; weather.timer = rand(70, 130); } }
  else { weather.timer -= dt; if (weather.timer <= 0) { const opts = W.weathers.filter(w => w !== weather.id); setWeather(pick(opts)); } }
  const a = weather.amt, k = damp(1.5, dt);
  weather.fogMul = lerp(weather.fogMul, 1 + ((def.fog || 1) - 1) * a, k);
  weather.aurora = lerp(weather.aurora, Math.max(W.sky.auroraBase, (def.aurora || 0) * a), k);
  weather.clouds = lerp(weather.clouds, (def.clouds || 0.1) * (W.sky.cloudColor[0] + W.sky.cloudColor[1] > 0 ? 1 : 0) * a + 0.05, k);
  weather.wind = lerp(weather.wind, 0.2 + (def.wind || 0) * a, k);
  weather.meteors = lerp(weather.meteors, def.meteors ? a : 0, k);
  scene.fog.density = (W.fog / VIEW) * weather.fogMul;
  SKY.uAurora.value = weather.aurora; SKY.uClouds.value = weather.clouds; SKY.uMeteors.value = weather.meteors;
  U.wind.value = weather.wind;
  const amount = def.particle ? (def.heavy ? 1 : 0.6) * a : 0;
  weatherSys.update(dt, amount, def.rain ? a : 0, weather.wind, camera.position);
  audio.weather(def.rain ? a : 0, weather.wind);
}
const luckActive = () => WEATHERS[weather.id].luck && weather.amt > 0.5;

// =====================================================================
// Effects: sparkles, trails, floating text
// =====================================================================
const fx = (() => {
  const N = 900, pos = new Float32Array(N * 3).fill(-9999), col = new Float32Array(N * 3), data = [];
  for (let i = 0; i < N; i++) data.push({ vx: 0, vy: 0, vz: 0, life: 0, max: 1, g: 0, r: 1, gg: 1, b: 1 });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.25, map: GLOW, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  pts.frustumCulled = false; scene.add(pts);
  let next = 0; const c = new THREE.Color();
  return {
    burst(x, y, z, color, count, speed, gravity = 2, life = 1, vel = null) {
      c.set(color);
      for (let k = 0; k < count; k++) {
        const i = next; next = (next + 1) % N; const d = data[i];
        if (vel) { d.vx = vel[0] + rand(-0.5, 0.5); d.vy = vel[1] + rand(-0.5, 0.5); d.vz = vel[2] + rand(-0.5, 0.5); }
        else { const th = Math.random() * 6.283, ph = Math.acos(rand(-1, 1)), s = speed * rand(0.3, 1); d.vx = Math.sin(ph) * Math.cos(th) * s; d.vy = Math.abs(Math.cos(ph)) * s; d.vz = Math.sin(ph) * Math.sin(th) * s; }
        d.life = d.max = life * rand(0.6, 1.2); d.g = gravity; d.r = c.r; d.gg = c.g; d.b = c.b;
        pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
      }
    },
    update(dt) {
      for (let i = 0; i < N; i++) {
        const d = data[i];
        if (d.life <= 0) { if (pos[i * 3 + 1] > -9000) pos[i * 3 + 1] = -9999; continue; }
        d.life -= dt; d.vy -= d.g * dt; pos[i * 3] += d.vx * dt; pos[i * 3 + 1] += d.vy * dt; pos[i * 3 + 2] += d.vz * dt;
        const f = Math.max(0, d.life / d.max); col[i * 3] = d.r * f * 2; col[i * 3 + 1] = d.gg * f * 2; col[i * 3 + 2] = d.b * f * 2;
      }
      geo.attributes.position.needsUpdate = true; geo.attributes.color.needsUpdate = true;
    }
  };
})();
// Footprints and tyre tracks in snow and sand.
const trails = (() => {
  const N = 500, mesh = new THREE.InstancedMesh(new THREE.CircleGeometry(0.11, 10).rotateX(-Math.PI / 2), M.trail, N);
  mesh.frustumCulled = false; mesh.count = 0; scene.add(mesh);
  let next = 0, used = 0;
  return {
    add(x, z, rotY, sx = 1, sz = 1.5) {
      _p.set(x, groundAt(x, z) + 0.04, z); _q.setFromEuler(_e.set(0, rotY, 0)); _s.set(sx, 1, sz);
      mesh.setMatrixAt(next, _m.compose(_p, _q, _s)); next = (next + 1) % N; used = Math.min(N, used + 1);
      mesh.count = used; mesh.instanceMatrix.needsUpdate = true;
    },
    clear() { used = 0; next = 0; mesh.count = 0; },
  };
})();
// Ripples on water.
const ripples = Array.from({ length: 8 }, () => {
  const r = new THREE.Mesh(new THREE.RingGeometry(0.8, 1, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xcfe8ff, transparent: true, opacity: 0, depthWrite: false }));
  r.userData.t = 1; scene.add(r); return r;
});
let rippleNext = 0;
function addRipple(x, z) { const r = ripples[rippleNext]; rippleNext = (rippleNext + 1) % ripples.length; r.position.set(x, 0.03, z); r.userData.t = 0; }
function updateRipples(dt) { for (const r of ripples) { if (r.userData.t >= 1) { r.visible = false; continue; } r.visible = true; r.userData.t += dt / 1.6; const t = r.userData.t; r.scale.setScalar(0.4 + t * 3); r.material.opacity = (1 - t) * 0.5; } }

// Floating "+$750" texts projected from 3D to the screen.
const floaters = [];
const _v = new THREE.Vector3();
function floatText(x, y, z, html, color) {
  const el = document.createElement('div'); el.className = 'floater'; el.innerHTML = html; el.style.color = color;
  $('floaters').appendChild(el); floaters.push({ el, x, y, z, t: 0 });
}
function updateFloaters(dt) {
  for (let i = floaters.length - 1; i >= 0; i--) {
    const f = floaters[i]; f.t += dt;
    if (f.t > 1.6) { f.el.remove(); floaters.splice(i, 1); continue; }
    _v.set(f.x, f.y + f.t * 1.4, f.z).project(camera);
    if (_v.z > 1) { f.el.style.opacity = 0; continue; }
    f.el.style.transform = `translate(${(_v.x * 0.5 + 0.5) * innerWidth}px, ${(-_v.y * 0.5 + 0.5) * innerHeight}px) translate(-50%, -50%) scale(${1 + Math.max(0, 0.3 - f.t)})`;
    f.el.style.opacity = f.t < 1.1 ? 1 : 1 - (f.t - 1.1) / 0.5;
  }
}

// =====================================================================
// Avatar (white-hat hacker or Santa), reindeer, bicycle
// =====================================================================
function makeAvatar(style) {
  const hacker = style === 'hacker';
  const body = hacker ? M.hoodie : M.velvet, trim = hacker ? M.hoodie : M.fur, legsM = hacker ? M.jeans : M.velvet;
  const root = new THREE.Group(), pelvis = new THREE.Group(); pelvis.position.y = 0.78; root.add(pelvis);
  const add = (parent, geo, mat, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); parent.add(m); return m; };
  add(pelvis, new THREE.SphereGeometry(0.4, 32, 24), body, 0, 0.38, 0).scale.set(1, 1.12, 0.88);
  add(pelvis, new THREE.CylinderGeometry(0.38, 0.42, 0.26, 32), hacker ? M.jeans : M.velvet, 0, 0.02, 0);
  if (hacker) {
    add(pelvis, new THREE.CylinderGeometry(0.405, 0.41, 0.1, 32), M.hoodie, 0, 0.1, 0); // hoodie hem
    add(pelvis, new THREE.BoxGeometry(0.42, 0.2, 0.06), M.hoodie, 0, 0.26, -0.34).rotation.x = 0.12; // pocket
    for (const s of [-1, 1]) add(pelvis, new THREE.CylinderGeometry(0.008, 0.008, 0.28, 4), M.fur, s * 0.06, 0.62, -0.33);
    // backpack with a glowing laptop edge
    add(pelvis, new THREE.BoxGeometry(0.5, 0.58, 0.22), M.pack, 0, 0.45, 0.38);
    add(pelvis, new THREE.BoxGeometry(0.42, 0.03, 0.18), M.neon, 0, 0.75, 0.38);
  } else {
    add(pelvis, new THREE.TorusGeometry(0.44, 0.065, 12, 36), M.fur, 0, -0.12, 0).rotation.x = Math.PI / 2;
    add(pelvis, new THREE.CylinderGeometry(0.41, 0.41, 0.09, 32), M.leather, 0, 0.2, 0);
    add(pelvis, new THREE.BoxGeometry(0.17, 0.13, 0.04), M.gold, 0, 0.2, -0.41);
    const sack = add(pelvis, new THREE.SphereGeometry(0.36, 26, 18), M.sack, 0, 0.52, 0.42); sack.scale.set(1.05, 1.15, 0.72);
  }
  add(pelvis, new THREE.TorusGeometry(0.19, 0.07, 10, 28), trim, 0, 0.79, 0).rotation.x = Math.PI / 2;
  const head = new THREE.Group(); head.position.set(0, 0.98, 0); pelvis.add(head);
  add(head, new THREE.SphereGeometry(0.2, 28, 20), M.skin);
  for (const s of [-1, 1]) add(head, new THREE.SphereGeometry(0.022, 10, 8), M.dark, s * 0.07, 0.04, -0.18);
  add(head, new THREE.SphereGeometry(0.04, 12, 8), M.nose, 0, 0.0, -0.205);
  let hat;
  if (hacker) {
    hat = new THREE.Group(); head.add(hat);
    const hood = add(hat, new THREE.SphereGeometry(0.27, 28, 20, Math.PI * 1.5 + 0.75, Math.PI * 2 - 1.5, 0, 2.2), M.hoodie, 0, 0.03, 0.02);
    hood.scale.set(1, 1.08, 1.05);
    add(hat, new THREE.SphereGeometry(0.262, 24, 16, Math.PI * 1.5 + 0.75, Math.PI * 2 - 1.5, 0, 2.2), M.hoodIn, 0, 0.03, 0.02).scale.set(1, 1.08, 1.05);
    // headphones around the neck-line of the hood
    const band = add(hat, new THREE.TorusGeometry(0.26, 0.025, 8, 24, Math.PI), M.dark, 0, 0.0, 0.03); band.rotation.y = Math.PI / 2;
    for (const s of [-1, 1]) { add(hat, new THREE.CylinderGeometry(0.08, 0.08, 0.06, 16).rotateZ(Math.PI / 2), M.dark, s * 0.27, -0.02, 0.03); add(hat, new THREE.TorusGeometry(0.05, 0.012, 6, 16).rotateY(Math.PI / 2), M.neon, s * 0.305, -0.02, 0.03); }
  } else {
    add(head, new THREE.SphereGeometry(0.21, 24, 18), M.fur, 0, -0.1, -0.07).scale.set(1.05, 1.28, 0.85);
    hat = new THREE.Group(); hat.position.set(0, 0.13, 0.02); hat.rotation.x = 0.55; head.add(hat);
    add(hat, new THREE.TorusGeometry(0.19, 0.06, 12, 28), M.fur).rotation.x = Math.PI / 2;
    add(hat, new THREE.ConeGeometry(0.18, 0.5, 28), M.velvet, 0, 0.25, 0);
    add(hat, new THREE.SphereGeometry(0.075, 14, 10), M.fur, 0, 0.5, 0);
  }
  const limbs = {};
  for (const [name, s] of [['L', -1], ['R', 1]]) {
    const sh = new THREE.Group(); sh.position.set(s * 0.38, 0.66, 0); sh.rotation.z = s * 0.18; pelvis.add(sh);
    add(sh, new THREE.CapsuleGeometry(0.09, 0.34, 6, 14), body, 0, -0.24, 0);
    add(sh, new THREE.TorusGeometry(0.095, 0.035, 8, 18), trim, 0, -0.44, 0).rotation.x = Math.PI / 2;
    add(sh, new THREE.SphereGeometry(0.09, 16, 12), hacker ? M.skin : M.mitten, 0, -0.53, 0).scale.set(0.95, 1.15, 1);
    limbs['sh' + name] = sh;
    const hip = new THREE.Group(); hip.position.set(s * 0.17, -0.02, 0); pelvis.add(hip);
    add(hip, new THREE.CapsuleGeometry(0.115, 0.3, 6, 14), legsM, 0, -0.24, 0);
    const boot = new THREE.Group(); boot.position.y = -0.6; hip.add(boot);
    add(boot, new THREE.CylinderGeometry(0.12, 0.13, hacker ? 0.14 : 0.24, 18), hacker ? M.sneaker : M.leather, 0, hacker ? -0.02 : 0.04, 0);
    add(boot, new THREE.SphereGeometry(0.135, 18, 12), hacker ? M.sneaker : M.leather, 0, -0.08, -0.08).scale.set(1, 0.6, 1.5);
    if (hacker) add(boot, new THREE.BoxGeometry(0.2, 0.03, 0.4), M.sole, 0, -0.14, -0.06);
    limbs['hip' + name] = hip;
  }
  root.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return { root, pelvis, head, hat, ...limbs };
}
function tubeBetween(points, r, mat) { return new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p))), 16, r, 6, false), mat); }
function makeReindeer() {
  const root = new THREE.Group(), body = new THREE.Group(); body.position.y = 1.25; root.add(body);
  const add = (parent, geo, mat, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); parent.add(m); return m; };
  add(body, new THREE.SphereGeometry(0.5, 28, 20), M.deer).scale.set(0.82, 0.8, 1.55);
  add(body, new THREE.SphereGeometry(0.44, 24, 18), M.deer, 0, 0.04, -0.58).scale.set(0.95, 1.02, 1);
  add(body, new THREE.SphereGeometry(0.42, 24, 18), M.deer, 0, 0.04, 0.6);
  add(body, new THREE.SphereGeometry(0.42, 24, 18), M.deerLight, 0, -0.2, -0.05).scale.set(0.72, 0.5, 1.4);
  add(body, new THREE.SphereGeometry(0.3, 18, 14), M.deerLight, 0, 0.08, 0.86).scale.set(1, 1, 0.45);
  const tail = add(body, new THREE.ConeGeometry(0.08, 0.22, 10), M.deerLight, 0, 0.32, 0.98); tail.rotation.x = 2.2;
  add(body, new THREE.BoxGeometry(0.86, 0.06, 0.8), M.blanket, 0, 0.4, 0.02);
  add(body, new THREE.BoxGeometry(0.9, 0.03, 0.84), M.gold, 0, 0.37, 0.02);
  const saddle = add(body, new THREE.CapsuleGeometry(0.22, 0.25, 6, 14), M.red, 0, 0.46, 0.0); saddle.rotation.x = Math.PI / 2; saddle.scale.set(1.1, 1, 0.45);
  add(body, new THREE.TorusGeometry(0.44, 0.035, 8, 30), M.red, 0, 0.0, -0.7).scale.set(0.95, 1.05, 1);
  for (let i = -2; i <= 2; i++) add(body, new THREE.SphereGeometry(0.055, 12, 10), M.gold, Math.sin(i * 0.45) * 0.42, -Math.cos(i * 0.45) * 0.44, -0.72);
  const neck = new THREE.Group(); neck.position.set(0, 0.25, -0.75); neck.rotation.x = -0.65; body.add(neck);
  add(neck, new THREE.CapsuleGeometry(0.19, 0.5, 6, 14), M.deer, 0, 0.33, 0);
  add(neck, new THREE.SphereGeometry(0.2, 14, 10), M.deerLight, 0, 0.15, -0.12).scale.set(0.9, 1.4, 0.7);
  const head = new THREE.Group(); head.position.set(0, 0.72, 0); head.rotation.x = 0.45; neck.add(head);
  add(head, new THREE.SphereGeometry(0.22, 22, 16), M.deer).scale.set(0.85, 0.9, 1.1);
  const snout = add(head, new THREE.CapsuleGeometry(0.12, 0.2, 6, 12), M.deer, 0, -0.07, -0.27); snout.rotation.x = Math.PI / 2;
  add(head, new THREE.SphereGeometry(0.075, 14, 10), M.hoof, 0, -0.04, -0.45).scale.set(1.2, 0.9, 0.8);
  const breath = new THREE.Object3D(); breath.position.set(0, -0.08, -0.55); head.add(breath);
  for (const s of [-1, 1]) {
    add(head, new THREE.SphereGeometry(0.035, 10, 8), M.dark, s * 0.13, 0.05, -0.12);
    const ear = add(head, new THREE.ConeGeometry(0.06, 0.2, 8), M.deer, s * 0.18, 0.12, 0.05); ear.rotation.z = s * -1.2; ear.scale.z = 0.5;
    head.add(tubeBetween([[s * 0.08, 0.18, 0.04], [s * 0.22, 0.42, 0.1], [s * 0.36, 0.68, 0.02], [s * 0.4, 0.9, -0.14]], 0.03, M.antler));
    head.add(tubeBetween([[s * 0.2, 0.38, 0.09], [s * 0.18, 0.5, -0.12], [s * 0.16, 0.58, -0.22]], 0.022, M.antler));
    head.add(tubeBetween([[s * 0.33, 0.62, 0.04], [s * 0.45, 0.76, 0.14], [s * 0.5, 0.86, 0.18]], 0.02, M.antler));
    head.add(tubeBetween([[s * 0.38, 0.82, -0.08], [s * 0.3, 0.98, -0.12], [s * 0.26, 1.04, -0.1]], 0.018, M.antler));
  }
  const legs = [];
  for (const [x, z, front] of [[-0.2, -0.6, 1], [0.2, -0.6, 1], [-0.2, 0.6, 0], [0.2, 0.6, 0]]) {
    const hip = new THREE.Group(); hip.position.set(x, -0.25, z); body.add(hip);
    add(hip, new THREE.CapsuleGeometry(0.1, 0.36, 6, 12), M.deer, 0, -0.22, 0);
    const knee = new THREE.Group(); knee.position.y = -0.48; hip.add(knee);
    add(knee, new THREE.CapsuleGeometry(0.055, 0.36, 6, 10), M.deerLight, 0, -0.2, 0);
    add(knee, new THREE.CylinderGeometry(0.065, 0.075, 0.09, 12), M.hoof, 0, -0.46, 0);
    legs.push({ hip, knee, front, x, z });
  }
  root.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return { root, body, neck, head, legs, tail, breath };
}
function rod(a, b, r, mat) { return new THREE.Mesh(rodGeo(a, b, r, 10), mat); }
function makeWheel() {
  const w = new THREE.Group();
  w.add(new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.04, 10, 40), M.rubber), new THREE.Mesh(new THREE.TorusGeometry(0.33, 0.015, 6, 40), M.chrome));
  const spokes = []; for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2; spokes.push(rodGeo([0, 0, 0], [Math.cos(a) * 0.33, Math.sin(a) * 0.33, 0], 0.005, 4)); }
  w.add(new THREE.Mesh(mergeGeometries(spokes), M.chrome));
  w.add(new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.1, 12).rotateX(Math.PI / 2), M.chrome));
  const rimGlow = new THREE.Mesh(new THREE.TorusGeometry(0.315, 0.008, 6, 40), M.neon); rimGlow.visible = false; w.add(rimGlow);
  w.rotation.y = Math.PI / 2;
  const spin = new THREE.Group(); spin.add(w); spin.userData.rimGlow = rimGlow;
  return spin;
}
function makeBike() {
  const root = new THREE.Group(), rear = makeWheel(), front = makeWheel();
  rear.position.set(0, 0.4, 0.58);
  const rH = [0, 0.4, 0.58], crank = [0, 0.38, 0.05], seat = [0, 0.98, 0.24], head = [0, 0.92, -0.42];
  root.add(rear, rod(rH, crank, 0.025, M.paint), rod(crank, seat, 0.032, M.paint), rod(seat, rH, 0.022, M.paint), rod(crank, head, 0.035, M.paint), rod([0, 0.9, 0.2], [0, 0.88, -0.38], 0.03, M.paint));
  const steer = new THREE.Group(); steer.position.set(...head); root.add(steer);
  steer.add(rod([0, 0, 0], [0, -0.52, -0.16], 0.022, M.chrome), rod([0, 0, 0], [0, 0.18, 0.04], 0.022, M.chrome), rod([-0.28, 0.2, 0.08], [0.28, 0.2, 0.08], 0.018, M.chrome));
  for (const s of [-1, 1]) steer.add(rod([s * 0.22, 0.2, 0.08], [s * 0.3, 0.2, 0.08], 0.03, M.rubber));
  front.position.set(0, -0.52, -0.16); steer.add(front);
  const basket = new THREE.Group(); basket.position.set(0, 0.06, -0.2); steer.add(basket);
  const bk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.17, 0.24, 14, 1, true), M.wicker); bk.material.side = THREE.DoubleSide; basket.add(bk);
  const lap = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.02, 0.2), M.dark); lap.position.set(0, 0.13, 0); lap.rotation.x = 0.3; basket.add(lap);
  const lapGlow = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.15), M.holo); lapGlow.position.set(0, 0.2, 0.08); lapGlow.rotation.x = -0.9; basket.add(lapGlow);
  const saddle = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.16, 6, 10), M.leather); saddle.rotation.x = Math.PI / 2; saddle.scale.set(1.3, 1, 0.5); saddle.position.set(0, 1.0, 0.22); root.add(saddle);
  const crankG = new THREE.Group(); crankG.position.set(...crank); root.add(crankG);
  crankG.add(new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.02, 20).rotateZ(Math.PI / 2).translate(0.06, 0, 0), M.chrome));
  for (const s of [-1, 1]) { const arm = new THREE.Group(); arm.rotation.x = s > 0 ? 0 : Math.PI; crankG.add(arm); arm.add(rod([s * 0.08, 0, 0], [s * 0.08, -0.17, 0], 0.015, M.chrome)); const pedal = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.025, 0.07), M.rubber); pedal.position.set(s * 0.14, -0.17, 0); arm.add(pedal); }
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.9, 0.7).multiplyScalar(3) })); lamp.position.set(0, 0.06, -0.06); steer.add(lamp);
  root.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return { root, rear, front, steer, crankG };
}
const reindeer = makeReindeer(), bike = makeBike();
let avatar = makeAvatar(SAVE.avatar === 'santa' ? 'santa' : 'hacker');
const rider = new THREE.Group(); rider.rotation.order = 'YXZ';
rider.add(reindeer.root, bike.root, avatar.root);
const nameplate = makeLabel(512, 160); nameplate.position.y = 3.5; rider.add(nameplate);
scene.add(rider);
function setAvatar(style) {
  rider.remove(avatar.root); avatar = makeAvatar(style); rider.add(avatar.root);
  SAVE.avatar = style; save();
}

const MOUNTS = { reindeer: { walk: 10, run: 17, accel: 3.2, turn: 1.9, jump: 8.5 }, bike: { walk: 10.5, run: 16, accel: 2.8, turn: 1.6, jump: 6.5 } };
const P = { mount: SAVE.mount === 'bike' ? 'bike' : 'reindeer', x: 0, z: 0, y: 0, vy: 0, heading: 0, speed: 0, vel: new THREE.Vector3(), grounded: true, pitch: 0, roll: 0, gait: 0, crank: 0, steerVis: 0, surface: 'land', bumpT: 0, airJumps: 0, gliding: false, turbo: false, steerIn: 0 };
function applyMount() {
  reindeer.root.visible = P.mount === 'reindeer'; bike.root.visible = P.mount === 'bike';
  $('btnMount').textContent = P.mount === 'reindeer' ? '🚲' : '🦌';
  $('btnMount').title = P.mount === 'reindeer' ? 'Switch to bicycle (E)' : 'Switch to reindeer (E)';
}

// =====================================================================
// Sound: generative music per world, weather ambience, effects
// =====================================================================
// Each instrument is a few sine/triangle/saw partials with its own envelope and (optional) filter sweep.
const VOICES = {
  bell:    { parts: [['sine', 1, 1], ['sine', 2.76, 0.16], ['sine', 5.4, 0.05]], a: 0.008, d: 1.9 },
  koto:    { parts: [['triangle', 1, 1], ['sine', 2, 0.25]], a: 0.004, d: 1.2, bend: 1.025, lp: [3800, 900] },
  pluck:   { parts: [['sawtooth', 1, 0.55], ['triangle', 1, 0.6]], a: 0.004, d: 1.0, lp: [3200, 500] },
  oud:     { parts: [['sawtooth', 1, 0.5], ['sawtooth', 1.006, 0.4], ['sine', 0.5, 0.4]], a: 0.004, d: 0.9, lp: [2600, 420] },
  synth:   { parts: [['sawtooth', 1, 0.7], ['square', 0.5, 0.2]], a: 0.01, d: 0.7, lp: [3200, 400], q: 6 },
  kalimba: { parts: [['sine', 1, 1], ['sine', 3, 0.22], ['sine', 6.2, 0.06]], a: 0.003, d: 0.75 },
  flute:   { parts: [['sine', 1, 1], ['triangle', 2, 0.12]], a: 0.08, d: 1.3, vib: 5, hold: 0.6 },
  glass:   { parts: [['sine', 1, 1], ['sine', 2, 0.3], ['sine', 4.2, 0.08]], a: 0.03, d: 2.4 },
  piano:   { parts: [['triangle', 1, 1], ['sine', 2, 0.3], ['sine', 3, 0.08]], a: 0.005, d: 1.5, lp: [4200, 1200] },
  bass:    { parts: [['sine', 1, 1], ['triangle', 1, 0.25]], a: 0.03, d: 1.8, lp: [700, 220] },
};
const audio = (() => {
  let ctx = null, master, comp, reverb, musicMaster, sfxBus, windGain, windFilter, rainGain, staticGain, turboGain, turboFilter, noiseBuf;
  let musicOn = store.get('bbw_music', true), nextBeat = 0, beat = 0, arp = 0, loops = 0;
  let mb = null, mu = null, melody = []; // the current world's own music bus, style and tune
  function init() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
    comp = ctx.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 3; comp.attack.value = 0.02; comp.release.value = 0.3; comp.connect(ctx.destination);
    master = ctx.createGain(); master.gain.value = 0.95; master.connect(comp);
    // A soft hall reverb made from decaying noise: this is what gives the instruments space.
    const rl = Math.floor(ctx.sampleRate * 2.8), ir = ctx.createBuffer(2, rl, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); let prev = 0; for (let i = 0; i < rl; i++) { const t = i / rl; prev = prev * 0.55 + (Math.random() * 2 - 1) * 0.45; d[i] = prev * Math.pow(1 - t, 3.2); } }
    reverb = ctx.createConvolver(); reverb.buffer = ir;
    const wet = ctx.createGain(); wet.gain.value = 0.7; reverb.connect(wet); wet.connect(master);
    musicMaster = ctx.createGain(); musicMaster.gain.value = musicOn ? 1 : 0; musicMaster.connect(master);
    sfxBus = ctx.createGain(); sfxBus.connect(master);
    const sfxSend = ctx.createGain(); sfxSend.gain.value = 0.22; sfxBus.connect(sfxSend); sfxSend.connect(reverb);
    const len = ctx.sampleRate * 2; noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const loop = (type, freq, q) => { const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true; const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q; const g = ctx.createGain(); g.gain.value = 0; s.connect(f); f.connect(g); g.connect(master); s.start(); return [g, f]; };
    [windGain, windFilter] = loop('bandpass', 420, 0.5);
    [rainGain] = loop('lowpass', 3200, 0.3);
    [staticGain] = loop('bandpass', 2400, 2);
    [turboGain, turboFilter] = loop('bandpass', 300, 1.2);
    setWorld();
    setInterval(schedule, 100);
  }
  // Every world gets a fresh bus. Leaving a world mutes and removes its bus, so two worlds never play together.
  function setWorld() {
    if (!ctx) return;
    const now = ctx.currentTime;
    if (mb) {
      const old = mb;
      old.inp.gain.cancelScheduledValues(now); old.inp.gain.setTargetAtTime(0, now, 0.12);
      old.echoOut.gain.setTargetAtTime(0, now, 0.12);
      setTimeout(() => { try { old.inp.disconnect(); old.echoOut.disconnect(); old.fb.disconnect(); } catch (e) { /* already gone */ } }, 1500);
    }
    mu = W.music;
    const inp = ctx.createGain(); inp.connect(musicMaster);
    const send = ctx.createGain(); send.gain.value = 0.5; inp.connect(send); send.connect(reverb);
    const dl = ctx.createDelay(2); dl.delayTime.value = Math.min(1.9, mu.beat * 1.5);
    const fb = ctx.createGain(); fb.gain.value = 0.25; const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1800;
    const echoIn = ctx.createGain(); echoIn.gain.value = 0.22; const echoOut = ctx.createGain();
    inp.connect(echoIn); echoIn.connect(dl); dl.connect(lp); lp.connect(fb); fb.connect(dl); lp.connect(echoOut); echoOut.connect(musicMaster);
    mb = { inp, echoOut, fb };
    beat = 0; arp = 0; loops = 0; nextBeat = now + 1.1; // a short breath of silence, then the new tune
    melody = makeMelody();
  }
  function note(freq, t, vol, voice = 'bell', dest = null) {
    const V = VOICES[voice] || VOICES.bell, g = ctx.createGain(); let out = g;
    if (V.lp) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.Q.value = V.q || 0.7; f.frequency.setValueAtTime(V.lp[0], t); f.frequency.exponentialRampToValueAtTime(V.lp[1], t + V.d * 0.6); g.connect(f); out = f; }
    out.connect(dest || mb.inp);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + V.a);
    if (V.hold) g.gain.exponentialRampToValueAtTime(vol * 0.85, t + V.d * V.hold);
    g.gain.exponentialRampToValueAtTime(0.0001, t + V.d);
    let lfo = null;
    if (V.vib) { lfo = ctx.createOscillator(); lfo.frequency.value = V.vib; lfo.start(t); lfo.stop(t + V.d + 0.05); }
    for (const [type, ratio, gain] of V.parts) {
      const o = ctx.createOscillator(), pg = ctx.createGain(); o.type = type; o.frequency.value = freq * ratio; pg.gain.value = gain;
      if (V.bend) { o.frequency.setValueAtTime(freq * ratio * V.bend, t); o.frequency.exponentialRampToValueAtTime(freq * ratio, t + 0.08); }
      if (lfo) { const lg = ctx.createGain(); lg.gain.value = freq * ratio * 0.006; lfo.connect(lg); lg.connect(o.frequency); }
      o.connect(pg); pg.connect(g); o.start(t); o.stop(t + V.d + 0.05);
    }
  }
  // A warm chord that swells in and is gone by the time the next chord arrives, so chords never smear together.
  function pad(chord, t, dur) {
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = mu.voice === 'synth' ? 1100 : 750;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.026, t + Math.min(1.6, dur * 0.3)); g.gain.setValueAtTime(0.026, t + dur * 0.75); g.gain.linearRampToValueAtTime(0.0001, t + dur + 0.35);
    lp.connect(g); g.connect(mb.inp);
    for (const f of chord) for (const det of [-5, 5]) { const o = ctx.createOscillator(); o.type = mu.voice === 'synth' ? 'sawtooth' : 'triangle'; o.frequency.value = f; o.detune.value = det; o.connect(lp); o.start(t); o.stop(t + dur + 0.4); }
  }
  // The tune: four bars that follow the chords. Bar 3 echoes bar 1, bar 4 comes to rest, so it sounds like a melody rather than random notes.
  function makeMelody() {
    const sc = mu.scale, rh = mu.rhythm || [1, 0, 1, 0, 1, 0, 1, 0], last = sc.length - 2;
    const isTone = (i, ch) => ch.some(c => { const r = Math.log2(sc[i] / c); return Math.abs(r - Math.round(r)) < 0.02; });
    const snap = (i, ch) => { for (let d = 0; d < sc.length; d++) for (const s of [i + d, i - d]) if (s >= 1 && s <= last && isTone(s, ch)) return s; return clamp(i, 1, last); };
    let idx = Math.floor(sc.length / 2);
    const genBar = (ch, ending) => {
      const bar = []; let lastPlayed = -1;
      for (let b = 0; b < 8; b++) {
        if (!rh[b] || (b > 0 && Math.random() < 0.15) || (ending && b >= 5)) { bar.push(-1); continue; }
        idx = b === 0 ? snap(idx, ch) : clamp(idx + pick([-2, -1, -1, 1, 1, 2]), 1, last);
        bar.push(idx); lastPlayed = b;
      }
      if (ending && lastPlayed >= 0) { bar[lastPlayed] = snap(bar[lastPlayed], ch); idx = bar[lastPlayed]; }
      return bar;
    };
    const C = n => mu.chords[n % mu.chords.length];
    const b0 = genBar(C(0)), b1 = genBar(C(1));
    const first = b0.find(v => v >= 0), off = first === undefined ? 0 : snap(first, C(2)) - first;
    const b2 = b0.map(v => v < 0 ? -1 : clamp(v + off, 1, last));
    idx = b2.filter(v => v >= 0).pop() ?? idx;
    return [...b0, ...b1, ...b2, ...genBar(C(3), true)];
  }
  function schedule() {
    if (!ctx || ctx.state !== 'running' || !mb) return;
    const B = mu.beat;
    while (nextBeat < ctx.currentTime + 0.4) {
      const bar = Math.floor(beat / 8) % 4, b = beat % 8, ch = mu.chords[bar % mu.chords.length];
      if (musicOn) {
        if (b === 0) { pad(ch, nextBeat, B * 8); note(ch[0] > 120 ? ch[0] / 2 : ch[0], nextBeat, 0.07, 'bass'); }
        if (b === 4) note(ch[1] > 150 ? ch[1] / 2 : ch[1], nextBeat, 0.04, 'bass');
        if (mu.arp) { note(ch[arp % ch.length] * (arp % 6 < 3 ? 2 : 4), nextBeat, 0.024, 'synth'); arp++; }
        const m = melody[bar * 8 + b];
        if (m >= 0) note(mu.scale[m], nextBeat, 0.05, mu.voice);
      }
      beat++; nextBeat += B;
      if (beat % 32 === 0 && ++loops % 3 === 0) melody = makeMelody(); // the tune changes gently every few rounds
    }
  }
  function noise(dur, freq, vol, type = 'bandpass', slideTo = null, q = 0.8) {
    const t = ctx.currentTime, src = ctx.createBufferSource(); src.buffer = noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q; if (slideTo) f.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(sfxBus); src.start(t, Math.random()); src.stop(t + dur + 0.05);
  }
  const scaleNote = i => W.music.scale[clamp(i, 0, W.music.scale.length - 1)];
  const sfx = (freq, t, vol, voice = 'bell') => note(freq, t, vol, voice, sfxBus);
  return {
    init, setWorld,
    get musicOn() { return musicOn; },
    toggleMusic() { musicOn = !musicOn; store.set('bbw_music', musicOn); if (musicMaster) musicMaster.gain.setTargetAtTime(musicOn ? 1 : 0, ctx.currentTime, 0.3); return musicOn; },
    wind(speed) { if (!ctx) return; windGain.gain.setTargetAtTime(0.01 + speed * 0.002 + weather.wind * 0.02, ctx.currentTime, 0.5); windFilter.frequency.setTargetAtTime(300 + speed * 30 + weather.wind * 200, ctx.currentTime, 0.5); },
    weather(rain) { if (ctx) rainGain.gain.setTargetAtTime(rain * 0.05, ctx.currentTime, 0.8); },
    radio(v) { if (ctx) staticGain.gain.setTargetAtTime(v * 0.012, ctx.currentTime, 0.3); },
    turbo(spd) { if (!ctx) return; turboGain.gain.setTargetAtTime(spd > 0 ? 0.05 : 0, ctx.currentTime, spd > 0 ? 0.15 : 0.4); turboFilter.frequency.setTargetAtTime(250 + spd * 28, ctx.currentTime, 0.3); },
    turboStart() { if (ctx) noise(0.7, 300, 0.1, 'bandpass', 2600, 1.2); },
    // A very quiet chime that gets a little brighter as a bug gets closer: guidance for the ears, not the eyes.
    sense(c) { if (ctx) sfx(scaleNote(5 + Math.round(c * 4)) * 2, ctx.currentTime, 0.01 + c * 0.018, 'glass'); },
    quest() { if (!ctx) return; const t = ctx.currentTime; [4, 6, 8].forEach((n, i) => sfx(scaleNote(n) * 2, t + i * 0.1, 0.05)); },
    fuel() { if (!ctx) return; const t = ctx.currentTime; [0, 5, 9].forEach((s, i) => sfx(330 * Math.pow(2, s / 12), t + i * 0.05, 0.05, 'pluck')); noise(0.25, 900, 0.04, 'bandpass', 2400); },
    step(surface, vol = 1) { if (!ctx) return; if (surface === 'water') noise(0.2, 1200, 0.03 * vol, 'bandpass', 500, 0.7); else noise(0.12, surface === 'ice' ? 2600 : 900, (surface === 'ice' ? 0.012 : 0.03) * vol, 'bandpass', surface === 'ice' ? 1800 : 400, 1.2); },
    jingle(vol = 1) { if (!ctx) return; const t = ctx.currentTime; for (let i = 0; i < 3; i++) sfx(rand(2200, 3400), t + i * 0.025, 0.008 * vol, 'kalimba'); },
    tick() { if (ctx) noise(0.03, 5000, 0.006, 'highpass', null, 0.5); },
    jump() { if (ctx) noise(0.35, 700, 0.05, 'bandpass', 1500); },
    land() { if (ctx) noise(0.25, 500, 0.06, 'lowpass', 150); },
    bump() { if (ctx) noise(0.5, 500, 0.12, 'lowpass', 120); },
    bug(sev, chain) { if (!ctx) return; const t = ctx.currentTime, base = 3 + Math.min(chain, 6); for (let i = 0; i <= sev; i++) sfx(scaleNote(base + i * 2) * 2, t + i * 0.07, 0.06); },
    submit() { if (!ctx) return; const t = ctx.currentTime; [3, 5, 7, 8, 10].forEach((n, i) => sfx(scaleNote(n), t + i * 0.12, 0.07)); noise(0.3, 6000, 0.02, 'highpass'); },
    card() { if (!ctx) return; const t = ctx.currentTime; for (let i = 0; i < 7; i++) sfx(scaleNote(i + 2), t + i * 0.06, 0.05, 'koto'); },
    power() { if (!ctx) return; const t = ctx.currentTime; [0, 4, 7, 12].forEach((s, i) => sfx(440 * Math.pow(2, s / 12), t + i * 0.08, 0.05, 'pluck')); },
    level() { if (!ctx) return; const t = ctx.currentTime; [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => sfx(261.63 * Math.pow(2, s / 12), t + i * 0.09, 0.06)); },
    warp() { if (!ctx) return; noise(2.2, 200, 0.12, 'bandpass', 4000, 1.5); const t = ctx.currentTime; [0, 7, 12, 19].forEach((s, i) => sfx(220 * Math.pow(2, s / 12), t + 0.4 + i * 0.15, 0.05, 'glass')); },
    chirp() { if (!ctx) return; const t = ctx.currentTime; [0, 1].forEach(i => sfx(rand(1700, 2500), t + i * 0.09, 0.012, 'flute')); },
    swap() { if (ctx) { noise(0.4, 1500, 0.05, 'bandpass', 600); this.jingle(2); } },
    pause(p) { if (!ctx) return; if (p) ctx.suspend(); else ctx.resume(); },
  };
})();

// =====================================================================
// Progression: XP, levels, bounties, achievements, codex
// =====================================================================
const S = { state: 'loading', chain: 0, chainT: 0, warping: false };
const power = Object.fromEntries(Object.keys(POWERS).map(k => [k, 0]));
let time = 0;
let toastTimer = null;
function toast(html, ms = 3200) { const el = $('toast'); el.innerHTML = html; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), ms); }
// Big centre banners queue up so a level-up never hides a new world's name.
const bannerQueue = []; let bannerBusy = false;
function banner(title, sub, ms = 3200) { bannerQueue.push([title, sub, ms]); if (!bannerBusy) nextBanner(); }
function nextBanner() {
  const item = bannerQueue.shift(); const b = $('banner');
  if (!item) { bannerBusy = false; return; }
  bannerBusy = true;
  const [title, sub, ms] = item;
  $('bannerTitle').textContent = title; $('bannerSub').textContent = sub || '';
  b.classList.remove('show'); void b.offsetWidth; b.classList.add('show');
  setTimeout(() => { b.classList.remove('show'); setTimeout(nextBanner, 650); }, ms);
}

function addXP(n, x, y, z) {
  SAVE.xp += n;
  if (x !== undefined) floatText(x, y + 0.8, z, `+${n} XP`, '#b8f3ff');
  while (SAVE.xp >= xpForLevel(SAVE.level)) {
    SAVE.xp -= xpForLevel(SAVE.level); SAVE.level++;
    audio.level();
    const rank = rankFor(SAVE.level), prev = rankFor(SAVE.level - 1);
    banner(`Level ${SAVE.level}`, rank !== prev ? `New rank: ${rank} ✨` : rank, 3600);
    for (let i = 0; i < 6; i++) fx.burst(P.x, P.y + 2, P.z, pick([0xffd166, 0x5ce1ff, 0xff7ab8, 0x7dff9a]), 20, 6, 3, 1.6);
    if (SAVE.level >= 5) unlockAch('level5');
    if (SAVE.level >= 12) unlockAch('level12');
    drawNameplate();
  }
  save(); hudDirty = true;
}
function unlockAch(id) {
  if (SAVE.ach.includes(id)) return;
  const a = ACHIEVEMENTS.find(x => x.id === id); if (!a) return;
  SAVE.ach.push(id); save();
  const el = $('achToast'); el.innerHTML = `<span class="ai">${a.icon}</span><div><small>Achievement unlocked</small><b>${esc(a.name)}</b><span>${esc(a.desc)}</span></div>`;
  el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 4200);
  audio.card();
}
function chainMult() { return 1 + Math.min(S.chain - 1, 8) * 0.25; }

let cardTimer = null;
function showCard(h, isNew) {
  const el = $('card');
  el.querySelector('.cg').textContent = GROUP_LABEL[h.group] || '';
  el.querySelector('.ch').textContent = h.handle;
  el.querySelector('.cn').textContent = h.name || '';
  el.querySelector('.cc').textContent = h.contribution;
  el.querySelector('.cf').textContent = isNew ? `📇 New Codex card · ${codexCount()} / ${HACKERS.length + 1}` : '📇 Already in your Codex';
  el.classList.toggle('ct', isCT(h));
  el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
  clearTimeout(cardTimer); cardTimer = setTimeout(() => el.classList.remove('show'), isNew ? 9000 : 5000);
}
const codexCount = () => [...codexSet].filter(h => h === PLAYER.handle || HACKERS.some(x => x.handle === h)).length;
function unlockHacker(h, key, x, y, z, xp) {
  const isNew = !codexSet.has(h.handle);
  if (isNew) {
    codexSet.add(h.handle); SAVE.shrines[key] = h.handle; save();
    addXP(xp, x, y, z); audio.card();
    const n = codexCount() - 1;
    if (n >= 5) unlockAch('codex5'); if (n >= 20) unlockAch('codex20');
  }
  showCard(h, isNew);
}

let nameplateT = 0; // the name tag only appears for a moment (start, level-up), so it never blocks the view
function drawNameplate() {
  drawLabel(nameplate, PLAYER.handle, `Lv ${SAVE.level} · ${rankFor(SAVE.level)}`, '#c8f6ff', 0.9);
  nameplate.scale.multiplyScalar(0.55);
  nameplateT = 6;
}

// One small goal at a time, shown in the pill at the top. It replaces on-screen navigation clutter.
const bugTotal = () => Object.values(SAVE.bugs).reduce((a, v) => a + (v || 0), 0);
const QSTAT = { bugs: bugTotal, submitted: () => SAVE.submitted, cards: () => codexCount(), fuel: () => SAVE.cans, dist: () => SAVE.dist, powers: () => SAVE.orbs };
const QUEST_INTRO = [
  { text: 'Ride to a soft light and catch a bug', kind: 'bug', stat: 'bugs', n: 1, xp: 30 },
  { text: 'Bring your report to a lodge (orange light)', kind: 'lodge', stat: 'submitted', n: 1, xp: 50 },
  { text: 'Visit a Hacker Shrine or a radio tower', kind: 'card', stat: 'cards', n: 1, xp: 60 },
];
const QUEST_POOL = [
  { text: 'Find {n} bugs', kind: 'bug', stat: 'bugs', n: [3, 4, 5], xp: 14 },
  { text: 'Submit {n} reports at a lodge', kind: 'lodge', stat: 'submitted', n: [3, 4], xp: 18 },
  { text: 'Pick up {n} fuel cans', kind: 'fuel', stat: 'fuel', n: [2, 3], xp: 12 },
  { text: 'Meet someone new at a shrine or tower', kind: 'card', stat: 'cards', n: [1], xp: 70 },
  { text: 'Wander {n} m, anywhere you like', kind: null, stat: 'dist', n: [400, 600, 800], xp: 0.08 },
  { text: 'Grab a power-up', kind: 'power', stat: 'powers', n: [1], xp: 50 },
];
const objDone = { t: 0, text: '' };
function newQuest() {
  const step = SAVE.questStep || 0, intro = step < QUEST_INTRO.length;
  let def, n;
  if (intro) { def = QUEST_INTRO[step]; n = def.n; }
  else {
    const last = SAVE.quest && SAVE.quest.src;
    def = pick(QUEST_POOL.filter(q => q.text !== last && !(q.stat === 'cards' && codexCount() > HACKERS.length)));
    n = pick(def.n);
  }
  SAVE.quest = { src: def.text, text: def.text.replace('{n}', n), kind: def.kind, stat: def.stat, n, base: QSTAT[def.stat](), xp: Math.round(intro ? def.xp : def.xp * n) };
  save();
}
function checkQuest() {
  if (!SAVE.quest || !QSTAT[SAVE.quest.stat]) newQuest();
  const q = SAVE.quest;
  if (QSTAT[q.stat]() - q.base < q.n) return;
  SAVE.questStep = (SAVE.questStep || 0) + 1;
  objDone.t = 3; objDone.text = `${q.text} · +${q.xp} XP`;
  audio.quest(); addXP(q.xp); newQuest();
}

// =====================================================================
// HUD, radar, screens
// =====================================================================
let hudDirty = true;
function updateHud(target) {
  if (hudDirty) {
    hudDirty = false;
    $('rank').textContent = `Lv ${SAVE.level} · ${rankFor(SAVE.level)}`;
    $('xpfill').style.width = `${clamp(SAVE.xp / xpForLevel(SAVE.level), 0, 1) * 100}%`;
    $('bounty').textContent = money(SAVE.bounty);
    const pend = SAVE.reports.reduce((a, r) => a + r.b, 0);
    $('reports').innerHTML = SAVE.reports.length ? `📝 ${SAVE.reports.length} report${SAVE.reports.length > 1 ? 's' : ''} to hand in · <b>${money(pend)}</b>` : '';
    $('codexCount').textContent = `${codexCount()}/${HACKERS.length + 1}`;
    // The profile brightens when something changes, then settles back.
    $('hud').classList.add('wake'); clearTimeout(wakeTimer); wakeTimer = setTimeout(() => $('hud').classList.remove('wake'), 5000);
  }
  let ph = '';
  for (const [k, v] of Object.entries(power)) if (v > 0) ph += `<div class="pw" style="--c:${POWERS[k].css}">${POWERS[k].icon} ${POWERS[k].name}<div class="bar"><i style="width:${v / POWERS[k].dur * 100}%"></i></div></div>`;
  if (luckActive()) ph += `<div class="pw" style="--c:#ffe9a8">☄ Lucky skies · 2× XP</div>`;
  if ($('powers').innerHTML !== ph) $('powers').innerHTML = ph;
  // chain meter
  const chainEl = $('chain');
  if (S.chain >= 2 && S.chainT > 0) { chainEl.classList.add('show'); $('chainText').textContent = `Chain ×${S.chain} · ${chainMult().toFixed(2).replace(/\.?0+$/, '')}× bounty`; $('chainFill').style.width = `${S.chainT / CHAIN_TIME * 100}%`; }
  else chainEl.classList.remove('show');
  // fuel gauge
  const f = SAVE.fuel / FUEL.max;
  $('fuelFill').style.width = `${f * 100}%`;
  $('fuel').classList.toggle('empty', SAVE.fuel <= 0);
  $('fuel').classList.toggle('burn', P.turbo);
  // Goal pill: a small arrow plus one line of text. That's all the navigation there is by default.
  checkQuest();
  const mode = NAV_MODES[navIndex], q = SAVE.quest, far = target ? Math.max(5, Math.round(target.d / 5) * 5) : 0;
  let obj;
  if (objDone.t > 0) obj = `<span class="done">✓ ${esc(objDone.text)}</span>`;
  else if (mode.id !== 'auto') obj = `${mode.icon} ${esc(mode.name)} <i>· ${target ? far + ' m' : 'none nearby'}</i>`;
  else {
    const prog = QSTAT[q.stat]() - q.base;
    obj = esc(q.text) + (q.n > 1 ? ` <i>${q.stat === 'dist' ? Math.floor(clamp(prog, 0, q.n) / 10) * 10 : clamp(prog, 0, q.n)}/${q.n}</i>` : '');
    const toLodge = target && (target.kind === 'lodge' || target.kind === 'home');
    if (toLodge && q.kind !== 'lodge') obj = `Hand in your ${SAVE.reports.length} reports <i>· ${TARGET_INFO[target.kind].icon} ${far} m</i>`; // pack is getting full
    else if (target && target.kind !== 'bug') obj += ` <i>· ${TARGET_INFO[target.kind].icon} ${far} m</i>`;
  }
  if (obj !== lastObj) { lastObj = obj; $('objective').innerHTML = obj; }
  const isBug = target && target.kind === 'bug';
  $('arrow').style.opacity = target ? (isBug ? 0.6 : 1) : 0.15;
  $('arrow').style.color = target && !isBug ? target.color : '';
  $('ring').classList.toggle('near', !!isBug && target.d < 45);
}
let lastObj = '', wakeTimer = null;
const CHAIN_TIME = 14;
const radarCtx = $('radar').getContext('2d');
function drawRadar(yaw) {
  const g = radarCtx, Wd = 160, R = 74, cx = 80, cy = 80, range = power.radar > 0 ? 260 : 130, sc = R / range;
  g.clearRect(0, 0, Wd, Wd);
  g.save(); g.beginPath(); g.arc(cx, cy, R, 0, Math.PI * 2); g.fillStyle = 'rgba(10,14,36,0.62)'; g.fill(); g.clip();
  g.strokeStyle = 'rgba(160,220,255,0.18)'; g.lineWidth = 1;
  for (const r of [R / 3, R * 2 / 3]) { g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.stroke(); }
  g.beginPath(); g.moveTo(cx - R, cy); g.lineTo(cx + R, cy); g.moveTo(cx, cy - R); g.lineTo(cx, cy + R); g.stroke();
  const level = guideLevel(target), showFuel = NAV_MODES[navIndex].id === 'fuel' || SAVE.fuel < 30;
  const cs = Math.cos(yaw), sn = Math.sin(yaw);
  const toScreen = (x, z) => { const dx = x - P.x, dz = z - P.z; return [cx + (dx * cs - dz * sn) * sc, cy - (-dx * sn - dz * cs) * sc]; };
  const dot = (x, z, color, r, shape) => {
    let [sx, sy] = toScreen(x, z); const dd = Math.hypot(sx - cx, sy - cy); if (dd > R - 3) { sx = cx + (sx - cx) / dd * (R - 3); sy = cy + (sy - cy) / dd * (R - 3); r *= 0.7; }
    g.fillStyle = color; g.beginPath();
    if (shape === 'sq') g.rect(sx - r, sy - r, r * 2, r * 2);
    else if (shape === 'di') { g.moveTo(sx, sy - r * 1.3); g.lineTo(sx + r, sy); g.lineTo(sx, sy + r * 1.3); g.lineTo(sx - r, sy); }
    else if (shape === 'tri') { g.moveTo(sx, sy - r * 1.3); g.lineTo(sx + r * 1.1, sy + r); g.lineTo(sx - r * 1.1, sy + r); }
    else if (shape === 'house') { g.moveTo(sx, sy - r * 1.4); g.lineTo(sx + r * 1.2, sy - r * 0.2); g.lineTo(sx + r, sy - r * 0.2); g.lineTo(sx + r, sy + r); g.lineTo(sx - r, sy + r); g.lineTo(sx - r, sy - r * 0.2); g.lineTo(sx - r * 1.2, sy - r * 0.2); }
    else g.arc(sx, sy, r, 0, Math.PI * 2);
    g.fill();
    return [sx, sy];
  };
  const carrying = SAVE.reports.length > 0, pulse = 1 + 0.25 * Math.sin(time * 5);
  const near = (x, z, extra = 0) => Math.abs(x - P.x) < range + extra && Math.abs(z - P.z) < range + extra;
  for (const c of chunks.values()) {
    const i = c.info; if (!i) continue;
    if (i.lodge && near(i.lodge.x, i.lodge.z, carrying ? 200 : 0)) dot(i.lodge.x, i.lodge.z, '#ffb070', 3.8 * (carrying ? pulse : 1), 'house');
    if (i.shrine && near(i.shrine.x, i.shrine.z)) dot(i.shrine.x, i.shrine.z, i.shrine.unlocked ? '#ffd38a' : '#ffffff', 3.4, 'di');
    if (i.tower && near(i.tower.x, i.tower.z)) dot(i.tower.x, i.tower.z, '#ff8ad0', 3.6, 'tri');
    for (const b of i.bugs) if (!b.taken && near(b.x, b.z)) dot(b.x, b.z, SEVERITY[b.s].css, 2.2 + b.s * 0.5);
    if (i.orb && near(i.orb.x, i.orb.z)) dot(i.orb.x, i.orb.z, POWERS[i.orb.type].css, 3.2);
    if (showFuel) for (const fu of i.fuels) if (!fu.taken && near(fu.x, fu.z)) dot(fu.x, fu.z, '#ff9a40', 1.8, 'sq');
    if (i.warp && near(i.warp.x, i.warp.z, 400)) dot(i.warp.x, i.warp.z, `rgba(200,140,255,${0.6 + 0.4 * Math.sin(time * 5)})`, 4.5, 'di');
  }
  if (home) dot(home.x, home.z, '#9ff0ff', 4.2, 'house');
  // A quiet ring marks where you're headed; the dashed line only appears when you asked for a guide (N).
  if (target && level > 0) {
    const [tx, ty] = (() => { let [sx, sy] = toScreen(target.x, target.z); const dd = Math.hypot(sx - cx, sy - cy); if (dd > R - 3) { sx = cx + (sx - cx) / dd * (R - 3); sy = cy + (sy - cy) / dd * (R - 3); } return [sx, sy]; })();
    g.strokeStyle = target.color;
    if (level > 1) { g.lineWidth = 1.2; g.setLineDash([3, 4]); g.beginPath(); g.moveTo(cx, cy); g.lineTo(tx, ty); g.stroke(); g.setLineDash([]); }
    g.lineWidth = 1.5; g.beginPath(); g.arc(tx, ty, 7 + Math.sin(time * 3) * 1, 0, Math.PI * 2); g.stroke();
  }
  g.restore();
  g.strokeStyle = 'rgba(160,220,255,0.45)'; g.lineWidth = 1.5; g.beginPath(); g.arc(cx, cy, R, 0, Math.PI * 2); g.stroke();
  g.fillStyle = '#fff'; g.beginPath(); g.moveTo(cx, cy - 6); g.lineTo(cx + 4.5, cy + 5); g.lineTo(cx, cy + 2.5); g.lineTo(cx - 4.5, cy + 5); g.fill();
}

function show(id) {
  for (const s of document.querySelectorAll('.screen')) s.classList.toggle('show', s.id === id);
  const b = id && $(id).querySelector('button.primary'); if (b) setTimeout(() => b.focus({ preventScroll: true }), 50);
}
function refreshMenu() {
  $('controlsHelp').innerHTML = isTouch
    ? 'Drag the left side to ride · ⤒ hop · hold 🔥 for turbo<br><small>🧭 shows markers to a place when you want them</small>'
    : '<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ride &nbsp; <kbd>Shift</kbd> faster &nbsp; <kbd>Space</kbd> hop &nbsp; <kbd>F</kbd> turbo<br><small><kbd>N</kbd> guide markers &nbsp; <kbd>E</kbd> switch ride &nbsp; <kbd>K</kbd> Codex &nbsp; <kbd>H</kbd> photo &nbsp; <kbd>P</kbd> rest &nbsp; <kbd>M</kbd> music &nbsp; drag mouse to look</small>';
  for (const b of document.querySelectorAll('[data-q]')) b.classList.toggle('on', b.dataset.q === qName);
  for (const b of document.querySelectorAll('[data-mount]')) b.classList.toggle('on', b.dataset.mount === P.mount);
  for (const b of document.querySelectorAll('[data-avatar]')) b.classList.toggle('on', b.dataset.avatar === SAVE.avatar);
  $('worldRow').innerHTML = WORLDS.map(w => {
    const open = SAVE.worlds.includes(w.id);
    return `<button data-world="${w.id}" class="${w.id === W.id ? 'on' : ''}" ${open ? '' : 'disabled'} title="${esc(open ? w.tagline : 'Find a Zero-Day Warp to unlock')}">${open ? w.icon : '🔒'} ${esc(open ? w.name : '???')}</button>`;
  }).join('');
  for (const b of document.querySelectorAll('[data-world]')) b.addEventListener('click', () => { if (!b.disabled && b.dataset.world !== W.id) { enterWorld(WORLDS.find(w => w.id === b.dataset.world), false); refreshMenu(); } });
  $('profileLine').textContent = `${PLAYER.handle} · Lv ${SAVE.level} ${rankFor(SAVE.level)} · ${money(SAVE.bounty)} earned · ${codexCount()}/${HACKERS.length + 1} Codex cards`;
  $('btnMusic').classList.toggle('off', !audio.musicOn);
}
let codexTab = 'all';
function renderCodex() {
  const tabs = { all: 'All hackers', ct: '📻 Lantern Radio', legend: '🏆 Legends', educator: '📚 Educators', ach: '🏅 Achievements', stats: '📊 Stats' };
  $('codexTabs').innerHTML = Object.entries(tabs).map(([k, v]) => `<button data-tab="${k}" class="${k === codexTab ? 'on' : ''}">${v}</button>`).join('');
  for (const b of document.querySelectorAll('[data-tab]')) b.addEventListener('click', () => { codexTab = b.dataset.tab; renderCodex(); });
  $('codexSummary').textContent = `${codexCount()} of ${HACKERS.length + 1} cards · ${SAVE.ach.length} of ${ACHIEVEMENTS.length} achievements`;
  let html = '';
  if (codexTab === 'ach') {
    html = ACHIEVEMENTS.map(a => { const got = SAVE.ach.includes(a.id); return `<div class="cardx ${got ? '' : 'locked'}"><div class="cg">${got ? a.icon : '🔒'} Achievement</div><div class="ch">${esc(a.name)}</div><div class="cc">${esc(a.desc)}</div></div>`; }).join('');
  } else if (codexTab === 'stats') {
    const b = SAVE.bugs, rows = [['Total bounty', money(SAVE.bounty)], ['Reports submitted', SAVE.submitted], ['Bugs found', `${bugTotal()} (${b.zeroday || 0} zero-day · ${b.critical} critical · ${b.high} high · ${b.medium} medium · ${b.low} low)`], ['Animal friends', SAVE.animals.length ? SAVE.animals.join(', ') : '—'],
      ['Best chain', `×${SAVE.bestChain}`], ['Distance travelled', `${(SAVE.dist / 1000).toFixed(2)} km`], ['Worlds visited', `${SAVE.worlds.length} / ${WORLDS.length}`], ['Weather seen', SAVE.weathers.map(w => WEATHERS[w].icon).join(' ') || '—'], ['Warps taken', SAVE.warps]];
    html = `<div class="stats">${rows.map(([k, v]) => `<div><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('')}</div><p class="tagline">💡 ${esc(pick(TIPS))}</p>`;
  } else {
    const list = [PLAYER, ...HACKERS].filter(h => codexTab === 'all' || (codexTab === 'ct' ? isCT(h) || h.group === 'you' : h.group === codexTab || h.group === 'you'));
    html = list.map(h => {
      const got = codexSet.has(h.handle);
      if (!got) return `<div class="cardx locked"><div class="cg">${esc(GROUP_LABEL[h.group])}</div><div class="ch">🔒 ???</div><div class="cc">${isCT(h) ? 'Tune in at a Lantern Radio tower to unlock.' : 'Visit a glowing Hacker Shrine to unlock.'}</div></div>`;
      return `<div class="cardx ${isCT(h) ? 'ct' : ''} ${h.group === 'you' ? 'you' : ''}"><div class="cg">${esc(GROUP_LABEL[h.group])}</div><div class="ch">${esc(h.handle)}</div><div class="cn">${esc(h.name || '')}</div><div class="cc">${esc(h.contribution)}</div></div>`;
    }).join('');
  }
  $('codexGrid').innerHTML = html;
}
let codexReturn = 'pause';
function openCodex(from) {
  if (S.state === 'play') { S.state = 'paused'; audio.pause(true); from = 'play'; }
  codexReturn = from || 'pause'; renderCodex(); show('codex');
}
function closeCodex() {
  if (codexReturn === 'play') { S.state = 'play'; audio.pause(false); show(null); }
  else if (codexReturn === 'menu') show('menu');
  else show('pause');
}

// =====================================================================
// Game flow
// =====================================================================
function begin() {
  audio.init(); S.state = 'play'; show(null); $('hud').hidden = false; applyMount(); drawNameplate(); hudDirty = true;
  if (!store.get('bbw_intro', false)) {
    store.set('bbw_intro', true);
    toast(`<small>Welcome, ${esc(PLAYER.handle)}</small>Follow the little arrow at the top, or just wander. There's no rush here.`, 5000);
  } else toast(`<small>Welcome back</small>${esc(W.name)}`, 2500);
  // A short reminder of the keys, which fades once you've ridden a little.
  hintFrom = SAVE.dist;
  $('hint').innerHTML = isTouch ? 'Drag the left side to ride · ⤒ to hop' : '<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ride &nbsp;·&nbsp; <kbd>Shift</kbd> faster &nbsp;·&nbsp; <kbd>Space</kbd> hop';
  $('hint').classList.add('show');
}
let hintFrom = -1;
function rest() {
  if (S.state !== 'play') return;
  S.state = 'paused'; audio.pause(true);
  $('pauseStats').textContent = `${rankFor(SAVE.level)} · ${money(SAVE.bounty)} earned · ${SAVE.submitted} reports · ${codexCount()} Codex cards. Take all the time you need.`;
  show('pause');
}
function resume() { if (S.state !== 'paused') return; S.state = 'play'; audio.pause(false); show(null); }
function toMenu() { S.state = 'menu'; audio.pause(false); $('hud').hidden = true; refreshMenu(); show('menu'); }
function switchMount() {
  if (S.state !== 'play') return;
  P.mount = P.mount === 'reindeer' ? 'bike' : 'reindeer'; SAVE.mount = P.mount; save();
  applyMount(); audio.swap(); fx.burst(P.x, P.y + 1, P.z, 0xffffff, 40, 3, 2, 1);
}

function findStart(world) {
  for (let r = 0; r < 3000; r += 8) {
    const a = r * 0.37, x = Math.cos(a) * r, z = Math.sin(a) * r, h = H(x, z);
    if (h > 2 && h < 20 && forestDensity(x, z) < W.forest[0] + 0.05 && Math.abs(H(x + 3, z) - H(x - 3, z)) < 1 && Math.abs(H(x, z + 3) - H(x, z - 3)) < 1) return [x, z];
  }
  return [0, 0];
}
function applyWorldLook() {
  const s = W.sky;
  SKY.uZenith.value.set(...s.zenith); SKY.uMid.value.set(...s.mid); SKY.uFog.value.set(...s.horizon);
  SKY.uA1.value.set(...s.aurora[0]); SKY.uA2.value.set(...s.aurora[1]); SKY.uStars.value = s.stars;
  SKY.uSun.value.set(...s.sun).normalize(); SKY.uSunColor.value.set(...s.sunColor); SKY.uSunSize.value = s.sunSize; SKY.uSunGlow.value = s.sunGlow;
  SKY.uCloudColor.value.set(...s.cloudColor); SKY.uRetro.value = s.retro; SKY.uAurora.value = s.auroraBase;
  FOG.setRGB(...s.horizon); scene.fog.color.copy(FOG); scene.background = FOG.clone();
  hemi.color.set(W.hemi[0]); hemi.groundColor.set(W.hemi[1]); hemi.intensity = W.hemi[2];
  sunLight.color.set(W.dir[0]); sunLight.intensity = W.dir[1]; lantern.color.set(W.lantern);
  renderer.toneMappingExposure = W.exposure; if (bloomPass) bloomPass.strength = W.bloom;
  U.grid.value = W.grid; if (W.gridColor) { U.gridC1.value.set(...W.gridColor); U.gridC2.value.set(...W.gridColor2); }
  sheet.material = W.water === 'ice' ? M.ice : W.water === 'mirror' ? M.mirror : M.water;
  if (W.water === 'water') M.water.color.set(W.waterColor);
  M.rock.color.set(W.snowy ? 0xffffff : W.rockTint);
  if (W.trail) M.trail.color.setRGB(...W.trail);
  bike.rear.userData.rimGlow.visible = bike.front.userData.rimGlow.visible = W.grid > 0;
  for (const c of allChunks) {
    c.trees.geometry = TREE_GEOS[W.tree]; c.trees.material = W.tree === 'crystal' ? M.crystal : M.tree;
    c.rocks.geometry = W.snowy ? ROCK_GEOS.snowy : ROCK_GEOS.plain;
    if (c.cover) { c.cover.geometry = COVER_GEOS[W.tree]; c.cover.material = W.tree === 'crystal' ? M.crystal : M.cover; }
    const PR = PROPS[W.id], MO = MONUMENTS[W.id];
    c.props.geometry = PR.geo; c.propGlow.geometry = PR.glow || NOGEO; c.monument.geometry = MO.geo; c.monGlow.geometry = MO.glow || NOGEO;
    c.spin.geometry = MO.spin ? MO.spin.geo : NOGEO; if (MO.spin) c.spin.position.set(...MO.spin.pos);
  }
  M.wood.color.set(W.lodge[0]); M.roof.color.set(W.lodge[1]); // lodges are painted to suit each world
  M.propGlow.color.setScalar(W.id === 'neon' ? 0.9 : 2.4);
  U.sparkle.value = W.snowy ? 1 : (W.sparkle || 0);
  if (envRT) envRT.dispose();
  SKY.uClouds.value = 0.1; SKY.uMeteors.value = 0;
  envRT = pmrem.fromScene(envScene, 0.03); scene.environment = envRT.texture;
}
function enterWorld(world, viaWarp) {
  W = world; SAVE.world = W.id;
  if (!SAVE.worlds.includes(W.id)) { SAVE.worlds.push(W.id); if (SAVE.worlds.length >= WORLDS.length) unlockAch('worlds_all'); }
  save();
  for (const [k, c] of chunks) { freeChunk(c); pool.push(c); } chunks.clear(); displayed.clear();
  trails.clear();
  applyWorldLook();
  audio.setWorld(); resetAnimals(); resetAmbient();
  const [sx, sz] = findStart(W);
  home = { x: sx - 7, z: sz - 10 };
  const hh = H(home.x, home.z);
  homeObj.position.set(home.x, Math.max(hh, 0.5) - 0.15, home.z); homeObj.rotation.y = Math.atan2(home.x - sx, home.z - sz); // door faces the start point
  homeObj.visible = true;
  setLodgeState(homeObj, true, true);
  const saved = SAVE.pos[W.id];
  if (saved && Number.isFinite(saved.x) && !viaWarp && H(saved.x, saved.z) > 0.3 && H(saved.x, saved.z) < 30) { P.x = saved.x; P.z = saved.z; P.heading = saved.h || 0; }
  else { P.x = sx; P.z = sz; P.heading = Math.atan2(-(home.x - sx), -(home.z - sz)) + 0.6; }
  P.y = groundAt(P.x, P.z); P.speed = 0; P.vel.set(0, 0, 0); P.vy = 0; P.grounded = true;
  camInit = false;
  setWeather(W.weathers[0], true);
  streamChunks(P.x, P.z, 999);
}

function startWarp() {
  if (S.warping) return;
  S.warping = true; audio.warp();
  SAVE.warps++; unlockAch('warp1'); save();
  const locked = WORLDS.filter(w => !SAVE.worlds.includes(w.id));
  const next = locked.length ? locked[0] : pick(WORLDS.filter(w => w.id !== W.id));
  const el = $('warp'); el.classList.remove('out'); el.classList.add('in');
  setTimeout(() => {
    enterWorld(next, true);
    setTimeout(() => {
      el.classList.remove('in'); el.classList.add('out');
      S.warping = false;
      banner(`${next.icon} ${next.name}`, next.tagline, 4200);
      addXP(200, P.x, P.y + 1, P.z);
    }, 350);
  }, 1300);
}

// =====================================================================
// Input
// =====================================================================
const keys = {};
const input = { throttle: 0, steer: 0, sprint: false, jump: false, jumpHeld: false, turbo: false };
const touchHeld = { jump: false, turbo: false };
let orbitYaw = 0, orbitPitch = 0.4, camDist = 8.5, lastLook = 0;
addEventListener('keydown', e => {
  keys[e.code] = true;
  if (e.repeat) return;
  if (e.code === 'KeyM') { audio.init(); $('btnMusic').classList.toggle('off', !audio.toggleMusic()); return; }
  if (S.state === 'menu' && e.code === 'Enter') { begin(); return; }
  if (S.state === 'paused' && $('codex').classList.contains('show') && (e.code === 'Escape' || e.code === 'KeyK')) { closeCodex(); return; }
  if (S.state === 'paused' && (e.code === 'KeyP' || e.code === 'Escape')) { resume(); return; }
  if (S.state !== 'play') return;
  if (e.code === 'Space') { e.preventDefault(); input.jump = true; }
  if (e.code === 'KeyE' || e.code === 'KeyR') switchMount();
  if (e.code === 'KeyK') openCodex('play');
  if (e.code === 'KeyH') document.body.classList.toggle('photo');
  if (e.code === 'KeyP' || e.code === 'Escape') rest();
  if (e.code === 'KeyC') { orbitYaw = 0; orbitPitch = 0.4; }
  if (e.code === 'KeyN' || e.code === 'Tab') { e.preventDefault(); cycleNav(); }
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
});
addEventListener('keyup', e => { keys[e.code] = false; });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; rest(); });
document.addEventListener('visibilitychange', () => { if (document.hidden) rest(); });
let look = null;
canvas.addEventListener('pointerdown', e => { if (S.state !== 'play') return; look = { id: e.pointerId, x: e.clientX, y: e.clientY }; canvas.setPointerCapture(e.pointerId); });
canvas.addEventListener('pointermove', e => { if (!look || e.pointerId !== look.id) return; orbitYaw -= (e.clientX - look.x) * 0.006; orbitPitch = clamp(orbitPitch + (e.clientY - look.y) * 0.004, 0.05, 1.2); look.x = e.clientX; look.y = e.clientY; lastLook = time; });
canvas.addEventListener('pointerup', () => { look = null; });
canvas.addEventListener('pointercancel', () => { look = null; });
canvas.addEventListener('wheel', e => { camDist = clamp(camDist + e.deltaY * 0.01, 4, 18); }, { passive: true });
const stick = { id: null, ox: 0, oy: 0, x: 0, y: 0 };
const zone = $('stickZone'), knob = $('stickKnob');
zone.addEventListener('pointerdown', e => { e.preventDefault(); audio.init(); stick.id = e.pointerId; const r = $('stickBase').getBoundingClientRect(); stick.ox = r.left + r.width / 2; stick.oy = r.top + r.height / 2; zone.setPointerCapture(e.pointerId); moveStick(e); });
zone.addEventListener('pointermove', e => { if (e.pointerId === stick.id) moveStick(e); });
const endStick = e => { if (e.pointerId !== stick.id) return; stick.id = null; stick.x = stick.y = 0; knob.style.transform = ''; };
zone.addEventListener('pointerup', endStick); zone.addEventListener('pointercancel', endStick);
function moveStick(e) { let dx = e.clientX - stick.ox, dy = e.clientY - stick.oy; const l = Math.hypot(dx, dy), max = 50; if (l > max) { dx *= max / l; dy *= max / l; } stick.x = dx / max; stick.y = dy / max; knob.style.transform = `translate(${dx}px, ${dy}px)`; }
function holdButton(id, name, onDown) {
  const b = $(id);
  b.addEventListener('pointerdown', e => { e.preventDefault(); audio.init(); touchHeld[name] = true; if (onDown) onDown(); try { b.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ } });
  const up = () => { touchHeld[name] = false; };
  b.addEventListener('pointerup', up); b.addEventListener('pointercancel', up); b.addEventListener('lostpointercapture', up);
}
holdButton('btnJump', 'jump', () => { input.jump = true; });
holdButton('btnTurbo', 'turbo');
function readInput() {
  input.throttle = ((keys.KeyW || keys.ArrowUp) ? 1 : 0) - ((keys.KeyS || keys.ArrowDown) ? 1 : 0);
  input.steer = ((keys.KeyA || keys.ArrowLeft) ? 1 : 0) - ((keys.KeyD || keys.ArrowRight) ? 1 : 0);
  input.sprint = !!(keys.ShiftLeft || keys.ShiftRight);
  input.jumpHeld = !!keys.Space || touchHeld.jump;
  input.turbo = !!(keys.KeyF || keys.KeyQ) || touchHeld.turbo;
  if (stick.id !== null) { input.throttle = clamp(-stick.y * 1.15, -1, 1); input.steer = clamp(-stick.x * 1.1, -1, 1); input.sprint = Math.hypot(stick.x, stick.y) > 0.92 && stick.y < -0.5; }
  if (input.turbo && input.throttle <= 0 && stick.id === null) input.throttle = 1; // turbo alone also drives forward
}

// =====================================================================
// Simulation
// =====================================================================
const fwd = new THREE.Vector3(), tmpV = new THREE.Vector3();
let target = null, stepAcc = 0, jingleAcc = 0, tickAcc = 0, trailAcc = 0, breathT = 0, splashT = 0, distAcc = 0;
// Guide. By default it stays calm: just the small arrow in the goal pill, no markers for bugs.
// Pressing N picks a place on purpose, and only then do the on-screen marker and ground arrows appear.
const NAV_MODES = [
  { id: 'auto',  icon: '🧭', name: 'Calm' },
  { id: 'lodge', icon: '🏠', name: 'Triage Lodge' },
  { id: 'fuel',  icon: '⛽', name: 'Fuel' },
  { id: 'power', icon: '✨', name: 'Power-ups' },
  { id: 'card',  icon: '📇', name: 'Shrines & radio' },
  { id: 'warp',  icon: '🌀', name: 'Warp' },
  { id: 'home',  icon: '🏡', name: 'Home lab' },
];
let navIndex = 0;
function cycleNav() {
  navIndex = (navIndex + 1) % NAV_MODES.length;
  const m = NAV_MODES[navIndex];
  $('btnNav').textContent = m.icon;
  toast(`<small>Guide</small>${m.icon} ${esc(m.name)}${m.id === 'auto' ? ': markers off, just the little arrow' : ': markers on'}`, 1800);
}
// 0 = arrow only, 1 = one small quiet marker, 2 = full marker and ground arrows (you asked for it).
function guideLevel(t) { if (!t) return 0; if (NAV_MODES[navIndex].id !== 'auto') return 2; return t.kind === 'bug' ? 0 : 1; }
const TARGET_INFO = {
  lodge: { icon: '🏠', label: 'Triage Lodge', color: '#ffb070' }, home: { icon: '🏡', label: 'Home lab', color: '#9ff0ff' },
  bug: { icon: '🐞', label: 'Bug', color: '#ffd166' }, fuel: { icon: '⛽', label: 'Fuel', color: '#ff9a40' },
  power: { icon: '✨', label: 'Power-up', color: '#9affd8' }, card: { icon: '📇', label: 'Codex card', color: '#ffd38a' },
  warp: { icon: '🌀', label: 'Zero-Day Warp', color: '#d8b0ff' },
};
function nearestTarget() {
  let want = NAV_MODES[navIndex].id;
  if (want !== 'auto') return findTarget(want);
  // Calm mode follows your current goal. With a few reports in your pack it points to a lodge instead.
  const q = SAVE.quest, n = SAVE.reports.length;
  want = n >= 3 || (n && q && q.kind === 'lodge') ? 'lodge' : (q && q.kind && q.kind !== 'lodge' ? q.kind : 'bug');
  let best = findTarget(want);
  if (!best && want !== 'bug') best = findTarget('bug');
  if (!best && n) best = findTarget('lodge');
  return best;
}
function findTarget(want) {
  let best = null;
  const consider = (kind, x, z, y, color, label) => { const d = Math.hypot(x - P.x, z - P.z); if (!best || d < best.d) best = { kind, x, z, y, d, color: color || TARGET_INFO[kind].color, label }; };
  for (const c of chunks.values()) {
    const i = c.info; if (!i) continue;
    if (want === 'lodge' && i.lodge) consider('lodge', i.lodge.x, i.lodge.z, H(i.lodge.x, i.lodge.z) + 6);
    if (want === 'bug') for (const b of i.bugs) if (!b.taken) consider('bug', b.x, b.z, b.y, SEVERITY[b.s].css, `${SEVERITY[b.s].name} bug`);
    if (want === 'fuel') for (const f of i.fuels) if (!f.taken) consider('fuel', f.x, f.z, f.y);
    if (want === 'power' && i.orb) consider('power', i.orb.x, i.orb.z, i.orb.y, POWERS[i.orb.type].css, POWERS[i.orb.type].name);
    if (want === 'card') {
      if (i.shrine && !i.shrine.unlocked) consider('card', i.shrine.x, i.shrine.z, H(i.shrine.x, i.shrine.z) + 5, null, 'Hacker Shrine');
      if (i.tower && !i.tower.unlocked) consider('card', i.tower.x, i.tower.z, H(i.tower.x, i.tower.z) + 8, '#ff8ad0', 'Radio tower');
    }
    if (want === 'warp' && i.warp) consider('warp', i.warp.x, i.warp.z, i.warp.y);
  }
  // Your home lab always accepts reports, so it's a fallback (and a choice of its own).
  if (home && (want === 'home' || (want === 'lodge' && (!best || best.d > Math.hypot(home.x - P.x, home.z - P.z))))) {
    best = null; consider('home', home.x, home.z, H(home.x, home.z) + 6);
  }
  return best;
}
function simulate(dt) {
  readInput();
  const m = MOUNTS[P.mount], hHere = H(P.x, P.z);
  P.surface = hHere < 0.05 ? (W.water === 'water' ? 'water' : 'ice') : 'land';
  const boost = power.boost > 0 ? 1.6 : 1;
  // Turbo burns fuel for a big burst of speed.
  const wasTurbo = P.turbo;
  P.turbo = input.turbo && SAVE.fuel > 0 && input.throttle > 0;
  if (P.turbo) {
    SAVE.fuel = Math.max(0, SAVE.fuel - FUEL.drain * dt); hudDirty = true;
    if (!wasTurbo) { audio.turboStart(); unlockAch('turbo'); }
    if (SAVE.fuel === 0) toast('⛽ Out of fuel. Grab more cans (orange glow) to turbo again', 2600);
  } else if (input.turbo && wasTurbo === false && SAVE.fuel <= 0 && !S.noFuelHint) { S.noFuelHint = true; toast('⛽ Your tank is empty. Collect fuel cans to use turbo', 2600); }
  let targetSpeed = 0;
  if (P.turbo) targetSpeed = m.run * FUEL.turbo * boost;
  else if (input.throttle > 0) targetSpeed = (input.sprint ? m.run : m.walk) * input.throttle * boost;
  else if (input.throttle < 0) targetSpeed = -2.5;
  if (P.surface === 'water') targetSpeed *= 0.6;
  fwd.set(-Math.sin(P.heading), 0, -Math.cos(P.heading));
  const gHere = groundAt(P.x, P.z), grade = (groundAt(P.x + fwd.x * 1.5, P.z + fwd.z * 1.5) - gHere) / 1.5;
  if (targetSpeed > 0) targetSpeed *= clamp(1 - grade * (P.mount === 'bike' ? 1.6 : 1.0), 0.25, P.mount === 'bike' ? 1.5 : 1.15);
  if (P.mount === 'bike' && input.throttle === 0 && grade < -0.05) targetSpeed = Math.min(m.run, P.speed - grade * 6 * dt * 10);
  const slide = P.surface === 'ice' || (W.water === 'mirror' && P.surface !== 'land');
  const acc = P.turbo ? 2.6 : slide ? 0.6 : (targetSpeed === 0 ? 1.6 : m.accel);
  if (P.bumpT > 0) { P.bumpT -= dt; targetSpeed = Math.min(targetSpeed, 1); }
  P.speed += (targetSpeed - P.speed) * damp(acc, dt);
  const turnScale = P.mount === 'reindeer' ? clamp(0.45 + Math.abs(P.speed) / 6, 0.45, 1) : clamp(Math.abs(P.speed) / 4, 0.15, 1);
  P.steerIn = lerp(P.steerIn, input.steer, damp(stick.id !== null ? 20 : 9, dt)); // ease into turns instead of snapping
  P.heading += P.steerIn * m.turn * turnScale * dt * (P.speed < -0.1 ? -1 : 1) * (slide ? 0.7 : 1);
  P.steerVis = lerp(P.steerVis, input.steer, damp(8, dt));
  fwd.set(-Math.sin(P.heading), 0, -Math.cos(P.heading));
  P.vel.lerp(tmpV.copy(fwd).multiplyScalar(P.speed), damp(slide ? 0.9 : 9, dt));
  let nx = P.x + P.vel.x * dt, nz = P.z + P.vel.z * dt;
  const colliders = [];
  for (const c of nearbyChunks(nx, nz)) colliders.push(...c.colliders);
  if (home) colliders.push({ x: home.x, z: home.z, r: 3.4 });
  for (const col of colliders) {
    const dx = nx - col.x, dz = nz - col.z, rr = col.r + 0.55, d2 = dx * dx + dz * dz;
    if (d2 < rr * rr && d2 > 1e-6) {
      const d = Math.sqrt(d2); nx = col.x + dx / d * rr; nz = col.z + dz / d * rr;
      // Brushing past things just slides you around them; only a fast, head-on hit slows you a little.
      if (Math.abs(P.speed) > 7 && P.bumpT <= 0 && (dx * fwd.x + dz * fwd.z) / d < -0.6) { P.bumpT = 0.25; P.speed *= 0.7; audio.bump(); fx.burst(col.x, col.tree ? 3 : 1.2, col.z, W.tree === 'sakura' && col.tree ? 0xffc0d8 : W.tree === 'autumn' && col.tree ? 0xe8a040 : 0xffffff, col.tree ? 40 : 18, 2.5, 2.5, 1.4); }
    }
  }
  const hNew = groundAt(nx, nz);
  if (P.grounded && hNew - gHere > 1.2 * Math.max(0.3, Math.hypot(nx - P.x, nz - P.z)) + 0.15) { P.speed *= 0.5; nx = P.x; nz = P.z; }
  const moved = Math.hypot(nx - P.x, nz - P.z);
  P.x = nx; P.z = nz;
  distAcc += moved; SAVE.dist += moved;
  if (distAcc > 50) { distAcc = 0; if (SAVE.dist >= 5000) unlockAch('dist5k'); SAVE.pos[W.id] = { x: P.x, z: P.z, h: P.heading }; save(); }
  const ground = groundAt(P.x, P.z) - (P.surface === 'water' ? 0.35 : 0);
  const moon = power.moon > 0, gravity = moon ? 8.5 : W.lowG ? 12 : 22, jumpV = m.jump * (moon ? 1.25 : 1); // the moon world is always a bit floaty
  if (input.jump) {
    if (P.grounded) { P.vy = jumpV; P.grounded = false; P.airJumps = 0; audio.jump(); }
    else if (power.doublejump > 0 && P.airJumps < 1) { // second jump in mid-air
      P.vy = jumpV * 0.95; P.airJumps++; audio.jump(); audio.power(); unlockAch('airjump');
      fx.burst(P.x, P.y + 0.3, P.z, 0xff9a5c, 36, 3.5, 0.5, 0.8);
    }
  }
  input.jump = false;
  P.gliding = false;
  if (!P.grounded) {
    P.vy -= gravity * dt;
    if (power.glide > 0 && input.jumpHeld && P.vy < -1.4) { P.vy = lerp(P.vy, -1.4, damp(8, dt)); P.gliding = true; unlockAch('glider'); }
    P.y += P.vy * dt;
    if (P.y <= ground) { P.y = ground; P.grounded = true; P.vy = 0; P.airJumps = 0; audio.land(); fx.burst(P.x, ground + 0.1, P.z, P.surface === 'water' ? 0xcfe8ff : 0xe8f0ff, 14, 2, 3, 0.6); if (P.surface === 'water') addRipple(P.x, P.z); }
  } else if (ground < P.y - 0.6 && Math.abs(P.speed) > 6) { P.grounded = false; P.vy = 0; } else P.y = lerp(P.y, ground, damp(20, dt));
  const len = P.mount === 'bike' ? 0.6 : 0.8;
  const hf = groundAt(P.x + fwd.x * len, P.z + fwd.z * len), hb = groundAt(P.x - fwd.x * len, P.z - fwd.z * len);
  P.pitch = lerp(P.pitch, P.grounded ? Math.atan2(hf - hb, len * 2) : clamp(P.vy * 0.04, -0.3, 0.3), damp(8, dt));
  P.roll = lerp(P.roll, P.steerVis * clamp(P.speed / (P.mount === 'bike' ? 10 : 14), 0, 1) * (P.mount === 'bike' ? 0.35 : 0.12), damp(6, dt));
  rider.position.set(P.x, P.y, P.z); rider.rotation.set(P.pitch, P.heading, P.roll);

  interact(dt);

  // Footsteps, bells, ticks, trails, breath, splashes, speed lines
  const spd = Math.abs(P.speed);
  if (P.mount === 'reindeer') {
    P.gait += dt * (spd * 1.3 + 0.2);
    stepAcc += dt * spd * 0.55;
    if (stepAcc > 1 && P.grounded) {
      stepAcc = 0; audio.step(P.surface, spd > 9 ? 1.4 : 1);
      if (W.trail && P.surface === 'land') for (const s of [-1, 1]) trails.add(P.x + Math.cos(P.heading) * 0.22 * s, P.z - Math.sin(P.heading) * 0.22 * s, P.heading, 1, 1.4);
    }
    jingleAcc += dt * spd * 0.35; if (jingleAcc > 1) { jingleAcc = 0; audio.jingle(spd > 9 ? 1.5 : 1); }
    if (W.cold) { breathT -= dt; if (breathT <= 0) { breathT = rand(1.4, 2.2); reindeer.breath.getWorldPosition(tmpV); fx.burst(tmpV.x, tmpV.y, tmpV.z, 0xdfe8ff, 6, 0.4, -0.25, 1.3, [fwd.x * 0.6, 0.2, fwd.z * 0.6]); } }
  } else {
    P.crank += dt * (input.throttle > 0 ? spd * 1.6 : 0);
    tickAcc += dt * (input.throttle > 0 ? 0 : spd * 3); if (tickAcc > 1) { tickAcc = 0; audio.tick(); }
    trailAcc += moved; if (trailAcc > 0.35 && W.trail && P.surface === 'land' && P.grounded) { trailAcc = 0; trails.add(P.x, P.z, P.heading, 0.45, 2.6); }
  }
  if (P.surface === 'water' && spd > 1) { splashT -= dt; if (splashT <= 0) { splashT = 0.25; fx.burst(P.x, 0.2, P.z, 0xcfe8ff, 6, 1.5, 4, 0.5); if (Math.random() < 0.5) addRipple(P.x, P.z); } }
  if ((power.boost > 0 || P.turbo) && spd > 4) { for (let i = 0; i < (P.turbo ? 4 : 2); i++) fx.burst(P.x + fwd.x * 14 + rand(-6, 6), P.y + rand(0.5, 4), P.z + fwd.z * 14 + rand(-6, 6), P.turbo ? 0xffb060 : 0x7dff9a, 1, 0, 0, 0.5, [-fwd.x * 40, 0, -fwd.z * 40]); }
  if (P.turbo) { // flame trail
    const bx = P.x - fwd.x * (P.mount === 'bike' ? 0.9 : 1.4), bz = P.z - fwd.z * (P.mount === 'bike' ? 0.9 : 1.4);
    fx.burst(bx, P.y + 0.7, bz, pick([0xff7a20, 0xffb040, 0xff4a20]), 3, 0, -0.5, 0.45, [-fwd.x * 6 + rand(-0.6, 0.6), rand(0.3, 1.2), -fwd.z * 6 + rand(-0.6, 0.6)]);
  }
  if (P.gliding) fx.burst(P.x, P.y + 1.2, P.z, 0x9affd8, 2, 0, 0, 0.8, [-fwd.x * 2, 0.3, -fwd.z * 2]);
  if (power.moon > 0 && !P.grounded && Math.random() < 0.3) fx.burst(P.x, P.y + 0.5, P.z, 0xd0d8ff, 1, 0.5, 0, 1.2);
  // Snow, sand or dust kicked up behind you at speed.
  if (P.grounded && spd > 11 && P.surface === 'land' && Math.random() < dt * 28) {
    _col.setRGB(...W.ground.flat).multiplyScalar(W.snowy ? 0.9 : 0.45);
    fx.burst(P.x - fwd.x * 0.9 + rand(-0.3, 0.3), P.y + 0.15, P.z - fwd.z * 0.9 + rand(-0.3, 0.3), _col, 1, 0, 2, 0.7, [-fwd.x * 1.5, rand(0.8, 1.8), -fwd.z * 1.5]);
  }
  // "Bug sense": a soft chime, more frequent as you get closer. Nothing on screen.
  if (target && target.kind === 'bug' && target.d < 45) {
    const c = smooth(45, 5, target.d);
    senseAcc += dt * (0.45 + c * 2);
    if (senseAcc > 1) { senseAcc = 0; audio.sense(c); }
  } else senseAcc = 0.7;
  if (hintFrom >= 0 && SAVE.dist - hintFrom > 70) { hintFrom = -1; $('hint').classList.remove('show'); }
  audio.wind(spd);
  audio.turbo(P.turbo ? spd : 0);
}
let senseAcc = 0;

function interact(dt) {
  const mult = (power.double > 0 ? 2 : 1), luck = luckActive() ? 2 : 1;
  if (S.chainT > 0) { S.chainT -= dt; if (S.chainT <= 0) S.chain = 0; }
  let radio = 0;
  const pullR = power.magnet > 0 ? 30 : power.radar > 0 ? 16 : 0, pullK = damp(power.magnet > 0 ? 4 : 2.2, dt);
  for (const c of nearbyChunks(P.x, P.z)) {
    const i = c.info; if (!i) continue;
    for (const f of i.fuels) {
      if (f.taken) continue;
      let d = Math.hypot(f.x - P.x, f.z - P.z);
      if (power.magnet > 0 && d < pullR) { f.x = lerp(f.x, P.x, pullK); f.z = lerp(f.z, P.z, pullK); f.y = lerp(f.y, P.y + 1, pullK); f.obj.position.set(f.x - c.group.position.x, f.y, f.z - c.group.position.z); d = Math.hypot(f.x - P.x, f.z - P.z); }
      if (d < 2.8 && Math.abs(f.y - (P.y + 1)) < 3.5) {
        f.taken = true; f.obj.visible = false; sessionTaken.add(f.key);
        const before = SAVE.fuel; SAVE.fuel = Math.min(FUEL.max, SAVE.fuel + FUEL.perCan); SAVE.cans = (SAVE.cans || 0) + 1;
        audio.fuel(); fx.burst(f.x, f.y, f.z, 0xff9a40, 26, 2.5, 1, 0.9);
        floatText(f.x, f.y + 0.4, f.z, `⛽ +${Math.round(SAVE.fuel - before)}%`, '#ffb060');
        if (!S.fuelHint) { S.fuelHint = true; toast(`<small>⛽ Fuel</small>Hold <b>${isTouch ? '🔥' : 'F'}</b> to turbo. Each orange can adds a little more.`, 4000); }
        hudDirty = true; save();
      }
    }
    for (const b of i.bugs) {
      if (b.taken) continue;
      let d = Math.hypot(b.x - P.x, b.z - P.z);
      if (pullR > 0 && d < pullR) { // radar and magnet pull bugs in
        const k = pullK; b.x = lerp(b.x, P.x, k); b.z = lerp(b.z, P.z, k); b.y = lerp(b.y, P.y + 1.3, k);
        b.obj.position.set(b.x - c.group.position.x, b.y, b.z - c.group.position.z); d = Math.hypot(b.x - P.x, b.z - P.z);
      }
      if (d < 3 && Math.abs(b.y - (P.y + 1.3)) < 3.2) {
        b.taken = true; b.obj.visible = false; collectedSet.add(b.key);
        S.chain = S.chainT > 0 ? S.chain + 1 : 1; S.chainT = CHAIN_TIME;
        const sev = SEVERITY[b.s], cm = chainMult();
        const bounty = Math.round(Math.round(rand(sev.bounty[0], sev.bounty[1]) / 10) * 10 * cm * mult);
        SAVE.reports.push({ s: b.s, b: bounty }); SAVE.bugs[sev.id] = (SAVE.bugs[sev.id] || 0) + 1;
        if (S.chain > SAVE.bestChain) SAVE.bestChain = S.chain;
        audio.bug(b.s, S.chain);
        fx.burst(b.x, b.y, b.z, sev.color, 30 + b.s * 20, 3 + b.s, 1, 1.2);
        floatText(b.x, b.y + 0.4, b.z, `<b>${sev.name}</b> ${money(bounty)}`, sev.css);
        addXP(Math.round(sev.xp * cm * mult * luck), b.x, b.y - 0.2, b.z);
        unlockAch('first_bug'); if (b.s === 3) unlockAch('critical');
        if (sev.id === 'zeroday') { unlockAch('zeroday'); banner('Zero-Day found!', `the rarest bug of all · ${money(bounty)}`, 3600); for (let k = 0; k < 4; k++) fx.burst(b.x, b.y + k * 0.6, b.z, pick([0xb070ff, 0xffffff, 0xff7ab8]), 40, 6, 1, 1.8); }
        if (S.chain >= 5) unlockAch('chain5'); if (S.chain >= 10) unlockAch('chain10');
        hudDirty = true; save();
      }
    }
    if (i.lodge && SAVE.reports.length && Math.hypot(i.lodge.x - P.x, i.lodge.z - P.z) < 8) {
      const fresh = !i.lodge.done; i.lodge.done = true; lodgeSet.add(i.lodge.key); setLodgeState(c.lodge, true, false); submitReports(i.lodge.x, i.lodge.z, false, fresh);
    }
    if (i.shrine && Math.hypot(i.shrine.x - P.x, i.shrine.z - P.z) < 5.5 && !i.shrine.seen) {
      i.shrine.seen = true; const wasNew = !codexSet.has(i.shrine.hacker.handle);
      unlockHacker(i.shrine.hacker, i.shrine.key, i.shrine.x, 3, i.shrine.z, 100);
      i.shrine.unlocked = true; setShrineState(c.shrine, i.shrine.hacker, true);
      if (wasNew) fx.burst(i.shrine.x, 3, i.shrine.z, 0xffd38a, 80, 4, 0.5, 1.8);
    }
    if (i.tower) {
      const d = Math.hypot(i.tower.x - P.x, i.tower.z - P.z);
      radio = Math.max(radio, smooth(30, 8, d));
      if (d < 7.5 && !i.tower.seen) {
        i.tower.seen = true; const wasNew = !codexSet.has(i.tower.hacker.handle);
        unlockHacker(i.tower.hacker, i.tower.key, i.tower.x, 6, i.tower.z, 120); unlockAch('podcast');
        i.tower.unlocked = true; setTowerState(c.tower, i.tower.hacker, true);
        if (wasNew) fx.burst(i.tower.x, 17, i.tower.z, 0xff8ad0, 90, 5, 0.5, 2);
      }
    }
    if (i.orb && Math.hypot(i.orb.x - P.x, i.orb.z - P.z) < 3) {
      const t = i.orb.type, p = POWERS[t];
      power[t] = p.dur; sessionTaken.add(i.orb.key); c.orb.visible = false; SAVE.orbs = (SAVE.orbs || 0) + 1;
      fx.burst(i.orb.x, i.orb.y, i.orb.z, p.color, 60, 4, 0.5, 1.2); audio.power();
      toast(`<small>${p.icon} ${esc(p.name)}</small>${esc(p.desc)}`, 3000);
      if (!SAVE.powersUsed.includes(t)) { SAVE.powersUsed.push(t); if (SAVE.powersUsed.length >= 5) unlockAch('powers3'); save(); }
      i.orb = null;
    }
    if (i.warp && Math.hypot(i.warp.x - P.x, i.warp.z - P.z) < 2.8) { sessionTaken.add(i.warp.key); c.warp.visible = false; i.warp = null; startWarp(); }
  }
  if (home && SAVE.reports.length && Math.hypot(home.x - P.x, home.z - P.z) < 8) submitReports(home.x, home.z, true);
  audio.radio(radio);
}
function submitReports(x, z, atHome, fresh) { // a lodge you have not visited before adds a small welcome bonus
  const total = Math.round(SAVE.reports.reduce((a, r) => a + r.b, 0) * (fresh ? 1.1 : 1)), n = SAVE.reports.length;
  SAVE.bounty += total; SAVE.submitted += n; SAVE.reports = [];
  audio.submit();
  fx.burst(x, 2.5, z, 0x7dff9a, 90, 4.5, 1, 1.8);
  floatText(x, 4, z, `<b>Triaged ✓</b> +${money(total)}`, '#7dff9a');
  addXP(15 * n + Math.round(total / 400), x, 3, z);
  const lines = ['Triager: "Thanks for the clear write-up!" ✅', 'Report resolved. The program team says thank you 💚', 'Bounty awarded. Nice find!', 'Valid & resolved. The internet is a little safer tonight 🌙', 'Triaged within minutes. Lovely clear steps to reproduce.'];
  toast(`<small>${atHome ? 'Submitted from your home lab' : 'Triage Lodge'}</small>${n} report${n > 1 ? 's' : ''} · <b>${money(total)}</b>${fresh ? " · new lodge +10%" : ""}<br>${pick(lines)}`, 4200);
  unlockAch('first_report'); if (SAVE.bounty >= 10000) unlockAch('bounty10k'); if (SAVE.bounty >= 100000) unlockAch('bounty100k');
  hudDirty = true; save();
}

// ---------- Animation ----------
const pose = { hipX: 0, hipZ: 0, shX: 0, pelX: 0 };
function animate(dt) {
  const spd = Math.abs(P.speed);
  if (P.mount === 'reindeer') {
    const g = P.gait, gallop = spd > 8.5, amp = clamp(spd / 6, 0, 1) * (gallop ? 0.75 : 0.5);
    const offs = gallop ? [0, 0.35, Math.PI, Math.PI + 0.35] : [0, Math.PI, Math.PI, 0];
    reindeer.legs.forEach((l, i) => {
      const ph = g + offs[i];
      l.hip.rotation.x = Math.sin(ph) * amp * (P.grounded ? 1 : 0.2) + (P.grounded ? 0 : (l.front ? -0.7 : 0.7));
      l.knee.rotation.x = (l.front ? 1 : -1) * Math.max(0, -Math.cos(ph)) * amp * 1.3 + (P.grounded ? 0 : (l.front ? 1.2 : -0.6));
    });
    reindeer.body.position.y = 1.25 + Math.abs(Math.sin(g)) * (gallop ? 0.1 : 0.04) * clamp(spd / 5, 0, 1);
    reindeer.body.rotation.x = gallop ? Math.sin(g) * 0.06 : 0;
    reindeer.neck.rotation.x = -0.65 + Math.sin(g * 2) * 0.04 * clamp(spd / 5, 0, 1) + (spd < 0.3 ? Math.sin(time * 0.5) * 0.08 : 0);
    reindeer.head.rotation.y = P.steerVis * 0.3 + (spd < 0.3 ? Math.sin(time * 0.3) * 0.25 : 0);
    reindeer.tail.rotation.z = Math.sin(time * 3) * 0.3;
    avatar.root.position.set(0, reindeer.body.position.y + 0.42 - 0.78 + 0.06, 0.05);
    pose.hipX = 0.4; pose.hipZ = 0.5; pose.shX = 0.85; pose.pelX = gallop ? -0.08 + Math.sin(g) * 0.05 : -0.04;
    const k = damp(10, dt);
    avatar.hipL.rotation.x = lerp(avatar.hipL.rotation.x, pose.hipX, k); avatar.hipR.rotation.x = lerp(avatar.hipR.rotation.x, pose.hipX, k);
  } else {
    const c = P.crank;
    bike.crankG.rotation.x = -c; bike.rear.rotation.x -= P.speed * dt / 0.4; bike.front.rotation.x -= P.speed * dt / 0.4;
    bike.steer.rotation.y = P.steerVis * 0.35;
    avatar.root.position.set(0, 1.02 - 0.78 + 0.08, 0.2);
    pose.hipZ = 0.05; pose.shX = 1.25; pose.pelX = -0.35;
    avatar.hipL.rotation.x = 0.55 + Math.sin(c) * 0.38; avatar.hipR.rotation.x = 0.55 + Math.sin(c + Math.PI) * 0.38;
  }
  const k = damp(10, dt);
  avatar.hipL.rotation.z = lerp(avatar.hipL.rotation.z, -pose.hipZ, k); avatar.hipR.rotation.z = lerp(avatar.hipR.rotation.z, pose.hipZ, k);
  const air = !P.grounded ? 1.4 : 0;
  avatar.shL.rotation.x = lerp(avatar.shL.rotation.x, pose.shX + air * 0.6, k); avatar.shR.rotation.x = lerp(avatar.shR.rotation.x, pose.shX + air, k);
  // Arms spread wide while gliding, tucked in for turbo.
  const armOut = P.gliding ? 1.3 : 0;
  avatar.shL.rotation.z = lerp(avatar.shL.rotation.z, -0.18 - armOut, k); avatar.shR.rotation.z = lerp(avatar.shR.rotation.z, 0.18 + armOut, k);
  if (P.turbo) avatar.pelvis.rotation.x = lerp(avatar.pelvis.rotation.x, pose.pelX - 0.3, k);
  avatar.pelvis.rotation.x = lerp(avatar.pelvis.rotation.x, pose.pelX, k);
  avatar.head.rotation.y = lerp(avatar.head.rotation.y, P.steerVis * 0.35 + (spd < 0.3 ? Math.sin(time * 0.4) * 0.4 : 0), k);
  nameplateT -= dt; nameplate.visible = S.state === 'play' && nameplateT > 0 && !document.body.classList.contains('photo');

  for (const c of chunks.values()) {
    const i = c.info; if (!i) continue;
    for (const b of i.bugs) if (!b.taken) {
      const u = b.obj.userData;
      u.beam.material.opacity = (0.1 + b.s * 0.05) * smooth(6, 34, Math.hypot(b.x - P.x, b.z - P.z)) * (0.85 + 0.15 * Math.sin(time * 1.7 + b.ph)); // soft lights that fade as you get close
      u.body.position.y = Math.sin(time * 2 + b.ph) * 0.15; u.body.rotation.y = time * 0.6 + b.ph;
      for (const w of u.wings) w.w.rotation.z = w.s * (0.3 + Math.sin(time * 28 + b.ph) * 0.5);
      u.halo.material.opacity = 0.45 + Math.sin(time * 3 + b.ph) * 0.15;
    }
    if (i.shrine) { const u = c.shrine.userData; u.ring.rotation.z = time * 0.8; u.ring.position.y = 2.4 + Math.sin(time * 1.3) * 0.5; u.gem.rotation.y = time * 1.5; u.gem.position.y = 4.2 + Math.sin(time * 2) * 0.12; }
    if (i.tower) {
      const u = c.tower.userData, blink = (Math.sin(time * 3) > 0.6) ? 1 : 0.25;
      u.light.material.color.setRGB(4 * blink, 0.4 * blink, 0.5 * blink); u.halo.material.opacity = 0.8 * blink;
      u.rings.forEach((r, k) => { const t = (time * 0.4 + k / 3) % 1; r.scale.setScalar(1 + t * 9); r.material.opacity = (1 - t) * 0.55; });
    }
    if (i.orb) { const u = c.orb.userData; u.beam.material.opacity = 0.2 * smooth(4, 24, Math.hypot(i.orb.x - P.x, i.orb.z - P.z)); u.core.rotation.y = time * 1.5; u.core.rotation.x = time; c.orb.position.y = i.orb.y + Math.sin(time * 2) * 0.15; }
    if (i.warp) { const u = c.warp.userData; u.knot.rotation.y = time * 1.2; u.knot.rotation.x = time * 0.7; u.ring.rotation.x = time * 0.9; u.ring.rotation.y = time * 0.5; }
    if (c.landmark.visible) c.landmark.userData.star.rotation.y = time * 0.8;
    if (c.monument.visible && c.spin.visible) c.spin.rotation.z = time * 0.5;
    for (const f of i.fuels) if (!f.taken) { const u = f.obj.userData; u.spin.rotation.y = time * 1.8 + f.x; u.spin.position.y = Math.sin(time * 2.5 + f.z) * 0.12; u.ring.scale.setScalar(1 + (time * 0.8 + f.x) % 1 * 0.6); u.ring.material.opacity = 0.7 * (1 - (time * 0.8 + f.x) % 1); }
    if (i.lodge) {
      if (Math.abs(i.lodge.x - P.x) < 220 && Math.abs(i.lodge.z - P.z) < 220) animateSmoke(c.lodge);
      lodgeBeam(c.lodge, i.lodge.x, i.lodge.z);
    }
  }
  if (home) { animateSmoke(homeObj); lodgeBeam(homeObj, home.x, home.z); }
}
// Lodge beams glow brighter while you carry reports, and fade when you're right next to them.
function lodgeBeam(cabin, x, z) {
  const u = cabin.userData; if (!u.beam.visible) return;
  const carrying = SAVE.reports.length > 0, d = Math.hypot(x - P.x, z - P.z);
  u.beam.material.opacity = (carrying ? 0.5 + Math.sin(time * 2) * 0.08 : 0.13) * smooth(8, 35, d);
  u.beam.scale.x = u.beam.scale.z = carrying ? 1.8 : 1.2;
}
function animateSmoke(cabin) {
  cabin.userData.smoke.forEach((s, i) => {
    const t = (time * 0.25 + i / 6) % 1;
    s.position.set(1.4 + Math.sin(t * 4 + i) * 0.4 + t * 1.5 * weather.wind * 2, 6.3 + t * 6, 0.6 + t * 0.8);
    s.scale.setScalar(0.6 + t * 2.8); s.material.opacity = Math.sin(t * Math.PI) * 0.35;
  });
}

// =====================================================================
// Animals: each world has its own gentle wildlife
// =====================================================================
const CRITTERS = {
  fox:    { body: [0.9, 0.36, 0.32], leg: 0.32, head: 0.2, snout: 0.16, ears: 'point', tail: 'bushy', speed: 2.2, size: 1.3 },
  hare:   { body: [0.5, 0.3, 0.28], leg: 0.14, head: 0.15, snout: 0.05, ears: 'long', tail: 'puff', speed: 2.4, hop: true, size: 1.6 },
  deer:   { body: [1.25, 0.5, 0.4], leg: 0.78, head: 0.2, snout: 0.2, ears: 'point', tail: 'puff', neck: 0.5, speed: 1.9 },
  camel:  { body: [1.8, 0.7, 0.55], leg: 1.15, head: 0.25, snout: 0.26, ears: 'round', tail: 'thin', neck: 0.95, hump: true, speed: 1.3 },
  panda:  { body: [1.05, 0.7, 0.7], leg: 0.3, head: 0.36, snout: 0.1, ears: 'round', tail: 'puff', speed: 0.8 },
  turtle: { body: [0.8, 0.32, 0.6], leg: 0.1, head: 0.14, snout: 0.04, ears: 'none', tail: 'none', shell: true, speed: 0.45, size: 1.4 },
};
// [shape, main colour, second colour, name, icon, options]
const WORLD_ANIMALS = {
  tundra: [['fox', 0xf2f5ff, 0xffffff, 'Arctic fox', '🦊'], ['hare', 0xffffff, 0xf0f4ff, 'Snow hare', '🐇'], ['deer', 0x8a6a4a, 0xe6d6bd, 'Caribou', '🦌', { antlers: true, socks: 0x3a2a20 }]],
  sakura: [['deer', 0xb07a4a, 0xf0e0c8, 'Sika deer', '🦌', { spots: true, socks: 0x4a3020 }], ['hare', 0xc8b098, 0xf4ece0, 'Rabbit', '🐇']],
  dunes:  [['camel', 0xc8a060, 0xe0c088, 'Camel', '🐫'], ['fox', 0xe8c890, 0xfff0d0, 'Fennec fox', '🦊', { ear: 2 }]],
  neon:   [['fox', 0x5a78c8, 0x8a6ac8, 'Glitch cat', '🐈', { glow: true }], ['hare', 0x8a6ac8, 0x5a78c8, 'Pixel bunny', '🐇', { glow: true }]],
  autumn: [['fox', 0xd0602a, 0xfff0e0, 'Red fox', '🦊', { socks: 0x2a1a14 }], ['deer', 0x8a5a34, 0xe6d0b0, 'Stag', '🦌', { antlers: true, socks: 0x3a2418 }], ['hare', 0x9a7a5a, 0xe8d8c0, 'Hare', '🐇']],
  lagoon: [['turtle', 0x4a7a4a, 0x7a9a4a, 'Sea turtle', '🐢'], ['panda', 0x9a7048, 0xb08a60, 'Capybara', '🦫', { plain: true }]],
  bamboo: [['panda', 0xffffff, 0x1c1c20, 'Panda', '🐼'], ['deer', 0xa07848, 0xe8d8c0, 'Muntjac deer', '🦌', { socks: 0x3a2a20 }]],
  moon:   [['hare', 0xdfe8ff, 0xa0c0ff, 'Moon rabbit', '🐇', { glow: true }]],
  meadow: [['hare', 0xb89878, 0xf4ece0, 'Cottontail', '🐇'], ['deer', 0xb08050, 0xf0e0c8, 'Fawn', '🦌', { spots: true, socks: 0x4a3020 }], ['fox', 0xd8703a, 0xfff0e0, 'Fox', '🦊', { socks: 0x2a1a14 }]],
};
const EYE_GLINT = new THREE.MeshBasicMaterial({ color: 0xffffff });
function makeCritter(kind, c1, c2, opts = {}) {
  const K = CRITTERS[kind], [L, Hh, Wd] = K.body;
  const mk = col => opts.glow ? new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(0.9) }) : new THREE.MeshStandardMaterial({ color: col, roughness: 0.95 });
  const m1 = mk(c1), m2 = mk(c2), panda = kind === 'panda' && !opts.plain, limb = panda ? m2 : m1;
  const sock = opts.socks ? mk(opts.socks) : null;
  const root = new THREE.Group(), body = new THREE.Group(); body.position.y = K.leg + Hh * 0.5; root.add(body);
  const add = (parent, geo, mat, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); parent.add(m); return m; };
  const ball = (seg = 14) => new THREE.SphereGeometry(0.5, seg, Math.max(8, seg - 4));
  add(body, ball(18), m1).scale.set(Wd, Hh, L);
  add(body, ball(), m1, 0, Hh * 0.05, -L * 0.3).scale.set(Wd * 0.95, Hh * 0.98, L * 0.5); // chest
  if (!panda) add(body, ball(), m2, 0, -Hh * 0.14, 0).scale.set(Wd * 0.8, Hh * 0.75, L * 0.85);
  if (panda) add(body, ball(), m2, 0, Hh * 0.05, -L * 0.28).scale.set(Wd * 1.02, Hh * 1.0, L * 0.3); // dark band over the shoulders
  if (K.hump) add(body, ball(), m1, 0, Hh * 0.5, L * 0.05).scale.set(Wd * 0.7, Hh * 0.8, L * 0.4);
  if (K.shell) add(body, new THREE.SphereGeometry(0.5, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), m2, 0, -Hh * 0.1, 0).scale.set(Wd * 1.15, Hh * 1.7, L * 1.05);
  if (opts.spots) for (let i = 0; i < 9; i++) add(body, new THREE.SphereGeometry(0.035, 6, 4), m2, (i % 3 - 1) * Wd * 0.26, Hh * (0.42 - Math.abs(i % 3 - 1) * 0.12), (i / 9 - 0.45) * L * 0.7);
  // Forward is -z, like the rider.
  const nl = K.neck || 0.1, neck = new THREE.Group(); neck.position.set(0, Hh * 0.18, -L * 0.42); body.add(neck);
  if (K.neck) { const n = add(neck, new THREE.CylinderGeometry(K.head * 0.45, K.head * 0.62, nl * 1.1, 10), m1, 0, nl * 0.45, -nl * 0.2); n.rotation.x = -0.4; }
  const head = new THREE.Group(); head.position.set(0, nl * 0.9 + K.head * 0.3, -nl * 0.4 - K.head * 0.35); neck.add(head);
  add(head, new THREE.SphereGeometry(K.head, 16, 12), m1);
  add(head, new THREE.SphereGeometry(K.head * 0.55, 12, 8), panda ? m1 : m2, 0, -K.head * 0.2, -K.head * 0.6 - K.snout * 0.4).scale.z = 1 + K.snout / (K.head * 0.6);
  add(head, new THREE.SphereGeometry(K.head * 0.13, 8, 6), M.dark, 0, -K.head * 0.12, -K.head * 0.95 - K.snout);
  for (const s of [-1, 1]) {
    if (panda) add(head, new THREE.SphereGeometry(K.head * 0.22, 8, 6), m2, s * K.head * 0.42, K.head * 0.18, -K.head * 0.74).scale.z = 0.4;
    add(head, new THREE.SphereGeometry(K.head * 0.11, 8, 6), M.dark, s * K.head * 0.45, K.head * 0.22, -K.head * 0.82);
    add(head, new THREE.SphereGeometry(K.head * 0.035, 6, 4), EYE_GLINT, s * K.head * 0.43, K.head * 0.27, -K.head * 0.91);
    if (K.ears === 'point') {
      const eh = K.head * 0.75 * (opts.ear || 1), ey = K.head * (0.8 + 0.3 * ((opts.ear || 1) - 1));
      add(head, new THREE.ConeGeometry(K.head * 0.32, eh, 8), m1, s * K.head * 0.5, ey, 0.02).rotation.z = -s * 0.25;
      add(head, new THREE.ConeGeometry(K.head * 0.18, eh * 0.7, 8), m2, s * K.head * 0.5, ey - eh * 0.08, -K.head * 0.09).rotation.z = -s * 0.25; // pale inner ear
    } else if (K.ears === 'long') {
      add(head, new THREE.CapsuleGeometry(K.head * 0.17, K.head * 1.2, 4, 10), m1, s * K.head * 0.35, K.head * 1.35, 0.03).rotation.z = -s * 0.15;
    } else if (K.ears === 'round') add(head, new THREE.SphereGeometry(K.head * 0.3, 10, 8), limb, s * K.head * 0.72, K.head * 0.72, 0);
    if (opts.antlers) {
      head.add(tubeBetween([[s * 0.07, K.head * 0.8, 0.03], [s * 0.2, K.head + 0.25, 0.08], [s * 0.34, K.head + 0.5, 0.02], [s * 0.36, K.head + 0.72, -0.1]], 0.022, M.antler));
      head.add(tubeBetween([[s * 0.2, K.head + 0.25, 0.08], [s * 0.2, K.head + 0.36, -0.1], [s * 0.17, K.head + 0.44, -0.18]], 0.016, M.antler));
      head.add(tubeBetween([[s * 0.33, K.head + 0.48, 0.02], [s * 0.44, K.head + 0.6, 0.1]], 0.014, M.antler));
    }
  }
  let tail = null;
  if (K.tail === 'bushy') { tail = add(body, ball(12), m1, 0, Hh * 0.1, L * 0.7); tail.scale.set(Wd * 0.55, Wd * 0.55, L * 0.75); tail.rotation.x = 0.45; add(tail, new THREE.SphereGeometry(0.3, 10, 8), m2, 0, 0, 0.3); }
  else if (K.tail === 'puff') tail = add(body, new THREE.SphereGeometry(Hh * 0.26, 10, 8), panda ? m1 : m2, 0, Hh * 0.12, L * 0.5);
  else if (K.tail === 'thin') tail = add(body, new THREE.CylinderGeometry(0.03, 0.02, Hh, 5), m1, 0, -Hh * 0.2, L * 0.5);
  const legs = [], legLen = K.leg + Hh * 0.25, lw = Wd * 0.13;
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    const hip = new THREE.Group(); hip.position.set(sx * Wd * (K.shell ? 0.5 : 0.3), -Hh * 0.25, sz * L * 0.3); body.add(hip);
    add(hip, new THREE.CylinderGeometry(lw, lw * 0.8, legLen, 8), limb, 0, -legLen / 2, 0);
    if (sock) add(hip, new THREE.CylinderGeometry(lw * 0.9, lw * 0.85, legLen * 0.45, 8), sock, 0, -legLen * 0.78, 0);
    legs.push(hip);
  }
  root.scale.setScalar(K.size || 1);
  root.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return { root, body, head, neck, legs, tail, K };
}
const MAX_ANIMALS = Q.cover ? 9 : 5;
const animals = [];
function resetAnimals() {
  for (const a of animals) scene.remove(a.obj.root);
  animals.length = 0;
  const defs = WORLD_ANIMALS[W.id] || [];
  if (!defs.length) return;
  for (let i = 0; i < MAX_ANIMALS; i++) {
    const [kind, c1, c2, name, icon, opts] = defs[i % defs.length];
    const obj = makeCritter(kind, c1, c2, opts); obj.root.visible = false; scene.add(obj.root);
    animals.push({ obj, name, icon, active: false, x: 0, z: 0, heading: 0, goal: 0, speed: 0, t: 0, mode: 'idle', gait: Math.random() * 6, met: false, graze: 0 });
  }
}
let animalSpawnT = 0;
function spawnAnimal() {
  const a = animals.find(x => !x.active); if (!a) return;
  for (let tries = 0; tries < 4; tries++) {
    const ang = Math.random() * Math.PI * 2, r = rand(38, 85), x = P.x + Math.cos(ang) * r, z = P.z + Math.sin(ang) * r, h = H(x, z);
    if (h < 0.8 || h > 30 || Math.abs(H(x + 2, z) - h) + Math.abs(H(x, z + 2) - h) > 1.6) continue;
    if (home && Math.hypot(home.x - x, home.z - z) < 12) continue;
    Object.assign(a, { active: true, x, z, heading: Math.random() * 6.28, speed: 0, t: rand(1, 4), mode: 'idle', met: false });
    a.goal = a.heading; a.obj.root.visible = true;
    return;
  }
}
function meetAnimal(a, y) {
  floatText(a.x, y + 1.4, a.z, `${a.icon} ${esc(a.name)}`, '#ffe9a8');
  fx.burst(a.x, y + 1, a.z, 0xff9ac0, 14, 1.6, -0.6, 1.3);
  audio.chirp();
  if (!SAVE.animals.includes(a.name)) {
    SAVE.animals.push(a.name); addXP(25, a.x, y + 0.6, a.z); save();
    toast(`<small>🐾 New friend</small>${a.icon} ${esc(a.name)}`, 2600);
    if (SAVE.animals.length >= 5) unlockAch('friends');
  }
}
function updateAnimals(dt) {
  animalSpawnT -= dt; if (animalSpawnT <= 0) { animalSpawnT = 0.7; spawnAnimal(); }
  for (const a of animals) {
    if (!a.active) continue;
    const dx = a.x - P.x, dz = a.z - P.z, d = Math.hypot(dx, dz), K = a.obj.K, o = a.obj;
    if (d > 130) { a.active = false; o.root.visible = false; continue; }
    a.t -= dt;
    // Animals stroll and graze. Rush at them and they trot away; come slowly and they let you say hello.
    if (d < 10 && Math.abs(P.speed) > 11 && a.mode !== 'flee') { a.mode = 'flee'; a.t = 3; a.goal = Math.atan2(-dx, -dz); }
    else if (a.t <= 0) {
      if (a.mode === 'walk') { a.mode = 'idle'; a.t = rand(2, 6); }
      else { a.mode = 'walk'; a.t = rand(3, 8); a.goal = a.heading + rand(-1.5, 1.5); }
    }
    const want = a.mode === 'flee' ? K.speed * 3 : a.mode === 'walk' ? K.speed : 0;
    a.heading += wrapAngle(a.goal - a.heading) * damp(3, dt);
    a.speed = lerp(a.speed, want, damp(3, dt));
    const fx2 = -Math.sin(a.heading), fz2 = -Math.cos(a.heading), nx = a.x + fx2 * a.speed * dt, nz = a.z + fz2 * a.speed * dt;
    const ahead = H(nx + fx2 * 2.5, nz + fz2 * 2.5), here = H(a.x, a.z);
    if (ahead < 0.4 || Math.abs(ahead - here) > 2.2) a.goal = a.heading + 2.4; // turn back from water and cliffs
    else if (Math.hypot(nx - P.x, nz - P.z) > 1.6) { a.x = nx; a.z = nz; }
    a.gait += dt * a.speed * 3.2 / (K.leg + 0.3);
    const moving = clamp(a.speed / K.speed, 0, 1.3), y = groundAt(a.x, a.z);
    o.root.position.set(a.x, y + (K.hop ? Math.abs(Math.sin(a.gait * 0.5)) * 0.28 * Math.min(1, moving) : 0), a.z);
    o.root.rotation.y = a.heading;
    o.legs.forEach((l, i) => { l.rotation.x = Math.sin(a.gait + (i === 0 || i === 3 ? 0 : Math.PI)) * 0.5 * moving; });
    a.graze = lerp(a.graze, a.mode === 'idle' && d > 7 && !K.shell ? 1 : 0, damp(2, dt));
    o.neck.rotation.x = a.graze * (K.neck ? 1.0 : 0.5) + Math.sin(a.gait * 2) * 0.03 * moving;
    o.head.rotation.y = a.mode === 'idle' && d < 7 ? clamp(wrapAngle(Math.atan2(dx, dz) - a.heading), -1, 1) : 0; // looks at you when you're close
    if (o.tail) o.tail.rotation.y = Math.sin(time * 3 + a.gait) * 0.25;
    if (!a.met && d < 4.5 && Math.abs(P.speed) < 11) { a.met = true; meetAnimal(a, y); }
  }
  updateAmbient(dt);
}

// =====================================================================
// Ambient life: birds, butterflies, things on the water and in the sky. Different in every world.
// =====================================================================
const birdMat = new THREE.MeshBasicMaterial({ color: 0x14141c, side: THREE.DoubleSide });
const WING = new THREE.BufferGeometry();
WING.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, -0.22, 0, 0, 0.26, 1.0, 0, 0.12, 0, 0, 0.26, 0.55, 0, 0.42, 1.0, 0, 0.12]), 3));
const BIRD_BODY = new THREE.OctahedronGeometry(0.5, 0).scale(0.2, 0.16, 1.1);
const birds = Array.from({ length: 9 }, (_, i) => {
  const g = new THREE.Group(), l = new THREE.Mesh(WING, birdMat), r = new THREE.Mesh(WING, birdMat); r.scale.x = -1;
  g.add(new THREE.Mesh(BIRD_BODY, birdMat), l, r); g.userData = { l, r, ph: i * 1.7, rad: 6 + (i % 3) * 4, hgt: (i % 4) * 1.2 }; g.visible = false; scene.add(g); return g;
});
const FLY_WING = new THREE.PlaneGeometry(0.17, 0.22).translate(0.085, 0, 0).rotateX(-Math.PI / 2);
const flies = Array.from({ length: 12 }, (_, i) => {
  const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide }), g = new THREE.Group(), l = new THREE.Mesh(FLY_WING, mat), r = new THREE.Mesh(FLY_WING, mat); r.scale.x = -1;
  g.add(l, r); g.userData = { l, r, mat, ph: i * 2.3, x: 0, z: 0, placed: false }; g.visible = false; scene.add(g); return g;
});
const STD = c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 });
function makeFloater(type) { // things that drift on the water
  const g = new THREE.Group(), add = (geo, mat, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); g.add(m); return m; };
  if (type === 'boat') {
    add(new THREE.CylinderGeometry(0.55, 0.3, 2.6, 8).rotateX(Math.PI / 2), STD(0x8a5a3a), 0, 0.15, 0).scale.y = 0.6;
    add(new THREE.CylinderGeometry(0.04, 0.04, 2.8, 6), STD(0x4a3424), 0, 1.6, -0.2);
    add(new THREE.ConeGeometry(0.95, 2.3, 3).scale(0.04, 1, 1), STD(0xfaf6ee), 0, 1.8, 0.35);
  } else if (type === 'lantern') {
    add(new THREE.BoxGeometry(0.55, 0.06, 0.55), STD(0x6a4a30), 0, 0.03, 0);
    add(new THREE.BoxGeometry(0.36, 0.34, 0.36), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffb060).multiplyScalar(2.2) }), 0, 0.24, 0);
  } else { // duck
    const white = type === 'swan';
    add(new THREE.SphereGeometry(0.5, 12, 8), STD(white ? 0xffffff : 0x8a6a48), 0, 0.14, 0).scale.set(0.5, 0.42, 0.85);
    add(new THREE.SphereGeometry(0.13, 10, 8), STD(white ? 0xffffff : 0x2a6a4a), 0, 0.42, -0.34);
    add(new THREE.ConeGeometry(0.05, 0.16, 6).rotateX(-Math.PI / 2), STD(0xe8a030), 0, 0.4, -0.5);
    add(new THREE.CylinderGeometry(0.05, 0.07, 0.3, 6), STD(white ? 0xffffff : 0x8a6a48), 0, 0.28, -0.3);
  }
  return g;
}
const WATER_LIFE = { lagoon: 'boat', sakura: 'lantern', bamboo: 'lantern', autumn: 'duck', meadow: 'swan' };
let floatersW = [], balloons = [], earth = null;
function makeBalloon(c1, c2) {
  const geo = new THREE.SphereGeometry(5, 16, 12).scale(1, 1.18, 1), p = geo.attributes.position, col = new Float32Array(p.count * 3), a = new THREE.Color(c1), b = new THREE.Color(c2);
  for (let i = 0; i < p.count; i++) { const seg = Math.floor((Math.atan2(p.getZ(i), p.getX(i)) + Math.PI) / (Math.PI / 4)), c = seg % 2 ? a : b; col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const g = new THREE.Group(); g.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7 })));
  const basket = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.1, 1.3), STD(0x7a5a38)); basket.position.y = -8; g.add(basket);
  const neckM = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 0.7, 2.2, 10, 1, true), STD(0x7a5a38)); neckM.position.y = -6.3; g.add(neckM);
  return g;
}
function makeEarth() {
  const geo = new THREE.SphereGeometry(70, 40, 24), p = geo.attributes.position, col = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i) / 70, y = p.getY(i) / 70, z = p.getZ(i) / 70, land = fbm2(x * 2.2 + 5 + z, y * 2.2 + 3 - z * 0.7, 4), cloud = fbm2(x * 3 + 20, y * 4 + z * 3 + 9, 3);
    let r = 0.1, g = 0.3, b = 0.7; if (land > 0.55) { r = 0.2; g = 0.45; b = 0.2; } if (Math.abs(y) > 0.86 || cloud > 0.6) { r = g = b = 0.9; }
    col[i * 3] = r; col[i * 3 + 1] = g; col[i * 3 + 2] = b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, fog: false }));
}
function resetAmbient() {
  for (const o of [...floatersW, ...balloons]) scene.remove(o);
  if (earth) { scene.remove(earth); earth = null; }
  floatersW = []; balloons = [];
  const B = W.birds;
  birds.forEach((b, i) => { b.visible = !!B && i < B.n; if (B) b.scale.setScalar(B.size); });
  if (B) birdMat.color.set(B.color);
  flies.forEach((f, i) => { f.visible = !!W.flies; f.userData.placed = false; if (W.flies) f.userData.mat.color.set(W.flies[i % W.flies.length]); });
  const wl = WATER_LIFE[W.id];
  if (wl) for (let i = 0; i < 6; i++) { const g = makeFloater(wl); g.visible = false; g.userData = { placed: false, dir: Math.random() * 6.28, spd: wl === 'boat' ? 1.2 : wl === 'lantern' ? 0.15 : 0.5, ph: i * 1.3, x: 0, z: 0 }; scene.add(g); floatersW.push(g); }
  if (W.id === 'meadow') {
    const cols = [[0xe8503a, 0xfff0d8], [0x3a8ad8, 0xffe070], [0xf0a030, 0xffffff]];
    for (let i = 0; i < 3; i++) { const g = makeBalloon(...cols[i]), a = Math.random() * 6.28, r = rand(90, 190); g.position.set(P.x + Math.cos(a) * r, 55 + i * 9, P.z + Math.sin(a) * r); scene.add(g); balloons.push(g); }
  }
  if (W.id === 'moon') { earth = makeEarth(); scene.add(earth); }
}
const _earthDir = new THREE.Vector3(-0.45, 0.42, -0.78).normalize();
function updateAmbient(dt) {
  // Birds: a circling flock, a travelling V, or a few slow soaring hawks.
  const B = W.birds;
  if (B) {
    const cx = P.x + Math.sin(time * 0.045) * 70, cz = P.z + Math.cos(time * 0.032) * 70, base = Math.max(groundAt(cx, cz), P.y) + 24;
    for (let i = 0; i < B.n; i++) {
      const b = birds[i], u = b.userData; let x, y, z, tx, tz, flapA = 0.6, flapS = 8;
      if (B.form === 'v') {
        const a = time * 0.05, row = Math.ceil(i / 2), side = i % 2 ? 1 : -1;
        tx = -Math.sin(a); tz = Math.cos(a);
        x = P.x + Math.cos(a) * 120 - tx * row * 2.4 + tz * side * row * 1.9; z = P.z + Math.sin(a) * 120 - tz * row * 2.4 - tx * side * row * 1.9; y = Math.max(P.y, 0) + 34 + Math.sin(time * 0.7 + i) * 0.4; flapS = 5;
      } else {
        const soar = B.form === 'soar', rad = soar ? 20 + i * 7 : u.rad, a = time * (soar ? 0.16 : 0.45) + u.ph;
        tx = -Math.sin(a); tz = Math.cos(a);
        x = cx + Math.cos(a) * rad; z = cz + Math.sin(a) * rad; y = base + u.hgt + (soar ? 8 : 0) + Math.sin(time * 0.8 + u.ph) * 0.8;
        if (soar) { flapA = 0.12; flapS = 2; }
      }
      b.position.set(x, y, z); b.rotation.y = Math.atan2(-tx, -tz);
      const flap = Math.sin(time * flapS + u.ph) * flapA;
      u.l.rotation.z = flap; u.r.rotation.z = -flap;
    }
  }
  // Butterflies (or soft moths) fluttering near the rider.
  if (W.flies) for (const f of flies) {
    const u = f.userData;
    if (!u.placed || Math.hypot(u.x - P.x, u.z - P.z) > 24) { const a = P.heading + rand(-1.6, 1.6), r = rand(7, 18); u.x = P.x - Math.sin(a) * r; u.z = P.z - Math.cos(a) * r; u.placed = true; }
    const dir = time * 0.4 + u.ph + Math.sin(time * 0.9 + u.ph) * 1.2;
    u.x += Math.cos(dir) * 0.9 * dt; u.z += Math.sin(dir) * 0.9 * dt;
    const g = groundAt(u.x, u.z);
    f.position.set(u.x, g + 0.9 + Math.sin(time * 1.3 + u.ph) * 0.45, u.z); f.rotation.y = -dir + Math.PI / 2;
    const flap = 0.2 + Math.abs(Math.sin(time * 11 + u.ph)) * 1.1;
    u.l.rotation.z = flap; u.r.rotation.z = -flap;
  }
  // Boats, lanterns, ducks and swans drift on open water.
  for (const g of floatersW) {
    const u = g.userData;
    if (!u.placed || Math.hypot(u.x - P.x, u.z - P.z) > 190 || H(u.x, u.z) > -0.25) {
      const a = Math.random() * 6.28, r = rand(40, 150), x = P.x + Math.cos(a) * r, z = P.z + Math.sin(a) * r;
      u.placed = H(x, z) < -0.6; if (u.placed) { u.x = x; u.z = z; } else u.dir += 2;
      g.visible = u.placed; if (!u.placed) continue;
    }
    u.dir += Math.sin(time * 0.2 + u.ph) * 0.1 * dt;
    u.x += -Math.sin(u.dir) * u.spd * dt; u.z += -Math.cos(u.dir) * u.spd * dt;
    g.position.set(u.x, Math.sin(time * 1.2 + u.ph) * 0.04, u.z); g.rotation.y = u.dir; g.rotation.z = Math.sin(time * 0.9 + u.ph) * 0.04;
  }
  // Hot-air balloons drift across the meadow sky.
  balloons.forEach((g, i) => {
    g.position.x += 1.1 * dt; g.position.y += Math.sin(time * 0.3 + i * 2) * 0.15 * dt;
    if (Math.hypot(g.position.x - P.x, g.position.z - P.z) > 240) { const a = Math.PI + rand(-1, 1), r = rand(150, 210); g.position.x = P.x + Math.cos(a) * r; g.position.z = P.z + Math.sin(a) * r; }
  });
  if (earth) { earth.position.copy(camera.position).addScaledVector(_earthDir, 850); earth.rotation.y = time * 0.01; }
}

// ---------- Camera ----------
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3(), _tp = new THREE.Vector3(), _tl = new THREE.Vector3();
let camYaw = 0, camInit = false;
function updateCamera(dt) {
  if (S.state === 'menu' || S.state === 'loading') {
    const a = time * 0.05;
    _tl.set(P.x, P.y + 1.6, P.z); _tp.set(P.x + Math.sin(a) * 9, P.y + 3.2, P.z + Math.cos(a) * 9);
    _tp.y = Math.max(_tp.y, groundAt(_tp.x, _tp.z) + 1.5);
  } else {
    if (Math.abs(P.speed) > 1 && time - lastLook > 1.5) orbitYaw = lerp(orbitYaw, 0, damp(1.2, dt));
    camYaw = lerp(camYaw, P.heading, damp(4, dt)); camYaw = P.heading + wrapAngle(camYaw - P.heading);
    const yaw = camYaw + orbitYaw, dist = camDist + Math.abs(P.speed) * 0.12;
    const la = clamp(P.speed * 0.09, 0, 2.6); // look a little ahead of the rider
    _tl.set(P.x + fwd.x * la, P.y + 1.9, P.z + fwd.z * la);
    _tp.set(P.x + Math.sin(yaw) * dist * Math.cos(orbitPitch), P.y + 1.9 + Math.sin(orbitPitch) * dist, P.z + Math.cos(yaw) * dist * Math.cos(orbitPitch));
    _tp.y = Math.max(_tp.y, groundAt(_tp.x, _tp.z) + 1.2);
  }
  if (!camInit) { camPos.copy(_tp); camLook.copy(_tl); camInit = true; }
  camPos.lerp(_tp, damp(S.state === 'play' ? 6 : 1.5, dt)); camLook.lerp(_tl, damp(10, dt));
  camera.position.copy(camPos); camera.lookAt(camLook);
  U.fade.value = S.state === 'play' ? Math.max(0, camPos.distanceTo(camLook) - 2.2) : 0;
  const fov = Math.min(92, 58 + Math.abs(P.speed) * 0.35 + (power.boost > 0 ? 8 : 0) + (P.turbo ? 10 : 0));
  if (Math.abs(camera.fov - fov) > 0.05) { camera.fov += (fov - camera.fov) * damp(3, dt); camera.updateProjectionMatrix(); }
  if (gradePass) { const gs = S.state === 'play' ? (P.turbo ? 1 : power.boost > 0 && Math.abs(P.speed) > 12 ? 0.4 : 0) : 0; gradePass.uniforms.uSpeed.value = lerp(gradePass.uniforms.uSpeed.value, gs, damp(4, dt)); }
  sky.position.copy(camera.position);
  const sd = SKY.uSun.value;
  sunLight.position.set(P.x + sd.x * 80, P.y + Math.max(sd.y, 0.35) * 80, P.z + sd.z * 80); sunLight.target.position.set(P.x, P.y, P.z);
  lantern.position.set(P.x + 1.5, P.y + 3, P.z + 1);
  sheet.position.set(Math.round(P.x / SHEET_TILE) * SHEET_TILE, 0, Math.round(P.z / SHEET_TILE) * SHEET_TILE);
  if (W.water !== 'ice') { M.water.normalMap.offset.set(time * 0.004, time * 0.0025); M.mirror.normalMap.offset.copy(M.water.normalMap.offset); }
  U.player.value.set(P.x, P.z);
  if (S.state === 'play') {
    target = nearestTarget();
    if (target) { const a = Math.atan2(-(target.x - P.x), -(target.z - P.z)); $('arrow').style.transform = `rotate(${-wrapAngle(a - (camYaw + orbitYaw))}rad)`; }
    updateHud(target);
    drawRadar(camYaw + orbitYaw);
  }
  const gl = S.state === 'play' ? guideLevel(target) : 0;
  updateWaypoint(gl ? target : null, gl);
  updateCrumbs(gl > 1 ? target : null);
}

// On-screen waypoint: a marker over the target, pinned to the screen edge when it's off-screen.
const wpEl = $('waypoint'), wpIcon = $('wpIcon'), wpDist = $('wpDist'), wpArrow = $('wpArrow');
function updateWaypoint(t, level) {
  if (!t || (level < 2 && t.d < 30) || document.body.classList.contains('photo')) { wpEl.style.display = 'none'; return; }
  wpEl.style.display = '';
  _v.set(t.x, t.y + 1.5, t.z).project(camera);
  const Wd = innerWidth, Hd = innerHeight, cx = Wd / 2, cy = Hd / 2;
  let sx = (_v.x * 0.5 + 0.5) * Wd, sy = (-_v.y * 0.5 + 0.5) * Hd;
  const behind = _v.z > 1, mx = 44, top = isTouch ? 120 : 110, bottom = isTouch ? 260 : 120;
  let edge = behind || sx < mx || sx > Wd - mx || sy < top || sy > Hd - bottom;
  let ang = 0;
  if (edge) {
    let dx = sx - cx, dy = sy - cy;
    if (behind) { dx = -dx; dy = Math.abs(dy) + Hd; } // behind you: show along the bottom edge
    const sxScale = (cx - mx) / Math.max(1e-6, Math.abs(dx)), syScale = (dy < 0 ? cy - top : Hd - bottom - cy) / Math.max(1e-6, Math.abs(dy));
    const s = Math.min(sxScale, syScale);
    sx = cx + dx * s; sy = cy + dy * s; ang = Math.atan2(dy, dx);
  }
  wpEl.style.transform = `translate(${sx}px, ${sy}px) translate(-50%, -50%)`;
  wpEl.classList.toggle('edge', edge); wpEl.classList.toggle('soft', level < 2);
  wpEl.style.setProperty('--c', t.color);
  wpArrow.style.transform = `rotate(${ang}rad) translate(26px, 0)`;
  const info = TARGET_INFO[t.kind];
  wpIcon.textContent = info.icon;
  wpDist.textContent = level < 2 ? `${Math.round(t.d / 5) * 5} m` : `${t.label || info.label} · ${Math.round(t.d)} m`;
}
// Chevron arrows painted on the ground, leading toward the target (visible on snow, sand and grass).
const CHEVRON = (() => {
  const [c, g] = makeCanvas(128);
  g.lineJoin = 'round'; g.lineCap = 'round';
  const path = () => { g.beginPath(); g.moveTo(22, 92); g.lineTo(64, 40); g.lineTo(106, 92); };
  g.strokeStyle = 'rgba(10,12,30,0.75)'; g.lineWidth = 30; path(); g.stroke();
  g.strokeStyle = '#ffffff'; g.lineWidth = 18; path(); g.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
const CRUMB_GEO = new THREE.PlaneGeometry(1.5, 1.5).rotateX(-Math.PI / 2);
const CRUMBS = Array.from({ length: 8 }, () => {
  const m = new THREE.Mesh(CRUMB_GEO, new THREE.MeshBasicMaterial({ map: CHEVRON, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4, fog: true }));
  m.visible = false; m.renderOrder = 2; scene.add(m); return m;
});
function updateCrumbs(t) {
  if (!t || t.d < 9 || document.body.classList.contains('photo')) { for (const s of CRUMBS) s.visible = false; return; }
  const dx = (t.x - P.x) / t.d, dz = (t.z - P.z) / t.d, rotY = Math.atan2(-dx, -dz);
  _col2.set(t.color);
  CRUMBS.forEach((s, i) => {
    const along = 6 + i * 4.5;
    if (along > t.d - 4) { s.visible = false; return; }
    const x = P.x + dx * along, z = P.z + dz * along;
    s.position.set(x, groundAt(x, z) + 0.12, z); s.rotation.y = rotY; s.visible = true;
    s.material.color.copy(_col2);
    const pulse = 0.5 + 0.5 * Math.sin(time * 6 - i * 0.8); // a wave runs toward the target
    s.material.opacity = (0.18 + pulse * 0.3) * (1 - i / CRUMBS.length * 0.55);
    s.scale.setScalar(0.85 + pulse * 0.25);
  });
}
const _col = new THREE.Color(), _col2 = new THREE.Color();

// =====================================================================
// Boot
// =====================================================================
$('btnPlay').addEventListener('click', begin);
$('btnPause').addEventListener('click', rest);
$('btnResume').addEventListener('click', resume);
$('btnMenu').addEventListener('click', toMenu);
$('btnMount').addEventListener('click', switchMount);
$('btnNav').addEventListener('click', cycleNav);
$('btnCodex').addEventListener('click', () => openCodex('play'));
$('btnCodexMenu').addEventListener('click', () => openCodex('menu'));
$('btnCodexPause').addEventListener('click', () => openCodex('pause'));
$('btnCodexClose').addEventListener('click', closeCodex);
$('btnMusic').addEventListener('click', () => { audio.init(); $('btnMusic').classList.toggle('off', !audio.toggleMusic()); });
$('card').addEventListener('click', () => $('card').classList.remove('show'));
for (const b of document.querySelectorAll('[data-q]')) b.addEventListener('click', () => { if (b.dataset.q !== qName) { flushSave(); store.set('bbw_quality', b.dataset.q); location.reload(); } });
for (const b of document.querySelectorAll('[data-mount]')) b.addEventListener('click', () => { P.mount = b.dataset.mount; SAVE.mount = P.mount; save(); applyMount(); refreshMenu(); });
for (const b of document.querySelectorAll('[data-avatar]')) b.addEventListener('click', () => { setAvatar(b.dataset.avatar); refreshMenu(); });

applyMount();
enterWorld(W, false);
rider.position.set(P.x, P.y, P.z); rider.rotation.set(0, P.heading, 0);
refreshMenu();
S.state = 'menu';

const clock = new THREE.Clock();
function frame() {
  const dt = Math.min(clock.getDelta(), 1 / 20);
  step(dt);
  render();
  requestAnimationFrame(frame);
}
function step(dt) {
  if (S.state !== 'paused') {
    time += dt; SKY.uTime.value = time; U.time.value = time; if (objDone.t > 0) objDone.t -= dt;
    if (S.state === 'play' && !S.warping) {
      simulate(dt);
      for (const k in power) if (power[k] > 0) { power[k] = Math.max(0, power[k] - dt); if (power[k] === 0) toast(`${POWERS[k].icon} ${POWERS[k].name} faded`, 1800); }
    } else { audio.wind(0); audio.turbo(0); }
    updateWeather(dt);
    animate(dt); updateAnimals(dt);
    fx.update(dt); updateRipples(dt); updateFloaters(dt);
    streamChunks(P.x, P.z, 2);
  }
  updateCamera(S.state === 'paused' ? 0 : dt);
}
function render() { if (composer) composer.render(); else renderer.render(scene, camera); }
renderer.compile(scene, camera);
requestAnimationFrame(() => {
  frame();
  if (S.state === 'menu') show('menu');
  $('loading').classList.add('fade');
  setTimeout(() => { $('loading').style.display = 'none'; }, 1100);
});
