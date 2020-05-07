myjQuery.fn.extend({
  css(...args) {
    const arg1 = args[0];
    const arg2 = args[1];
    if (args.length === 1) {
      if (myjQuery.type(arg1) === 'string') {
        // 获取样式
        let firstDom = this[0];
        let domStyle = window.getComputedStyle(firstDom, null);
        return domStyle[arg1];
      } else {
        let _that = this;
        jQuery.each(arg1, function (key, value) {
          _that.css(key, value);
        })
        return _that;
      }
    } else {
      // this 一个 myjquery 对象
      return this.each(function () {
        // this 一个 DOM
        this.style[arg1] = arg2;
      })
    }
  },
  show() {
    return this.css('display', 'block');
  },
  hide() {
    return this.css('display', 'none');
  },
  toggle() {
    this.each(function () {
      let $this = myjQuery(this);
      $this[$this.css('display') === 'none' ? 'show' : 'hide']();
    })
  }
})