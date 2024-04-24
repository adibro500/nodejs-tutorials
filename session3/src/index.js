const sayhello = require('./func1')
const sayhi = require('./func2')
const class1 = require('./class1');
const claz = require('./multi');
const axios = require('axios')
const b = require('./B');

// axios.get('').then(p => console.log(p.data))

let bb = new b();

bb.returnName('HALO');

let clas = new class1();

let c = new claz.Callee();

console.log(c.subtract(3, 2));

console.log(claz.add(1, 2))

console.log(clas.sayHi('Tharun'));

console.log(sayhello('Tharun'));

console.log(sayhi("Tharun"));