function updateView() {
  console.log('更新视图');
}

// 添加数组监听
const oldArrayProperty = Array.prototype;
const arrProto = Object.create(oldArrayProperty);

['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
  arrProto[methodName] = function () {
    updateView();
    oldArrayProperty[methodName].call(this, ...arguments)
  }
})

function defineReactive(target, key, value) {
  // 深度监听
  observer(value);
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        // 深度监听
        observer(newValue);
        value = newValue;
        updateView();
        console.log('new', newValue)
      }
    }
  })
}

function observer(target) {
  if (typeof target !== 'object' || target === null) {
    return target;
  }
  if (Array.isArray(target)) {
    target.__proto__ = arrProto;
  }
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}

const data = {
  name: 'foo',
  age: 20,
  info: {
    city: 'beijing'
  },
  num: [1, 2, 3]
}

observer(data);
// data.num[3] = 4;
data.num.push(45);
