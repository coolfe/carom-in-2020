(function (global) {
  function myjQuery(selector) {
    return new myjQuery.fn.init(selector);
  }
  myjQuery.fn = myjQuery.prototype = {
    constructor: myjQuery,
    init: function (selector) {
      // 添加判断是 DOM 还是选择器
      if (myjQuery.type(selector) === 'string') {
        const elements = document.querySelectorAll(selector);
        for (let i = 0; i < elements.length; i++) {
          this[i] = elements[i];
        }
        this.length = elements.length;
      } else if (selector.nodeType) {
        // DOM 元素
        this[0] = selector;
        this.length = 1;
      }
    },
  }
  // 此时创建的 myjquery 是 init 构造函数的实例
  // css 方法在 myjQuery prototype 对象中
  // 为了让 myjQuery 的 对象可以访问到 css 方法，把 init 的原型继承 myjQuery prototype
  myjQuery.fn.init.prototype = myjQuery.fn;

  myjQuery.fn.extend = myjQuery.extend = function (...args) {
    let target;
    let sources = [];

    if (args.length === 1) {
      target = this;
      sources.push(args[0]);
    } else {
      target = args[0];
      sources.push(...args);
      sources.splice(0, 1);
    }
    sources.forEach(function (source) {
      Object.keys(source).forEach(function (key) {
        target[key] = source[key];
      })
    })
    return target;
  }
  global.$ = global.myjQuery = myjQuery;
})(window);

