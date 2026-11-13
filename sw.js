// Offline cache for Bug Bounty Wanderland. Generated into sw.js by build.mjs: do not edit sw.js by hand.
// The page itself is always fetched fresh when online, so a new version is picked up on the next visit.
// The script and stylesheet carry a fingerprint in their address, so a cached copy is always the right one.
const CACHE = 'bbw-925eb552e286';
const ASSETS = ["./","app.js?v=797b33465f","app.css?v=4725b68812","boot.js?v=6e2e2d804a"];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('bbw-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return; // only this site's own files
  if (req.mode === 'navigate') { // the page: network first, saved copy when offline
    event.respondWith(
      fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./', copy)); } return res; })
        .catch(() => caches.match('./'))
    );
    return;
  }
  event.respondWith( // everything else: saved copy first, network otherwise
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }))
  );
});
