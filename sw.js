/* ============================================================
   СВЕЖАЯ ВЕРСИЯ САЙТА БЕЗ ЧИСТКИ КЕША
   Этот файл трогать не нужно.

   Браузер запоминает страницы сайта, и после обновления на GitHub
   старая версия могла показываться ещё минут десять. Этот помощник
   при каждом открытии страницы сверяет её с сервером. Если файл не
   менялся, сервер отвечает коротким «без изменений», и страница
   открывается так же быстро. Если менялся, браузер сразу берёт новый.

   Фотографии и видео браузер по-прежнему хранит у себя, чтобы сайт
   быстро открывался на медленном интернете.
   ============================================================ */

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;
  if (req.destination === 'image' || req.destination === 'video') return;

  /* страницы и PDF: сверяем с сервером, редиректы отдаём браузеру как есть */
  var fresh = req.mode === 'navigate'
    ? fetch(req.url, { cache: 'no-cache', redirect: 'manual', credentials: 'same-origin' })
    : fetch(req, { cache: 'no-cache' });

  /* если сверка не удалась, открываем как обычно */
  event.respondWith(fresh.catch(function () { return fetch(req); }));
});
