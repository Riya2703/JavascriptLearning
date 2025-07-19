// objects reference type
// array are good but not sufficient
// for real world data
// objects store key value pairs
// objects dont have index

// how to create objects
const person = {name:"harsh",age:18};
console.log(person);
console.log(typeof(person));

// data access
console.log(person.age);
// key-value pair, key - properties
const key = "email";
const person1 = {
    name1: 'riya',
    age2: 21,
    hobbies: ["irritated",'annoying','cunning','soft']
}

console.log(person1.hobbies);
person1.gender = 'female';
console.log(person1.gender);
// difference between dot and bracket notation

person1[key]= "riyasri@gmail.com";
console.log(person1);
