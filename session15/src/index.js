import hihello, {hello, hi} from './util.js';

// hello()
// hi()
// hihello()

//1. setTimeout() 
//2. setInterval()
//3. setImmediate()

setTimeout(() => {
    console.log('hi')
}, 10);

setTimeout(() => {
    console.log('hello')
}, 0);

console.log(10)

let i = 0;
let clrnterval = setInterval(() => {
console.log(i)
i++;
if(i === 11) {
    clearInterval(clrnterval);
}
})