// primitive vs reference data types

// primitive types

let num1= 6;
let num2= num1;
console.log("value of num1 is ",num1);
console.log("value of num2 is ",num2);
num1++;
console.log(num1);
console.log(num2);

// reference types
// array
let array1 =["item 1", 'item2'];
let array2 = array1;
console.log("array 1 ", array1 );
console.log("array 2 ", array2);
array1.push("item3");
console.log("after puhing element to array 1 ");
console.log(array1);
console.log(array2);

//primtive - after pushing increment was only in num1 and not num 2
//reference- after pushing increment was in both the arrays

// primtive types are stored in captureOwnerStack,
// num 2 ko alag se jagah milegi stack me aur num 1 alag jgh rhega stack me, primitve type ko zada memory nahi chahiye hoti hai isliye stack me store kar lete hai

//reference type
// let arr1 heap me store hoga item1 , item 2
// stack me hoga pointer arr 1 jisme arr1 ka address hoga
// arr2=array1
// yaha pe array2 k liye ek naya pointer banega, par iss pointer ko b same address mil jayega
// arr1 print- pointer k pass addd, print kr dia
// arr 2 b same , ab item 3 push krdo arr 1 me, ab jab arr2 k pass jaoge to uske pass b same add hai to vo b isliye 3 item print krega.
// basically there exists a same array in memory , its just that both of them have diff pointers to the same address

// how to clone array

let arr1 = ['item1', 'item2'];
// let arr2 = arr1;
// let arr2 = ['item1', 'item2']; but for 1000s? of arr!!!!!!????


// method 1- slice()
let arr2 = arr1.slice(0);
console.log(arr1===arr2);
console.log(arr1);
console.log(arr2);

// method 2- [].conact()
let arr3= [].concat(arr1);
console.log(arr1);
console.log(arr3);

// method 3- spread operator [...]
let arr4 =[...arr1];
console.log(arr4);

// fastest - slice, most used - spread

// how to add more elements after conact
let arr5=[].concat(arr1,['item30', 'item40']);
console.log(arr5);
let arr6= [...arr5, 'riya','kush'];
console.log(arr6);
let arr7 = [...arr5,...arr3];
console.log(arr7);

// for loop in an array
let fruity = ['apple','mango','grapyy','lichi'];
for(let i=0;i<=9;i++){
    console.log(i);
}
console.log(fruity.length);
console.log(fruity[2]);
let fruity2=[];
for(let i=0; i<fruity.length;i++){
    fruity2.push(fruity[i].toUpperCase());
}
console.log(fruity2);

// use const for creating array

//heap memory 0x11
const fruits3 = ['apple', ' mango']; //0x11
// fruits3=['grapes','pineapple']; assign to constant
fruits3.push("bananan");
console.log(fruits3);

//mostly const is used for primitive types and array

// while loop in array

const fruity4 = [];
let l=0;
while(l<fruity.length){
    fruity4.push(fruity[l].toUpperCase());
    l++;
}
console.log(fruity4);

// for of loop in array widely used
const riya = ['rilu','tilu','gullee'];
for(let fruit of riya){
    console.log(fruit);
}

for(let index in riya){
    console.log(index);
}

for(let index in riya){
    console.log(riya[index]);
}