
// console.log('Hello world');
// setTimeout(() => {
//   console.log('Hello World!');
// }, 3000);

// console.log('当前进程 ID', process.pid);
// console.log('当前脚本路径', __filename);

// const time = new Date();
// console.log('当前时间', time.toLocaleDateString());


// var myObject = {
//   foo: 'bar',
//   func: function() {
//     var self = this;
//     console.log(this.foo, self.foo);
//     (function(){
//       console.log(this.foo, self.foo);
//     }())
//   }
// }

// myObject.func();

function f1() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      reject('你好');
    }, 1000)
  })
}

(async function () {
  try {
    const res = await f1();
    console.log(res,'成功')
  } catch (e) {
    console.log(e,'失败')
  }
})()