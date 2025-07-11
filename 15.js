// array destructuring

const myArray = ['value1','value2'];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log(myvar1);
// console.log(myvar2);
let [myvar1, myvar2]= myArray;

console.log(myvar1);
console.log(myvar2);
myvar1 ='value changed';
console.log(myvar1, myvar2);
