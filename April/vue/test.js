function vue() {
  this.$data = { a: 1 };
  this.el = document.getElementById('app');
  this.virtualdom = '';
  this.observe(this.$data);
  this.render();
}

vue.prototype.observe = function (obj) {
  var value;
  var self = this;
  for (var key in obj) {
    value = obj[key];
    if (typeof value === 'object') {
      this.observe(value);
    } else {
      Object.defineProperty(this.$data, key, {
        get: function() {
          return value;
        },
        set: function(v) {
          value = v;
          self.render();
        }
      })
    }
  }
}

vue.prototype.render = function () {
  this.virtualdom = `i am ${this.$data.a}`;
  this.el.innerHTML = this.virtualdom; 
}

var arrayPro = Array.prototype;
var arrayob = Object.create(arrayPro);
var arr = ['push','pop','shift'];
arr.forEach((method, index) => {
  arrayob[method] =  function() {
    var ret = arrayPro[method].apply(this, arguments);
    dep.notify();
    return ret;
  }
})

