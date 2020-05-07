if (navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js').then(registration => {
    console.log('成功', registration)
  }).catch(err => {
    console.log('失败')
  })
}
