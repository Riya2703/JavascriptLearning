// undefined
// null

let firstName;
// const will throw error
console.log(typeof firstName);
firstName= "SUMAN";
console.log(typeof firstName, firstName);

// NULL
let myVariable= null;
console.log(myVariable);
myVariable= 'ajayy';
console.log(myVariable, typeof myVariable);
console.log(typeof null); //object datatype, its a bug, error in specifically javascript

// BigInt
let myNumber= BigInt(12378);
console.log(myNumber);
let sameNumber = BigInt(123n);
console.log(sameNumber);
console.log(myNumber+sameNumber);

console.log(Number.MAX_SAFE_INTEGER);

// booleans and comparison operator

// true or false
let num1=7;
let num2="7";

//console.log(num1<=num2);

// == VS ===
// ==myvalue check krega datatype check nahi karega isliye string and num true dikha rha h

console.log(num1===num2);
console.log(num1==num2);

// != vs !==
console.log(num1!=num2);
console.log(num1!==num2);


