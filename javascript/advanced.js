// function - function is a reusable block of code

// syntax :
// function add(){
//     console.log(4 + 5)
// }

// add()
// add()
// add()
// add()

// Types or Ways to create a function
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function
// 4. Immediately Invoked function (Self invoking function)

// 1. Function Declaration

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// console.log(multiply(40, 15));
// console.log(multiply(4, 15));
// console.log(multiply(420, 15));
// console.log(multiply(444, 15));
// console.log(multiply(4033, 15));

// 2. Function Expression
// Write a function to check whether the number is even or odd

// const evenOddChecker = function (num) {
//   if (num % 2 === 0) {
//     console.log(`${num} is even`);
//   } else {
//     console.log(`${num} is odd`);
//   }
// };

// evenOddChecker(34);
// evenOddChecker(17);

// 3. Arrow Function (2015 ES6) - Preference

// const multiply = (num1, num2) => console.log(num1 * num2);

// multiply(3, 4);

// const evenOddChecker = (num) => {
//   return num % 2 == 0 ? "number is even" : "number is odd";
// };

// console.log(evenOddChecker(5));
// console.log(evenOddChecker(18));

// Self invoking function : this function you will use only to do some urgent task without bothering the other code

// (function () {
//   console.log(4**3);
// })();

(() => {
  let secret = "1234";
  console.log("Inside : ", secret);
})();

// not accessible outside the function 
console.log("outside : ", secret);
