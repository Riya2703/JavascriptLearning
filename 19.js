// ARROW FUNCTIONS
// paranthesis k aage se function hata do arrow laga do

const singHappyAnniversary = () => {
    console.log("happiee bday reelu");
}
singHappyAnniversary();

// basically there are three ways to declare a function :
// arrow function, function declaration, function expression

// const isEven = (number) => {
//  if(number %2 ===0)
//  return "even";   
// }
// console.log(isEven(6));

const isEven = number => number%2 ===0;
console.log(isEven(6));
// when  there is only one parameter you can remove the bracket as well, and if ek hi line return kare to braces ko b remove krdoo