"use strict";
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
