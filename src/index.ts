// string, boolean, number,...
let x: number = 10

x = 12

console.log(x)

// Inferência x Annotation
let y = 12

// y = 'teste'

let z: number = 12

// Tipos Básicos
let firstName: string = 'Luciano'
let age: number = 30
const isAdmin: boolean = true

// String != string

console.log(typeof firstName)
firstName = 'Zé'

console.log(firstName)

// objects
const myNumbers: number[] = [1,2,3]

console.log(myNumbers)
// console.log(myNumbers.toUppercase())
console.log(myNumbers.length)
console.log(firstName.toUpperCase())

myNumbers.push(5)

console.log(myNumbers);

// tuplas -> tuple
let myTuple: [number, string, string[]]

myTuple = [5, 'teste', ['a', 'b']]

// myTuple = [true, false, true]

// object literals

const myObject: { name: string, age: number} = {
    name: '',
    age: 0
}

// any
let a: any = 0

a = 'teste'
a = true
a = []

// union type

let id: string | number = "10"

id = 200
// id = true
id = 'xyz-654'

// Type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = 'dse-76s'

// enum
// Tamanho de roupas (size: Médio, size: Pequeno)

enum Size {
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande'
}

const camisa = {
    name: 'Gola Polo',
    size: Size.G
}

console.log(camisa);

// literal types

let teste: 'Algum Valor' | null

// teste = 'Outro Valor'
teste = 'Algum Valor'
teste = null

// Funções

function sum(a: number, b: number) {
    return a + b
}

// console.log(sum(12, '5'));
console.log(sum(10,20));

function sayHelloTo(name: string): string {
    return `Hello ${name}`
}

console.log(sayHelloTo('Luciano'));

function logger(msg: string): void { // void seria uma função que não retorna nada
    console.log(msg)
    // return 'teste'
}

logger('Teste')

function greeting(name: string, greet?: string) {
    // if(greet) {
    //     console.log(`Olá, ${greet} ${name}`)
    // } else {
    //     console.log(`Olá, ${name}`)
    // }

    console.log(`Olá, ${greet || ''} ${name}`)
}

greeting('Luciano', 'Sr.')

// Interfaces

interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1: 5, n2: 10}));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}

console.log(multiplyNumbers({n1: 5, n2: 10}));

// Narrowing
// checagem de tipos

function doSomething(info: number | boolean) {
    if(typeof info === 'number') {
        console.log(`O número é ${info}`)
    }

    console.log("Não foi passado um número")
}

doSomething(5)
doSomething(true)

// Generics

function showArrayItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1, 2, 3]
const a2 = ['a', 'b', 'c']

showArrayItems(a1)
showArrayItems(a2)

// classes

class User {
    name
    role
    isAproved

    constructor(name: string, role: string, isAproved: boolean) {
        this.name = name
        this.role = role
        this.isAproved = isAproved
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`)

    }

    showUserRole(canShow: boolean): void {
        if(canShow) {
            console.log(this.role);
            return
        }
        console.log('Informação restrita.');

    }
}

const Ze = new User('Zé', 'admin', true)

console.log(Ze)
Ze.showUserName()
Ze.showUserRole(false)

// Interfaces em classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car('VW', 4)

fusca.showBrand()


// herança

class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
}

const ferrary = new SuperCar('Ferrary', 4, 2.0)
ferrary.showBrand()

// decorators

// Constructor decorator
function BaseParameters() {
    return function<T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}

@BaseParameters()
class Person {
    name

    constructor(name: string) {
        this.name = name
    }
}

const sam = new Person('Sam')
console.log(sam)
