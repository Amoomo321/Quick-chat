// Minimal PWA cache
const CACHE = 'quickchat-v1';
const ASSETS = [
  './',
  './index.html',
  './signup.html',
  './chat.html',
  './css/style.css',
  './manifest.json',
  './img/icon-192.png',
  './img/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  e.respondWith(
    caches.match(req).then(res =>
      res ||
      fetch(req).then(networkRes => {
        // cache GET responses
        if (req.method === 'GET' && networkRes.ok) {
          const copy = networkRes.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return networkRes;
      }).catch(() => caches.match('./index.html'))
    )
  );
});

// (Optional) showNotification is called from pages
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('./chat.html'));
});
