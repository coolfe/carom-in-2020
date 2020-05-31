self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll(['./index.html', './index.js'])
    })
  )
})
self.addEventListener('activate', function (event) {
  // ...
});

// 监听主文档中的网络请求
self.addEventListener('fetch', function (event) {
  // ...
});