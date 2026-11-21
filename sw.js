// Appartement Diabat : fonctionnement hors connexion. Version 827271e5d8
// Aucune donnée personnelle ne passe par ce fichier : elles restent dans le stockage du téléphone.
const PREFIX = 'diabat-';
const CACHE = PREFIX + '827271e5d8';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './apple-touch-icon.png', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  // Ne supprime que les anciennes copies de cette application (le planning garde les siennes).
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;
  if (!sameOrigin && url.hostname !== 'cdnjs.cloudflare.com') return;
  if (sameOrigin && req.mode === 'navigate') {
    // Page : version en ligne si disponible (mise à jour), sinon copie hors connexion
    e.respondWith((async () => {
      try {
        const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), 3000);
        const res = await fetch(req, { signal: ctrl.signal }); clearTimeout(t);
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); }
        return res;
      } catch (err) {
        return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
      }
    })());
    return;
  }
  // Icônes, manifeste et modules Excel/PDF : copie gardée d'abord
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
