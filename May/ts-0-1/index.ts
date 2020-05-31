let a: string = 'aaa';
let arr: Array<number, string > = ['1', 2];
enum b  { success = 1, error = 2 }
console.log(b.success);

// ts 的重载函数
function getInfo(name: string): string;
function getInfo(age: number): string;
function getInfo(str: any): any {
  if (typeof str == 'string') {
    return `I am a ${str}`;
  } else {
    return `My age is ${str}`;
  }
}

console.log(getInfo('coolfe'));
console.log(getInfo(12));