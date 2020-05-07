myjQuery.extend({
  each(obj, callback) {
    if ((length in obj) && obj.length >= 0) {
      for (let i = 0; i < obj.length; i++) {
        callback.call(obj[i], i, obj[i]);
        // callback.apply(obj[i], [i, obj[i]]);
        // callback.bind(obj[i])(i, obj[i]);
      }
    } else {
      for (let i in obj) {
        callback.call(obj[i], i, obj[i]);
      }
    }
  },
  type(data) {
    const type = Object.prototype.toString.call(data);
    return type.replace(/\[object|\]/g, '');
  }
})

myjQuery.fn.extend({
  each(callback) {
    myjQuery.each(this, callback);
  },
})