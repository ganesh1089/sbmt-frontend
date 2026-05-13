const CACHE_NAME = "sbmt-cache-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./hod-login.html",
  "./teacher-login.html",
  "./student-login.html"
];

/* ================= INSTALL ================= */
self.addEventListener("install", (event) => {
  console.log("Service Worker Installed ✅");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

/* ================= FETCH ================= */
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});