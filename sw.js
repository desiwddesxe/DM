var CACHE_NAME = 'dama-v1';
var urlsToCache = [
    '/',
    '/index.html',
    '/favicon.ico?v=wAXPRXGly8',
    '/styles/fonts/CanterBold.woff2',
    '/webfonts/fa-regular-400.ttf',
    '/webfonts/fa-brands-400.ttf',
    '/webfonts/fa-solid-900.ttf',
    '/webfonts/fa-regular-400.woff',
    '/webfonts/fa-brands-400.woff',
    '/webfonts/fa-solid-900.woff',
    '/webfonts/fa-regular-400.woff2',
    '/webfonts/fa-brands-400.woff2',
    '/webfonts/fa-solid-900.woff2',
    '/data/artwork.json',
    '/data/photography.json',
    '/styles/main.css',
    '/scripts/main.js'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
