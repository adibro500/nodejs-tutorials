//if else
let color = 'blue'
if(color == 'red') {
    console.log('color is red');
} else {
    console.log('color is not red');
}
//if else
const day = new Date().getDay();
if(day == 0) {
    console.log('->Today is Sunday!');
} else if(day != 0){
    console.log('->Today is not Sunday!');
}
//switch case
switch(new Date().getDay()) {
    case 0:
        console.log('Today is Sunday!')
        break;
    case 1:
        console.log('Today is Monday!')
        break;
    default:
        console.log('Today is not Sunday!')
        break;
}
//for loop
for(let i=100;i>=0;i=i-2) {
    console.log(i)
}

//for loop in object
let user = {
    id: '1',
    name: 'rohit',
    score: 21
}

for(let x in user) {
    console.log(user[x])
}

// for loop of arrays

let arr = [1, 2, 3, 4, 5]

for(let a of arr) {
    console.log("a: "+a)
}

// while loop
let i = 5

while(i >= 0) {
    console.log('value: '+i);
    i--;
}

//do while
let h = 10;
do {
console.log('value of h is greater than 9');
}while(h > 11);

//implicit data conversions in js

const data = 12 + 23
console.log(data)

console.log(1 > 2 > 3 == 5)

// >, <, ==, ===, !=, !==, >=, <=

//> -> greater than
//< -> less than
//== -> equals
//=== -> equals by value and by type
//!= -> not equals
//!== -> not equals by value or by type
//>= -> greater than or equals to
//<= -> less than or equals to
const k = 100
if(k == 100) {
    console.log('century!')
} else {
    console.log('not a century');
}

while(k == 100) {
    console.log('century')
    break;
}