self.onmessage = function(event) {
  let data = event.data;
  this.postMessage(data);
}