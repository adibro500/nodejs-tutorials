const _ = require('lodash');

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = _.concat(arr2, arr1);
console.log(arr3); 

let arr4 = _.difference(arr3, arr1);

console.log(arr4); 

let arr5 = _.union(arr3, arr2);

console.log(arr5);

let arr6 = _.uniq(arr5, arr1);

console.log(arr6);

let array1 = [{name: 'pratik', age: 22},{name: 'ramesh', age: 23}, {name: 'rahul', age: 22}];

console.log(_.sortBy(array1, 'age'));