// Choose a cache name
const cacheName = "cache-v1";
// List the files to precache
const precacheResources = [
  "/",
  "/index.html",
  "/dist/bundle.js",
  "/dist/bundle.css",
  "/favicon.svg",
  "/static/videos/baby-turtles.mp4",
  "/static/images/backgrounds/level1.png",
  "/static/images/backgrounds/level2.png",
  "/static/images/characters/turtle.svg",
  "/static/images/characters/benthicCrab.svg",
  "/static/images/characters/boat.svg",
  "/static/images/characters/neptuneGrass.svg",
  "/static/images/characters/plasticBag.svg",
  "/static/images/characters/sardine.svg",
  "/static/images/characters/shrimp.svg",
];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener("install", (event) => {
  console.log("Service worker install event!");
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(precacheResources))
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activate event!");
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener("fetch", (event) => {
  console.log("Fetch intercepted for:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse && !navigator.onLine) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
