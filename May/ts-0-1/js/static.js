"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = 'coolfe';
        this.age = 12;
        this.name = name;
        this.age = age;
    }
    Person.prototype.run = function () {
        return this.name + " \u5728\u8FD0\u52A8";
    };
    // 静态方法
    Person.getInfo = function () {
        console.log('我是静态方法，不能被其他人调用');
    };
    return Person;
}());
// let p = new Person('1',13);
// Person.getInfo();
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name, age) {
        return _super.call(this, name, age) || this;
    }
    return Web;
}(Person));
var w = new Web('这是我啊', 1);
console.log(w.run());
// 多态
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('吃的方法');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '吃肉';
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + '吃粮食';
    };
    return Cat;
}(Animal));
// 抽象类
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1(name) {
        return _super.call(this, name) || this;
    }
    Dog1.prototype.eat = function () {
        console.log(this.name + '吃粮食');
    };
    return Dog1;
}(Animal1));
var d = new Dog1('花花');
d.eat();
function print(name) {
    console.log(name.firstName, name.secondName);
}
print({
    firstName: 'cool',
    secondName: 'fe'
});
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('name', '张三'));
// 泛型
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m = new MinClass();
m.add(0);
m.add(1);
console.log(m.min()); // 0
var n = new MinClass();
n.add('a');
n.add('b');
console.log(n.min()); // 'a'
var getData = function (value) {
    return value;
};
function getData1(value) {
    return value;
}
// 泛型类
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Article = /** @class */ (function () {
    function Article(params) {
        this.title = params.title;
        this.desc = params.desc;
    }
    return Article;
}());
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MysqlDb;
}());
var u = new User();
u.username = 'cool';
u.password = '123456';
var Db = new MysqlDb();
Db.add(u);
var article = new Article({
    title: '国内文章',
    desc: '简介'
});
var Db1 = new MysqlDb();
Db1.add(article);
// 装饰器 -- 不可传参
function logClass(params) {
    // params 就是当前的类
    params.prototype.apiUrl = '动态扩展的属性';
    params.prototype.run = function () {
        console.log('我是一个 run 方法');
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () { };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
console.log(http.apiUrl);
http.run();
// 装饰器 -- 可传参
function logClass1(params) {
    return function (target) {
        // params 是装饰器的参数 或者 当前的类
        console.log(params, 'params');
        console.log(target, 'target');
    };
}
var HttpClient1 = /** @class */ (function () {
    function HttpClient1() {
    }
    HttpClient1.prototype.getData = function () { };
    HttpClient1 = __decorate([
        logClass1('hello')
    ], HttpClient1);
    return HttpClient1;
}());
var http1 = new HttpClient1();
// 方法装饰器
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
    }
    HttpClient2.prototype.getData = function () { };
    __decorate([
        logClass1('xxx')
    ], HttpClient2.prototype, "getData", null);
    return HttpClient2;
}());
// 属性装饰器
var HttpClient3 = /** @class */ (function () {
    function HttpClient3() {
    }
    HttpClient3.prototype.getData = function () { };
    __decorate([
        __param(0, logClass1('xxx'))
    ], HttpClient3.prototype, "getData", null);
    return HttpClient3;
}());
