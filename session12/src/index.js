//Strings

const str1 = new String('h1')
const str2 = new String('h1')


const str3 = 'h1'
let str4 = 'h1'

str4 = 'h8'

console.log(str1 == str2);
console.log(str3 === str4);
console.log(str1 === str4);

//bigint
let bi1 = BigInt(8888888888888888);
let bi2 = BigInt(8888888888888888);


console.log(bi1 == bi2);
console.log(typeof bi1, typeof bi2)

//Number
let num = 9
let num2 = 10;

console.log(num + num2 + Number(bi2))
console.log(typeof num, typeof num2)

//Symbol

const sym1 = Symbol('foo')
const sym2 = Symbol('foo')

console.log(sym1 == sym2)

//object

const obj = { name: 'hari'}
const obj2 = { name: 'hari'}

console.log(typeof obj);

console.log(obj.name === obj2.name);

// undefined, null

let j;
console.log(j)

let k = { name: 'ramesh', id: 1 }
k = null;
console.log(k);

// boolean

let p = true;
let q = true;

console.log(p === q)

// for interviews
// 1.
let arr = [];

console.log(typeof arr)

//2.
let f = () => 0

console.log(typeof f)

//3.
class A {}

console.log(typeof A)


