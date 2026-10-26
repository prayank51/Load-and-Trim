const CACHE_NAME = "load-trim-offline-v2";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./version.json"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("load-trim-offline-") && k !== CACHE_NAME).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.pathname.endsWith("/version.json")) {
    event.respondWith(fetch(event.request, {cache:"no-store"}).then(response => {
      if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put("./version.json", response.clone()));
      return response;
    }).catch(() => caches.match("./version.json")));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if (response.ok && url.origin === self.location.origin) caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
    return response;
  }).catch(() => caches.match("./index.html"))));
});