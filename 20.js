// // intro to hoisting
//  hello()

//  function hello(){
//     console.log("hey riya, you are doing great");
//  }

//  // basically you can do this in only func declaration method.
// //  hoisting ka mtlb func pehle b declare kar sakte ho
// console.log(hello111);
// const hello111 = "hello world";
// console.log(hello111)

//  undefined kyu aaya???? kyuki var/const use karke variable banaya or declare krne se pehle hi call kr dia

// Function inside function

const app= () => {
    const myFunc = ()=> {
        console.log("hello from myFunc");
    }

    const addTwoNumbers= (num1, num2) => {
        return num1 + num2;
    }
    const multi = (num1, num2) => num1 * num2;
     
    console.log("inside app");
    myFunc();
    console.log(addTwoNumbers(4,7));
    console.log(multi(349, 8));
}
app();
// andrrr vale func andrrr hi call krdo