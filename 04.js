// string indexing

let first_name= "rilu"

// r i l u
// 0 1 2 3

console.log(first_name[2]);
console.log(first_name.length);
// length of string
// firstName.length
console.log(first_name[first_name.length-1]);

// last index: length-1

// trim()
let first$name= "   REEeeluyaar   ";
console.log(first$name.length);
let newString = first$name.trim() //reeluyaar
console.log(newString);
console.log(newString.length);

// toUpperCase()
console.log(first_name.toUpperCase());
console.log(newString.toUpperCase());
// strings are immutable

first$name= first$name.toLocaleUpperCase();
console.log(first$name);
// toLowerCase()

first$name= first$name.toLocaleLowerCase();
console.log(first$name);

// kuch particular characters , slice()
// start index, end idx

let newwwString = first$name.slice(3,8);
console.log(newwwString);