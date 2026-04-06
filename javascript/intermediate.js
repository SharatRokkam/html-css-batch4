// Arithmetic Operator = +, - , /, %, *, **

// let marks1 = 45;
// let marks2 = 54;

// console.log("Addition : ", marks1 + marks2);
// console.log("Substraction : ", marks2 - marks1);
// console.log("Multiply : ", marks1 * marks2);
// console.log("Divide : ", marks2 / marks1);
// console.log("Remainder :", marks2 % marks1);
// console.log("Exponentiation", 4 ** 3);

// Assignment operator -> = , -=, +=, *=, /=, %=

// let score = 3;

// score = score + 4;
// score += 4;

// score = score - 2; // 3 - 2 -> 1
// score -=  2; // 1 - 2
// console.log(score); // -1

// Comparison Operator -> ==, ===, !=, >=, <=

// let a = 10;
// let b = "10";

// console.log(typeof a);
// console.log(typeof b);

// Interview question-  == vs ===

// loosely checks -> == it just checks the value
// console.log(a == b); //10 == "10"
// // strictly checking , === checks the value and data type
// console.log(a === b); // 10 === "10"

// let x = 10;
// let y = "30";

// number + string
// String Operator
// console.log(x + y); //1030
// console.log(x  - y)  // 30 - 10 -> 20

// console.log(34 >= 45);
// console.log(45 <= 30);
// console.log(45 != 45);

// Logical Operator  - &&, ||, !

let age = 30;

// && - both side should be true then only it will give you true otherwise it will give you false
// console.log(age > 18 && age < 25);

// // || - anyone side should true then you get true or false
// console.log(age > 18 || age < 25);

// *********************************************************************************
// Arrays

// There are two ways of creating arrays

// 1st way of creating array
// console.log(storeroom);

// 2nd way of creating array
// Constructor Array
// let score = new Array(2, 5, 3, 2, 6, 7);
// console.log(score);

// let storeroom = ["Table", " Chairs", "Sofa", true, false, 50];

// Array Methods

// length to check the length of the array
// console.log(storeroom.length);

// console.log(storeroom[4]);

// push -  insert the value at the end of the array

// console.log(storeroom.push("study table"));
// console.log(storeroom);

// pop - removes the last element fromt the array
// console.log(storeroom.pop())

// console.log(storeroom);

// shift - remove the first element form the array
// console.log(storeroom.shift());
// console.log(storeroom);

// unshift will insert the value in the start of the array
// console.log(storeroom.unshift("bat"));
// console.log(storeroom);

// storeroom[4] = "Vijay";
// console.log(storeroom);

// let newarray = ["Hello", "World"]

// console.log(newarray.join("+"))

// let a = [1, 2, 3];
// let b = ["Vijay", "Yashraj"];

// console.log(a.concat(b));

// push, pop, shift, unshift, concat, join 