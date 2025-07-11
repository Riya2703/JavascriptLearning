// nested if else
// winning number 19, 17 too low, 20 too high

let winningNumber = 21;
let userGuess= +prompt("guess the number");

if(userGuess === winningNumber){
    console.log("guessed it right bro");
}
else{
    if(winningNumber>userGuess){
        console.log("too low");
    }
    else{
        console.log("too high");
    }
}