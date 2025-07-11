// intro to for loop
// print 0 to 9
// let i =0;
for(i=0;i<=9;i++){
    console.log(i);
}
console.log("the current value of i is ", i);

// for loop example
let total =0;
let num= 10;
for(let i=1; i<=num; i++){
    total = total+i;
}
console.log(total);

// break keyword and continue
for(let j=1; j<=10;j++){
    if(j==4){
        // break;
        continue;
// execution vapas upar chala jayega, 4 print ni hoga direct i=5 se start ho jayega
    }
    console.log(j);
}
console.log("hello there");

// do while loop
// let k=10;
// while(k<=9){
//     console.log(k);
//     k++;
// }
//no number will be printed above
let k=10;
do{
    console.log(k);
    k++;
}
while (k<=9);
//pehli baar loop chlagea uske baad condition check hogi
// do while ek baar to chalta hi chalta hai
console.log("value of k is",k);