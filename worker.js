var cacheName = 'ATCV-pwa';
var filesToCache = [
	'index.html',
	'res/atcg-icon-192.png',
	'res/intro.png',
	'res/splash.png',
	'res/form.png',
	'res/frame.png',
    'res/sdhmap.png',
    'res/bgmap.png'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      try {
        return response || fetch(e.request);        // , {mode: 'no-cors'}
      } catch (error) {
        console.error('error', error);        
      }
    })
  );
});
