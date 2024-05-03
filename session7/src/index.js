console.log(10)
setTimeout(() => console.log(3), 1000);
setTimeout(() => console.log(4), 500);
setTimeout(() => console.log(5), 600);
let prom = new Promise((resolve) => setTimeout(() => resolve('hi'), 1500));

prom.then(p => console.log(p));
console.log(2)
