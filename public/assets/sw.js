const cacheName = 'news-v1';

const staticAssets = [
  './',
  '../app/views/home.html',
  '../app/views/nav.html',
  './home.html',
  './nav.html',
  '../index.html',
  './app1.js',
  './app.js',
  './angular-route.js',
  './angular-ui-router.min.js',
  './angular.js',
  './bootstrap.min.css',
  './bootstrap.min.js',
  './jquery.min.js',
  './manifest.json',
  './material.min.js',
  './ripples.min.js',
  './typeahead.bundle.min.js',
  './typeahead.jquery.js',
  './images/logo2.png',
  './images/austria.png',
  './images/germany.png',
  './images/singapore.png',
  './images/products.png',
  '../assets/js/vendor/angular-ui-router.min.js',
  '../assets/js/vendor/material.min.js',
  '../assets/js/vendor/ripple.min.js',
  './angular-ui-router.min.js',
  './material.min.js',
  './ripple.min.js',
  './styles.css',
  './css/app.css',
  './fallback.json',
  './images/fetch-dog.jpg'
];

self.addEventListener('install', async function () {
  const cache = await caches.open(cacheName);
  cache.addAll(staticAssets);
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  return cachedResponse || fetch(request);
}

async function networkFirst(request) {
  const dynamicCache = await caches.open('news-dynamic');
  try {
    const networkResponse = await fetch(request);
    dynamicCache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (err) {
    const cachedResponse = await dynamicCache.match(request);
    return cachedResponse || await caches.match('./fallback.json');
  }
}