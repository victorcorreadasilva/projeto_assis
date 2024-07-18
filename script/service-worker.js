self.addEventListener('install', function (event) {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});

// Instalando o Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
});

// Buscando os recursos diretamente
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

// Atualizando o Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado');
});
