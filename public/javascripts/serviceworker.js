var CACHE_NAME = 'pwa-sample-cache-v1';
var urlsToCache = [
    '/',
    '/manifest.json',
    '/images/favicon.png',
    '/stylesheets/style.css',
    '/serviceworker.js',
    // '/javascripts/main.js',
];

// インストール処理
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache.map(url => new Request(url, {credentials: 'same-origin'})));
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function (response) {
                return response ? response : fetch(event.request);
            })
    );
});

