// Static game data: worlds, weather, severities, power-ups, ranks and achievements.

export const SEVERITY = [
  { id: 'low',      name: 'Low',      color: 0x5ce1ff, css: '#5ce1ff', bounty: [50, 150],     xp: 10,  weight: 50, beam: 22 },
  { id: 'medium',   name: 'Medium',   color: 0xffd166, css: '#ffd166', bounty: [250, 750],    xp: 25,  weight: 29, beam: 34 },
  { id: 'high',     name: 'High',     color: 0xff8c42, css: '#ff8c42', bounty: [1000, 3000],  xp: 60,  weight: 13, beam: 52 },
  { id: 'critical', name: 'Critical', color: 0xff3d7f, css: '#ff3d7f', bounty: [5000, 15000], xp: 150, weight: 5,  beam: 85 },
  { id: 'zeroday',  name: 'Zero-Day', color: 0xb070ff, css: '#c79bff', bounty: [25000, 60000], xp: 400, weight: 3, beam: 110 },
];

export const POWERS = {
  radar:      { name: 'Recon Radar',   icon: '📡', color: 0x5ce1ff, css: '#5ce1ff', dur: 35, desc: 'Radar range doubled, and nearby bugs drift to you' },
  boost:      { name: 'Proxy Boost',   icon: '⚡', color: 0x7dff9a, css: '#7dff9a', dur: 20, desc: 'Ride much faster for a while' },
  double:     { name: 'Double Bounty', icon: '💰', color: 0xffd166, css: '#ffd166', dur: 45, desc: 'Bounties and XP are doubled' },
  doublejump: { name: 'Double Jump',   icon: '🦘', color: 0xff9a5c, css: '#ff9a5c', dur: 40, desc: 'Press hop again in mid-air for a second jump' },
  moon:       { name: 'Moon Gravity',  icon: '🌙', color: 0xd0d8ff, css: '#d0d8ff', dur: 30, desc: 'Floaty low gravity: huge, slow hops' },
  glide:      { name: 'Glider',        icon: '🪂', color: 0x9affd8, css: '#9affd8', dur: 35, desc: 'Hold hop while falling to glide through the air' },
  magnet:     { name: 'Bug Magnet',    icon: '🧲', color: 0xff6ab0, css: '#ff6ab0', dur: 30, desc: 'Bugs and fuel within 30 m fly straight to you' },
};
export const ORB_TYPES = ['radar', 'boost', 'double', 'doublejump', 'moon', 'glide', 'magnet'];
export const FUEL = { perCan: 30, max: 100, drain: 13, turbo: 2.2 };

export const WEATHERS = {
  clear:     { name: 'Clear skies',        icon: '✨' },
  snow:      { name: 'Gentle snowfall',    icon: '❄', particle: 'snow', fog: 1.15, wind: 0.3, clouds: 0.35 },
  blizzard:  { name: 'Snow squall',        icon: '🌨', particle: 'snow', heavy: true, fog: 2.1, wind: 1.0, clouds: 0.75 },
  aurora:    { name: 'Aurora storm',       icon: '🌌', aurora: 1.0 },
  fog:       { name: 'Soft mist',          icon: '🌫', fog: 2.6, clouds: 0.5 },
  meteors:   { name: 'Meteor shower · 2× XP', icon: '☄', meteors: true, luck: true },
  rain:      { name: 'Soft rain',          icon: '🌧', rain: true, fog: 1.6, wind: 0.4, clouds: 0.85 },
  petals:    { name: 'Blossom drift',      icon: '🌸', particle: 'petals', wind: 0.5 },
  fireflies: { name: 'Fireflies',          icon: '✨', particle: 'fireflies' },
  leaves:    { name: 'Falling leaves',     icon: '🍂', particle: 'leaves', wind: 0.6, clouds: 0.3 },
  dust:      { name: 'Desert breeze',      icon: '💨', particle: 'dust', fog: 1.5, wind: 0.9 },
  datarain:  { name: 'Data rain',          icon: '💾', particle: 'data' },
};

// Colours are linear RGB triplets (0..1) unless written as hex.
export const WORLDS = [
  {
    id: 'tundra', name: 'Frostbyte Tundra', icon: '❄', tagline: 'Snowy hills, frozen lakes and the northern lights.',
    seed: 0, terrain: 'hills', hills: 60, bumps: 4.5, mountains: 110, lakeBias: 0.42,
    sky: { zenith: [0.006, 0.008, 0.035], mid: [0.03, 0.035, 0.10], horizon: [0.075, 0.07, 0.16], aurora: [[0.25, 0.95, 0.65], [0.6, 0.45, 1.0]], auroraBase: 0.3,
           sun: [0.35, 0.3, -0.88], sunColor: [1, 0.96, 0.88], sunSize: 0.9996, sunGlow: 0.35, stars: 1, cloudColor: [0.16, 0.17, 0.3], retro: 0 },
    fog: 2.1, hemi: [0xa8b8ff, 0x2a2448, 0.85], dir: [0xd4ddff, 1.8], lantern: 0xffa860, bloom: 0.6, exposure: 1.05,
    ground: { flat: [0.84, 0.88, 1.0], flat2: [0.76, 0.82, 0.97], steep: [0.24, 0.26, 0.33], peak: [0.72, 0.82, 1.0], shore: [0.7, 0.76, 0.9] },
    water: 'ice', tree: 'pine', snowy: true, trail: [0.62, 0.68, 0.86], cold: true, grid: 0, landmark: true,
    weathers: ['snow', 'clear', 'aurora', 'blizzard', 'snow', 'fog', 'meteors'],
    music: { scale: [261.63, 293.66, 329.63, 392, 440, 523.25, 587.33, 659.25, 783.99, 880, 1046.5],
             chords: [[130.81, 196, 329.63], [110, 164.81, 261.63], [87.31, 130.81, 220], [98, 146.83, 246.94]], voice: 'bell', beat: 0.78, rhythm: [1, 0, 1, 0, 1, 0, 0, 0] },
  },
  {
    id: 'sakura', name: 'Sakura Subnet', icon: '🌸', tagline: 'Cherry blossoms at dusk beside still lakes.',
    seed: 7, terrain: 'hills', hills: 45, bumps: 3, mountains: 70, lakeBias: 0.44,
    sky: { zenith: [0.04, 0.03, 0.12], mid: [0.22, 0.09, 0.2], horizon: [0.5, 0.22, 0.28], aurora: [[1, 0.5, 0.7], [0.6, 0.5, 1]], auroraBase: 0.0,
           sun: [0.0, 0.07, -1], sunColor: [1, 0.72, 0.5], sunSize: 0.9985, sunGlow: 0.65, stars: 0.45, cloudColor: [0.55, 0.28, 0.38], retro: 0 },
    fog: 2.4, hemi: [0xffc0d8, 0x3a2a3a, 0.95], dir: [0xffc9a8, 1.7], lantern: 0xffb0c0, bloom: 0.55, exposure: 1.0,
    ground: { flat: [0.24, 0.42, 0.18], flat2: [0.62, 0.42, 0.5], steep: [0.36, 0.32, 0.30], peak: [0.8, 0.8, 0.86], shore: [0.6, 0.54, 0.42] },
    water: 'water', waterColor: 0x355a78, tree: 'sakura', snowy: false, rockTint: 0x8a8078, trail: null, cold: false, grid: 0,
    weathers: ['petals', 'clear', 'fireflies', 'rain', 'petals', 'fog', 'meteors'],
    music: { scale: [293.66, 329.63, 349.23, 440, 466.16, 587.33, 659.25, 698.46, 880, 932.33],
             chords: [[146.83, 220, 349.23], [116.54, 174.61, 293.66], [130.81, 196, 329.63], [110, 164.81, 261.63]], voice: 'koto', beat: 0.7, rhythm: [1, 0, 1, 1, 0, 1, 0, 0] },
  },
  {
    id: 'dunes', name: 'Dune Protocol', icon: '🏜', tagline: 'Endless twilight dunes under a sky full of stars.',
    seed: 19, terrain: 'dunes', lakeBias: 0.36,
    sky: { zenith: [0.015, 0.015, 0.06], mid: [0.13, 0.06, 0.16], horizon: [0.52, 0.26, 0.16], aurora: [[1, 0.6, 0.3], [0.8, 0.4, 1]], auroraBase: 0,
           sun: [-0.3, 0.05, -0.95], sunColor: [1, 0.58, 0.32], sunSize: 0.998, sunGlow: 0.8, stars: 1.3, cloudColor: [0.45, 0.22, 0.22], retro: 0 },
    fog: 1.8, hemi: [0xffc69a, 0x4a2a2a, 0.85], dir: [0xffb380, 1.9], lantern: 0xffc070, bloom: 0.55, exposure: 1.0,
    ground: { flat: [0.80, 0.58, 0.36], flat2: [0.88, 0.67, 0.44], steep: [0.6, 0.39, 0.25], peak: [0.9, 0.72, 0.5], shore: [0.5, 0.45, 0.3] },
    water: 'water', waterColor: 0x1f6a7a, tree: 'cactus', snowy: false, sparkle: 0.5, rockTint: 0xa0704a, trail: [0.6, 0.42, 0.26], cold: false, grid: 0,
    weathers: ['clear', 'dust', 'meteors', 'clear', 'fog', 'dust'],
    music: { scale: [293.66, 311.13, 369.99, 392, 440, 466.16, 523.25, 587.33, 622.25, 739.99],
             chords: [[146.83, 220, 293.66], [155.56, 233.08, 311.13], [130.81, 196, 261.63], [146.83, 220, 369.99]], voice: 'oud', beat: 0.62, rhythm: [1, 1, 0, 1, 0, 1, 1, 0] },
  },
  {
    id: 'neon', name: 'Quiet Grid', icon: '🌐', tagline: 'A soft indigo night with faint lines of light.',
    seed: 31, terrain: 'hills', hills: 40, bumps: 2, mountains: 150, lakeBias: 0.45,
    sky: { zenith: [0.008, 0.012, 0.04], mid: [0.03, 0.04, 0.12], horizon: [0.09, 0.1, 0.24], aurora: [[0.3, 0.6, 0.9], [0.6, 0.45, 0.9]], auroraBase: 0.08,
           sun: [0, 0.16, -1], sunColor: [0.42, 0.42, 0.66], sunSize: 0.9965, sunGlow: 0.35, stars: 0.8, cloudColor: [0, 0, 0], retro: 0 },
    fog: 2.2, hemi: [0x8a9ad8, 0x141428, 0.7], dir: [0xa8b0f0, 1.0], lantern: 0x9ab8ff, bloom: 0.3, exposure: 0.9,
    ground: { flat: [0.06, 0.07, 0.13], flat2: [0.07, 0.085, 0.16], steep: [0.1, 0.1, 0.2], peak: [0.16, 0.17, 0.3], shore: [0.05, 0.06, 0.11] },
    water: 'mirror', waterColor: 0x0c0614, tree: 'crystal', snowy: false, rockTint: 0x3a2050, trail: null, cold: false,
    grid: 0.3, gridColor: [0.3, 0.45, 0.9], gridColor2: [0.25, 0.6, 0.8],
    weathers: ['clear', 'fireflies', 'aurora', 'fog', 'meteors'],
    music: { scale: [220, 261.63, 293.66, 329.63, 392, 440, 523.25, 587.33, 659.25, 783.99],
             chords: [[110, 164.81, 261.63], [87.31, 130.81, 220], [130.81, 196, 329.63], [98, 146.83, 246.94]], voice: 'synth', beat: 0.42, arp: true, rhythm: [1, 0, 0, 0, 0, 0, 1, 0] },
  },
  {
    id: 'autumn', name: 'Autumn Kernel', icon: '🍁', tagline: 'Golden forests and amber lakes at sunset.',
    seed: 47, terrain: 'hills', hills: 55, bumps: 4, mountains: 90, lakeBias: 0.43,
    sky: { zenith: [0.05, 0.07, 0.2], mid: [0.3, 0.2, 0.26], horizon: [0.8, 0.42, 0.2], aurora: [[1, 0.7, 0.3], [0.9, 0.4, 0.5]], auroraBase: 0,
           sun: [0.4, 0.09, -0.9], sunColor: [1, 0.7, 0.4], sunSize: 0.9986, sunGlow: 0.75, stars: 0.25, cloudColor: [0.8, 0.45, 0.35], retro: 0 },
    fog: 2.2, hemi: [0xffd2a0, 0x3a2a20, 1.0], dir: [0xffc080, 2.0], lantern: 0xffb060, bloom: 0.5, exposure: 1.0,
    ground: { flat: [0.34, 0.34, 0.12], flat2: [0.52, 0.3, 0.1], steep: [0.38, 0.32, 0.28], peak: [0.6, 0.56, 0.5], shore: [0.45, 0.4, 0.28] },
    water: 'water', waterColor: 0x3a4a5a, tree: 'autumn', snowy: false, rockTint: 0x7a7068, trail: null, cold: false, grid: 0,
    weathers: ['leaves', 'clear', 'rain', 'fog', 'fireflies', 'leaves', 'meteors'],
    music: { scale: [196, 220, 246.94, 293.66, 329.63, 392, 440, 493.88, 587.33, 659.25],
             chords: [[98, 146.83, 246.94], [130.81, 196, 329.63], [110, 164.81, 261.63], [146.83, 220, 369.99]], voice: 'pluck', beat: 0.66, rhythm: [1, 0, 1, 0, 1, 1, 0, 0] },
  },
  {
    id: 'lagoon', name: 'Coral Cache', icon: '🏝', tagline: 'Warm islands, palm trees and a turquoise sea at sunset.',
    seed: 61, terrain: 'hills', hills: 34, bumps: 2, mountains: 40, lakeBias: 0.5,
    sky: { zenith: [0.05, 0.16, 0.35], mid: [0.2, 0.45, 0.6], horizon: [0.95, 0.6, 0.45], aurora: [[1, 0.7, 0.5], [0.5, 0.8, 1]], auroraBase: 0,
           sun: [0.2, 0.12, -0.95], sunColor: [1, 0.8, 0.55], sunSize: 0.998, sunGlow: 0.8, stars: 0.15, cloudColor: [0.9, 0.6, 0.55], retro: 0 },
    fog: 1.9, hemi: [0xbfe8ff, 0x4a4030, 0.7], dir: [0xffd0a0, 1.5], lantern: 0xffc080, bloom: 0.4, exposure: 0.8,
    ground: { flat: [0.62, 0.52, 0.33], flat2: [0.22, 0.42, 0.18], steep: [0.45, 0.4, 0.33], peak: [0.6, 0.6, 0.55], shore: [0.85, 0.78, 0.6] },
    water: 'water', waterColor: 0x1a8a9a, tree: 'palm', snowy: false, rockTint: 0x9a8a78, trail: [0.6, 0.5, 0.32], cold: false, grid: 0,
    weathers: ['clear', 'rain', 'fireflies', 'clear', 'fog', 'meteors'],
    music: { scale: [261.63, 293.66, 329.63, 392, 440, 523.25, 587.33, 659.25, 783.99, 880],
             chords: [[130.81, 196, 329.63], [110, 164.81, 261.63], [87.31, 130.81, 220], [98, 146.83, 246.94]], voice: 'kalimba', beat: 0.5, rhythm: [1, 0, 1, 1, 0, 1, 1, 0] },
  },
  {
    id: 'bamboo', name: 'Bamboo Buffer', icon: '🎋', tagline: 'A misty green forest where pandas nap.',
    seed: 73, terrain: 'hills', hills: 50, bumps: 3, mountains: 100, lakeBias: 0.43,
    sky: { zenith: [0.1, 0.2, 0.22], mid: [0.3, 0.42, 0.38], horizon: [0.6, 0.7, 0.6], aurora: [[0.6, 1, 0.7], [0.8, 1, 0.6]], auroraBase: 0,
           sun: [0.3, 0.3, -0.9], sunColor: [1, 0.95, 0.8], sunSize: 0.9992, sunGlow: 0.4, stars: 0, cloudColor: [0.7, 0.78, 0.72], retro: 0 },
    fog: 2.8, hemi: [0xd8ffe0, 0x2a3a2a, 0.7], dir: [0xfff0d0, 1.4], lantern: 0xfff0a0, bloom: 0.4, exposure: 0.78,
    ground: { flat: [0.2, 0.36, 0.14], flat2: [0.28, 0.42, 0.16], steep: [0.3, 0.3, 0.26], peak: [0.55, 0.6, 0.55], shore: [0.4, 0.42, 0.3] },
    water: 'water', waterColor: 0x2a5a4a, tree: 'bamboo', snowy: false, rockTint: 0x6a7068, trail: null, cold: false, grid: 0,
    weathers: ['fog', 'clear', 'rain', 'fireflies', 'fog'],
    music: { scale: [293.66, 349.23, 392, 440, 523.25, 587.33, 698.46, 783.99, 880, 1046.5],
             chords: [[146.83, 220, 349.23], [174.61, 261.63, 349.23], [130.81, 196, 329.63], [146.83, 220, 293.66]], voice: 'flute', beat: 0.95, rhythm: [1, 0, 0, 1, 0, 1, 0, 0] },
  },
  {
    id: 'moon', name: 'Lunar Sandbox', icon: '🌙', tagline: 'Quiet grey hills, a sky full of stars, and floaty jumps.',
    seed: 89, terrain: 'hills', hills: 26, bumps: 3.5, mountains: 70, lakeBias: 0.3,
    sky: { zenith: [0.0, 0.0, 0.004], mid: [0.004, 0.004, 0.012], horizon: [0.02, 0.02, 0.035], aurora: [[0.4, 0.6, 1], [0.8, 0.8, 1]], auroraBase: 0,
           sun: [0.5, 0.35, -0.8], sunColor: [1, 0.98, 0.92], sunSize: 0.9996, sunGlow: 0.3, stars: 2.2, cloudColor: [0, 0, 0], retro: 0 },
    fog: 1.2, hemi: [0x8090b0, 0x202028, 0.55], dir: [0xf4f4ff, 2.4], lantern: 0xa0c0ff, bloom: 0.5, exposure: 1.0,
    ground: { flat: [0.42, 0.42, 0.45], flat2: [0.33, 0.33, 0.36], steep: [0.2, 0.2, 0.22], peak: [0.6, 0.6, 0.64], shore: [0.25, 0.25, 0.28] },
    water: 'mirror', waterColor: 0x0c0614, tree: 'spire', snowy: false, sparkle: 0.7, rockTint: 0x8a8a92, trail: [0.25, 0.25, 0.28], cold: false, grid: 0, lowG: true,
    weathers: ['clear', 'meteors', 'clear', 'aurora'],
    music: { scale: [261.63, 293.66, 329.63, 369.99, 392, 440, 493.88, 523.25, 587.33, 659.25, 739.99],
             chords: [[130.81, 196, 246.94], [146.83, 220, 369.99], [110, 164.81, 246.94], [98, 146.83, 293.66]], voice: 'glass', beat: 1.05, rhythm: [1, 0, 0, 0, 1, 0, 0, 0] },
  },
  {
    id: 'meadow', name: 'Daybreak Meadow', icon: '🌼', tagline: 'A bright morning of wildflowers and birch trees.',
    seed: 97, terrain: 'hills', hills: 40, bumps: 3, mountains: 80, lakeBias: 0.42,
    sky: { zenith: [0.1, 0.28, 0.62], mid: [0.32, 0.52, 0.8], horizon: [0.85, 0.8, 0.7], aurora: [[1, 1, 0.8], [0.8, 0.9, 1]], auroraBase: 0,
           sun: [-0.4, 0.35, -0.85], sunColor: [1, 0.95, 0.8], sunSize: 0.9993, sunGlow: 0.5, stars: 0, cloudColor: [1, 0.95, 0.9], retro: 0 },
    fog: 1.7, hemi: [0xcfe6ff, 0x4a5a30, 0.75], dir: [0xfff2d8, 1.8], lantern: 0xfff0c0, bloom: 0.3, exposure: 0.75,
    ground: { flat: [0.3, 0.5, 0.16], flat2: [0.42, 0.55, 0.18], steep: [0.4, 0.36, 0.3], peak: [0.8, 0.8, 0.82], shore: [0.6, 0.56, 0.4] },
    water: 'water', waterColor: 0x3a7ab0, tree: 'birch', snowy: false, rockTint: 0x8a8880, trail: null, cold: false, grid: 0,
    weathers: ['clear', 'petals', 'clear', 'rain', 'fog'],
    music: { scale: [196, 220, 246.94, 293.66, 329.63, 392, 440, 493.88, 587.33, 659.25],
             chords: [[98, 146.83, 246.94], [82.41, 123.47, 196], [130.81, 196, 329.63], [146.83, 220, 369.99]], voice: 'piano', beat: 0.56, rhythm: [1, 0, 1, 1, 1, 0, 1, 0] },
  },
];
// What makes each world its own place: the shape of the land, how trees grow, lodge colours, birds and butterflies.
const WORLD_EXTRA = {
  tundra: { terrain: 'hills', forest: [0.025, 0.6, 0.008], lodge: [0x9a6b4b, 0x3a2a2e], birds: { color: 0xdfe6f5, size: 1.1, form: 'v', n: 7 }, flies: null },
  sakura: { terrain: 'terrace', forest: [0.05, 0.45, 0.012], lodge: [0xa8483a, 0x26262c], birds: { color: 0xf6f2ee, size: 1.6, form: 'circle', n: 5 }, flies: [0xffc0d8, 0xffffff, 0xff9ec0] },
  dunes:  { terrain: 'dunes', forest: [0.02, 0.1, 0.008], lodge: [0xc8a070, 0x8a5a3a], birds: { color: 0x3a2a20, size: 1.5, form: 'soar', n: 3 }, flies: null },
  neon:   { terrain: 'blocks', forest: [0.012, 0.25, 0.01], lodge: [0x34345a, 0x1c1c34], birds: { color: 0x6a8ad0, size: 1, form: 'circle', n: 5 }, flies: [0x5a7ad0, 0x8a6ad0] },
  autumn: { terrain: 'valleys', forest: [0.04, 0.7, 0.007], lodge: [0x9a6b4b, 0x6a2a20], birds: { color: 0x2a2420, size: 1.2, form: 'v', n: 9 }, flies: [0xe8903a, 0xffd070] },
  lagoon: { terrain: 'islands', forest: [0.12, 0.3, 0.02], treeMaxH: 9, lodge: [0xe8d8b8, 0x2a7a8a], birds: { color: 0xffffff, size: 1.2, form: 'circle', n: 6 }, flies: [0x60e0e0, 0xffe070] },
  bamboo: { terrain: 'karst', forest: [0.1, 0.9, 0.015], lodge: [0x8a9a5a, 0x3a4a30], birds: { color: 0x2a4a30, size: 0.8, form: 'circle', n: 6 }, flies: [0xd8ffd0, 0xffffff] },
  moon:   { terrain: 'craters', forest: [0.006, 0.05, 0.01], lodge: [0xc8c8d0, 0x8a8a98], birds: null, flies: null },
  meadow: { terrain: 'plains', forest: [0.012, 0.25, 0.006], lodge: [0xf0e8d8, 0xb04a3a], birds: { color: 0x202838, size: 0.8, form: 'circle', n: 7 }, flies: [0xffe060, 0x70b0ff, 0xff9050, 0xffffff] },
};
for (const w of WORLDS) Object.assign(w, WORLD_EXTRA[w.id]);

export const RANKS = [
  [1, 'Curious Beginner'], [3, 'Recon Rookie'], [5, 'Payload Apprentice'], [8, 'Triage Regular'],
  [12, 'Hall of Famer'], [16, 'Top-100 Hunter'], [20, 'Live Event Invitee'], [25, 'Community Legend'],
];
export const rankFor = level => { let r = RANKS[0][1]; for (const [l, n] of RANKS) if (level >= l) r = n; return r; };
export const xpForLevel = l => Math.round(120 * Math.pow(l, 1.45)); // XP needed to go from level l to l+1

export const ACHIEVEMENTS = [
  { id: 'first_bug',   icon: '🐞', name: 'First Bug',          desc: 'Find your very first bug.' },
  { id: 'first_report',icon: '📝', name: 'Triaged!',           desc: 'Submit a report at a Triage Lodge.' },
  { id: 'critical',    icon: '💥', name: 'Critical Finder',    desc: 'Find a Critical severity bug.' },
  { id: 'chain5',      icon: '🔗', name: 'Chain Reaction',     desc: 'Chain 5 bugs in a row.' },
  { id: 'chain10',     icon: '⛓', name: 'Exploit Chain',       desc: 'Chain 10 bugs in a row.' },
  { id: 'bounty10k',   icon: '💵', name: 'Five Figures',       desc: 'Earn $10,000 in total bounties.' },
  { id: 'bounty100k',  icon: '💰', name: 'Six Figures',        desc: 'Earn $100,000 in total bounties.' },
  { id: 'codex5',      icon: '📇', name: 'Community Learner',  desc: 'Unlock 5 Hacker Codex cards.' },
  { id: 'codex20',     icon: '📚', name: 'Hall of Fame Scholar', desc: 'Unlock 20 Hacker Codex cards.' },
  { id: 'podcast',     icon: '📻', name: 'Night Listener',     desc: 'Tune in at a Lantern Radio tower.' },
  { id: 'turbo',       icon: '🔥', name: 'Full Throttle',      desc: 'Use fuel to turbo for the first time.' },
  { id: 'airjump',     icon: '🦘', name: 'Sky Hopper',         desc: 'Do a double jump.' },
  { id: 'glider',      icon: '🪂', name: 'Gentle Landing',     desc: 'Glide through the air.' },
  { id: 'warp1',       icon: '🌀', name: 'Zero-Day Traveller', desc: 'Warp into a new world.' },
  { id: 'worlds_all',  icon: '🌍', name: 'Every Subnet',       desc: 'Visit every world.' },
  { id: 'zeroday',     icon: '🟣', name: 'Zero-Day Hunter',   desc: 'Find a Zero-Day, the rarest bug of all.' },
  { id: 'friends',     icon: '🐾', name: 'Animal Friend',     desc: 'Say hello to 5 different kinds of animal.' },
  { id: 'dist5k',      icon: '🧭', name: 'Long Recon',         desc: 'Travel 5 km in total.' },
  { id: 'level5',      icon: '⭐', name: 'Levelling Up',       desc: 'Reach level 5.' },
  { id: 'level12',     icon: '🏆', name: 'Hall of Famer',      desc: 'Reach level 12.' },
  { id: 'weather5',    icon: '🌦', name: 'Storm Chaser',       desc: 'Experience 5 kinds of weather.' },
  { id: 'meteors',     icon: '☄', name: 'Make a Wish',         desc: 'Ride under a meteor shower.' },
  { id: 'powers3',     icon: '🔋', name: 'Fully Powered',      desc: 'Use five different kinds of power-up.' },
];

export const GROUP_LABEL = {
  'you': '🌱 Beginner · that\'s you',
  'radio-host': '📻 Lantern Radio · host',
  'radio-guest': '📻 Lantern Radio · guest',
  'legend': '🏆 Legend of Wanderland',
  'educator': '📚 Educator & toolsmith',
};

export const TIPS = [
  'Recon is a calm habit: map the target before you test it.',
  'Read the program policy first. Scope keeps everyone safe.',
  'Write reports a tired triager can follow at 2 a.m.: clear steps, clear impact.',
  'Duplicates happen to everyone. Each one still taught you something.',
  'Take notes as you hunt. Future you will thank you.',
  'Small bugs can chain into big ones. Keep a list of odd behaviours.',
  'Rest is part of the methodology.',
  'Share what you learn. The community grew because people did.',
];
