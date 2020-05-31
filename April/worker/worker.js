self.onmessage = function(event) {
  // 它的 data 属性包含主线程发来的数据。
  // self.postMessage() 方法用来向主线程发送消息
  let data = event.data;
  this.postMessage(data);
}