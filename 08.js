// truthy and falsy values

// falsy values
// false
//null
// undefined
// 0

let firstName= "";
if(firstName){
    console.log(firstName);

}
else{
    console.log("first kinda empty");
}

// truthy 
// "abc", 1 -1


// let age = 15;
// let drink;
// if(age>=5){
//     drink = "coffee";
// }
// else{
//     drink="milk";
// }
// console.log(drink);

// ternary operator
let age = 8;
let drink = age>= 5? "coffee" : "milk";
console.log(drink);

// and or operator
let Name = "riya";
let axge = 21;
// if(Name[0]=="r"){
//     console.log("your name starts witth R");
// }
// if(axge>18){
//     console.log("above 18");
// }
// both condition should be true
if(Name[0]=="r" && axge>18){
    console.log("Name starts with R and is an adult");
}

if(Name[0]=="r" || axge<18 ){
    console.log("either name is R or is less than 18");
}
