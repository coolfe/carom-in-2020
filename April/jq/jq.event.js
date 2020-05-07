(function(){
  let events = [
    // {ele: div1, type: 'click', callback: function(){}}
  ];
  myjQuery.fn.extend({
    on(type, callback) {
      this.each(function (index, element) {
        element.addEventListener(type, callback);
        events.push({
          ele: element,
          type,
          callback
        })
      });
      return this;
    },
    off(type) {
      this.each(function (index, element) {
        let evts = events.filter(function (obj) {
            return obj.ele === element && obj.type === type;
        })
        evts.forEach(function(evt) {
          let { callback } = evt;
          element.removeEventListener(type, callback);
        })
      })
    }
  })
})()