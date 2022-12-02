const staticRozakPwa = "rozak-pwa-1";
const assets = [
  "/",
  "/index.html",
  "/assets/css/global.css",
  "/assets/js/main.js",
  "assets/images/1.jpg",
  "assets/images/2.png",
  "assets/images/folium-dev.png",
  "assets/images/laravel.png",
  "assets/images/personal-1.png",
  "assets/images/personal-2.png",
  "assets/images/personal-3.png",
  "assets/images/personal-4.png",
  "assets/images/slider_image.jpg",
  "assets/images/slider.jpg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticRozakPwa).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
