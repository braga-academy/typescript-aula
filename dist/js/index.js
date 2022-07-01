"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 12;
console.log(x);
let y = 12;
let z = 12;
let firstName = 'Luciano';
let age = 30;
const isAdmin = true;
console.log(typeof firstName);
firstName = 'Zé';
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, 'teste', ['a', 'b']];
const myObject = {
    name: '',
    age: 0
};
let a = 0;
a = 'teste';
a = true;
a = [];
let id = "10";
id = 200;
id = 'xyz-654';
const userId = 10;
const productId = 'dse-76s';
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: 'Gola Polo',
    size: Size.G
};
console.log(camisa);
let teste;
teste = 'Algum Valor';
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Luciano'));
function logger(msg) {
    console.log(msg);
}
logger('Teste');
function greeting(name, greet) {
    console.log(`Olá, ${greet || ''} ${name}`);
}
greeting('Luciano', 'Sr.');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 5, n2: 10 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 5, n2: 10 }));
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`);
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArrayItems(a1);
showArrayItems(a2);
class User {
    constructor(name, role, isAproved) {
        this.name = name;
        this.role = role;
        this.isAproved = isAproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(this.role);
            return;
        }
        console.log('Informação restrita.');
    }
}
const Ze = new User('Zé', 'admin', true);
console.log(Ze);
Ze.showUserName();
Ze.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car('VW', 4);
fusca.showBrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const ferrary = new SuperCar('Ferrary', 4, 2.0);
ferrary.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person('Sam');
console.log(sam);
