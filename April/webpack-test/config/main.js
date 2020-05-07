import Vue from './vue';

// import App from './App';
// import { num1, num2, add} from './App';
// console.log(num1, num2);
// obj.add(1, 2);

import * as obj from './App';

// console.log(obj.num1, obj.num2);
// obj.add(1, 2)
let a = '111';
const b = '222'

console.log(a, b);

new Vue({
  el: '#app',
  components: {
    App: obj.default
  },
  template: `<App />`
})