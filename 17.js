// how to iterate objects

const person = {

    name: "riya", age:18, hobbies: ["guitar","ukulele","piano"]
}
// for in loop
// Object.keys 

// for(let i in person){
// //     console.log(i);
// // console.log(person[i]);
// // for key value pair
// // console.log(`${i} : ${person[i]}`); 

// // console.log(i,":",person[i]);
// }


// console.log(typeof(Object.keys(person)));
// const val = Array. isArray((Object.keys(person)));
// console.log(val);

for(let key of Object.keys(person)){
    console.log(person[key]);
}