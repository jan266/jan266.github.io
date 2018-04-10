self.addEventListener('install', function (event) {  //install sw
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')  //open a cache
      .then(function (cache) {   //cache open returns a promise
        cache.addAll([
          '/',
          '/index.html',
		  '/Summary.html',
		  '/Recent.html',
          '/script.js',
          '/style.css',
		  '/manifest.json',
		  '/PWA/Fonts/Occupied Italic.otf',
		  '/PWA/Fonts/Occupied.otf',
		  '/PWA/Fonts/Targa.ttf',
		  '/PWA/Pictures/Current.png',
		  '/PWA/Pictures/Parking.png',
		  '/PWA/Pictures/Recent.png',
		  '/PWA/Pictures/Summary.png',
		  '/PWA/Pictures/icons/icon-72x72.png',
		  '/PWA/Pictures/icons/icon-96x96.png',
		  '/PWA/Pictures/icons/icon-128x128.png',
		  '/PWA/Pictures/icons/icon-144x144.png','/PWA/Pictures/icons/icon-152x152.png','/PWA/Pictures/icons/icon-192x192.png',
		  '/PWA/Pictures/icons/icon-384x384.png','/PWA/Pictures/icons/icon-512x512.png'
		  
        ]);
      })
  );
});

self.addEventListener('activate', function () {  //activate and
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {  //triggered when you fetch something in the index/html - css, script
  event.respondWith(		//respond by reaching out to the cache
    caches.match(event.request)  //match request in the cache
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});

