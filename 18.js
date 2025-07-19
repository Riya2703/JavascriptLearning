// console.log("happy nday song");
// // baar baar krna h fir????

// function sayingHappyBirthday(){
//     console.log("happy bday to you");
// }
// sayingHappyBirthday(); // func cal

// function twoPlusFour(){
//     console.log(2+4);
// }
// twoPlusFour();
// // console.log(twoPlusFour());
// const returnValue = twoPlusFour();
// console.log(returnValue);
// func should be resuable so...
// function sumTwoNumbers(number1, number2){
//     return number1 + number2;
// }
// console.log(sumTwoNumbers(9,6));

// take a number as input , make func isEven and tell whether the number is even or odd, in bool value

// function isEven(number4){
//     return number4 % 2 === 0;
//     //     return true;
//     // else{
//     //     return false;
//     // } === ya to true dega or false
// }
// console.log(isEven(6));

// input: string
// output: firstCharacter

function firstCharacter(str){
    return str[0];
}
console.log(firstCharacter('riyaa'));


// function: ip- array, target(number), op- index of target if target is present in array

function finIndex(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]=== target) return i;
    } 
    return -1;
}
const myArray = [1,5,7,9,22,35,678]
const ans = finIndex(myArray, 22);
console.log(ans);

//function expression
const singHappyAnniversary = function(){
    console.log("happy anni to u");
}
singHappyAnniversary();