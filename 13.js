// array push pop

// array shift unshift

let fruits = ['apple','mango','banana'];
console.log(fruits);
//push, array is mutable
fruits.push("grapes");
console.log(fruits);
//console.log(fruits.pop());
//its doesnot only removes the last element but also returns it, for eg if you do console.log, it gives grapes

let poppedFruit = fruits.pop();
console.log(fruits);
console.log("poppedFruit is ",poppedFruit);

//unshift starting me add krna h
fruits.unshift("watermelon");
console.log(fruits);

//shift removes element from start
fruits.shift();
console.log(fruits);
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruit is ", removedFruit);

//push and pop are faster than compared to shift and unshift