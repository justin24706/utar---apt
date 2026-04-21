const CACHE = 'utar-cgpa-v2';
const OFFLINE_URL = './index.html';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      cache.addAll([OFFLINE_URL])
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Only handle GET requests
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      // Return cached version immediately (cache-first for offline)
      if (cached) return cached;

      return fetch(e.request).then(resp => {
        // Only cache successful same-origin or data responses
        if (resp && resp.status === 200 && (resp.type === 'basic' || resp.type === 'cors')) {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(() => {
        // Offline fallback
        if (e.request.destination === 'document') {
          return caches.match(OFFLINE_URL);
        }
      });
    })
  );
});
