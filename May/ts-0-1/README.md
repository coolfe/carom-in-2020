### typescript
- 安装
  - tsc --init
    - 生成 tsconfig
  - 终端 - 运行任务 - typescript - tsc 监听
- 类型
  - string
  - boolean
  - array
    - `let arr: string[] = ['1','2']`
    - `let arr: Array<number,string> = ['1',2]`
  - enum
    - `enum a = {success = 1, error = 2}`
- 函数
  ```javascript
  function get(name: string, age: string): string {

  }
  ```
- 重载函数
```javascript
function getInfo(name: string): string;
function getInfo(age: number): string;
function getInfo(str:any):any {
  if (typeof str == 'string') {
    return `I am a ${str}`;
  } else {
    return `My age is ${str}`;
  }
}
```
- 类里面的修饰符
  - public 公有，类里面、子类、类外部可以访问
  - protected 保护类型，类里面、子类可以访问，类外部不能访问
  - private 私有，类里面可以访问，子类、类外面不能访问 
- 静态方法
  - 在一个方法前，加上 static 关键字
  - 方法不会被实例继承，而是直接通过类来调用
  - 里面没法直接调用类里面的属性，只能调用静态属性 
- 多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
- 抽象类：提供其他类继承的基类，不能直接被实例化
  - 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
  - 定标准
- interface
  - 属性类型接口
  ```javascript
  interface FullName {
    firstName: string;
    secondName: string
  }
  function print(name: FullName ) {
    console.log(name.firstName, name.secondName)
  }
  ```
  - 函数类型接口
  ```javascript
  interface encrypt {
    (key: string, value: string): string
  }
  let md5:encrypt = function(key:string, value: string):string {
    return key + value;
  }
  ```
  - 可索引值接口
  ```javascript
  interface UserArr{
    [index: number]: string
  }
  let arr:UserArr = ['1','2'];
  ```
  - 类类型接口
  ```javascript
  interface Animal {
    name: string;
    eat(str: string):void
  }
  class Dog implements Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    eat() {
      console.log(this.name)
    }
  }
  // class Web extends Programmer implements Person
  ```
- 泛型
  - 可以支持不特定的数据类型
```javascript
class MinClass<T> {
  public list: T[] = [];
  add(num: T):void {
    this.list.push(num);
  }
  min():T {
    let minNum = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum;
  }
}
let m = new MinClass<number>();

m.add(0);
```
- 装饰器
  - 概念
    - 类装饰器在类声明之前被声明，紧靠着类声明。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义
  - 执行顺序
    - 属性装饰器
    - 方法装饰器
    - 方法参数装饰器2
    - 方法参数装饰器1
    - 类装饰器

- 继承
  <!-- todo 复习继承的几种方式，缺点 -->
  - apply 继承
    - 可以继承构造函数的方法
    - 不能继承构造函数原型链的方法
  - prototype
    - Web.prototype  = new Person()
    - 可以继承构造函数里面的属性和方法
    - 也可以继承原型链上面的属性和方法
    - 实例化子类的时候无法给父级传参
  - 原型链 + 构造函数的组合继承
    - 