let app = {
  template: `<div>App</div>`
}

export var num1 = 2;

var num2 = 3;
export { num2 };

export function add(x, y) {
  return console.log(x + y);
}

export default app;