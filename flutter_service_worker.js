'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "a6aabe163dc8d1e229ed9daea2ffd61d",
"/main.dart.js": "ff951f9a837fa8dadb99d1bfd179a9b6",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "e5502452c30f63e6bcf1869acc215c65",
"/assets/LICENSE": "79243888b5aaced93be76c48b6bffed5",
"/assets/AssetManifest.json": "a0554c091542f0febb488b166369ffce",
"/assets/FontManifest.json": "9a366fdfa63ae72c2074572d2f2ebb31",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/RobotoMono-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/CustomIcons.ttf": "ad1da1ff414f3ff86b51b6bdef56d283",
"/assets/assets/image.jpg": "1f649291037e42fb0605ec5f0f38f122",
"/.idea/vcs.xml": "f990e6d29e03715a04983dd2f51d3595",
"/.idea/workspace.xml": "4eee365a09efcb774e8f4d5f074d2b2f",
"/.idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
"/.idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
"/.idea/misc.xml": "5324b724c63c57f0a0b172b45fafc6c4"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
