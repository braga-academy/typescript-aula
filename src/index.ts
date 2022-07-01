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
