self.addEventListener('install', function (event) {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  '../**/*',
  '../html',
  '../html/*.html',
  '../styles/',
  '../styles/*.css',
  '../script/',
  '../script/*.js',
  '../img/',
  '../img/**/',
  '../img/**/*.png'
];

// Instalando o Service Worker e fazendo cache dos recursos necessários
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Buscando os recursos do cache quando offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Atualizando o Service Worker e limpando o cache antigo
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
