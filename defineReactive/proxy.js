const d = { name: 'coo', age: 20, numData: [1, 2, 3] }
const proxyData = new Proxy(d, {
  
  get(target, key, receiver) {
    // 只处理本身（非原型）的属性
    const ownKeys = Reflect.ownKeys(target);
    if (ownKeys.includes(key)) {
      // console.log('get',key)
    }
    const result = Reflect.get(target, key, receiver);
    console.log(result, target, key, receiver)
    return result;
  },
  set(target, key, val, receiver) {
    const oldVal = target[key];
    if (val === oldVal) {
      return true;
    }
    const result = Reflect.set(target, key, val, receiver);
    console.log('set', key, val)
    return result;
  },
  deleteProperty(target, key) {
    const result = Reflect.deleteProperty(target, key);
    return result;
  }
})
