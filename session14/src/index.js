// console.log('hello')
//function <functionname> { return somevalue(optional) }
const {func2} = require('./util')
// import * as f from './util.js'; 
// let n = 10;
function speak(...args)  {
   return args;
}

console.log(speak(4, 7, 8, 9, 10))



// console.log(f(1, 2, 3, 4))

console.log(func2(1, 2, 3, 4))

// module.exports OR exports