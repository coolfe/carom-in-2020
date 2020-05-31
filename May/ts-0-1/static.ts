class Person {
  name = 'coolfe';
  age = 12;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  run() {
    return `${this.name} 在运动`
  }
  // 静态方法
  static getInfo() {
    console.log('我是静态方法，不能被其他人调用')
  }
}

// let p = new Person('1',13);
// Person.getInfo();

class Web extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }
}

let w = new Web('这是我啊', 1);
console.log(w.run());

// 多态
class Animal {
  name: string
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log('吃的方法')
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat() {
    return this.name + '吃肉'
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  eat() {
    return this.name + '吃粮食'
  }
}

// 抽象类
abstract class Animal1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract eat(): any
}

class Dog1 extends Animal1 {
  constructor(name: string) {
    super(name)
  }
  eat() {
    console.log(this.name + '吃粮食')
  }
}

var d = new Dog1('花花');
d.eat();


// 属性接口
interface FullName {
  firstName: string;
  secondName: string
}
function print(name: FullName) {
  console.log(name.firstName, name.secondName)
}
print({
  firstName: 'cool',
  secondName: 'fe'
})

// 函数类型接口
interface encrypt {
  (key: string, value: string): string
}
let md5: encrypt = function (key: string, value: string): string {
  return key + value;
}
console.log(md5('name', '张三'));

// 泛型
class MinClass<T> {
  public list: T[] = [];
  add(num: T): void {
    this.list.push(num);
  }
  min(): T {
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
m.add(1);

console.log(m.min()); // 0

let n = new MinClass<string>();
n.add('a');
n.add('b');

console.log(n.min()); // 'a'

// 泛型接口
interface configFn {
  <T>(value: T): T;
}
let getData: configFn = function <T>(value: T): T {
  return value;
}

interface configFn1<T> {
  (value: T): T
}
function getData1<T>(value: T): T {
  return value;
}

// 泛型类
class User {
  username: string | undefined;
  password: string | undefined
}
class Article {
  title: string | undefined;
  desc: string | undefined;
  constructor(params: {
    title: string | undefined;
    desc: string | undefined;
  }) {
    this.title = params.title;
    this.desc = params.desc;
  }
}
class MysqlDb<T> {
  add(info: T): boolean {
    console.log(info)
    return true;
  }
}
let u = new User();
u.username = 'cool';
u.password = '123456';

let Db = new MysqlDb<User>();
Db.add(u)

let article = new Article({
  title: '国内文章',
  desc: '简介'
});

let Db1 = new MysqlDb<Article>();
Db1.add(article);

// 装饰器 -- 不可传参
function logClass(params: any) {
  // params 就是当前的类
  params.prototype.apiUrl = '动态扩展的属性';
  params.prototype.run = function () {
    console.log('我是一个 run 方法');
  }
}

@logClass
class HttpClient {
  getData() { }
}

let http: any = new HttpClient();
console.log(http.apiUrl);
http.run()


// 装饰器 -- 可传参
function logClass1(params: any) {
  return function (target: any) {
    // params 是装饰器的参数 或者 当前的类
    console.log(params,'params');
    console.log(target,'target');
  }
}
@logClass1('hello')
class HttpClient1 {
  getData() { }
}

let http1: any = new HttpClient1();

// 方法装饰器
class HttpClient2 {
  @logClass1('xxx')
  getData() { }
}
// 属性装饰器
class HttpClient3 {
  getData(@logClass1('xxx')) { }
}


