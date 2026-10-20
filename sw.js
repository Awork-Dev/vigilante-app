// Guarda la app para que abra rápido; los datos siempre se piden a la red.
const CACHE = "vigilante-v2";
const BASE = ["./", "index.html", "ichthys.js", "manifest.webmanifest", "icono-192.png", "icono-512.png", "apple-touch-icon.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin || url.pathname.endsWith("datos.json")) return; // red siempre
  e.respondWith(fetch(e.request).then(r => {
    const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return r;
  }).catch(() => caches.match(e.request)));
});
