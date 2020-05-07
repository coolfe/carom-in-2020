var ob = {a: 1};
new Proxy(ob, {
  get: function(target,key,reveiver) {
    return target[key];
  },
  set: function(target,key,value, reveiver) {
    // target[key] = value;
    // return Reflect.set(target,key,value);
  }
})