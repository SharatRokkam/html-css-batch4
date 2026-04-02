// Dowload and install nodejs on laptop and use any online editor for mobile

// html - document

// Chrome, Firefox, Opera, Edge, etc..... - Browser
// JS Engine  - programs and calculation....
// Chrome - V8 Engine, Firefox - Spider Monkey, Edge - Chakra

//What is Javascript ?

// Programming Language -  7000+
// Binary Language - 0  and 1

// High Level Dynamic Programming Language
//High Level - easy to understand for humans
//Low Level -difficult to understand for humans but easy for computer

// Javascript is a high level interpreted dynamic programming language
// high level - easy to understand
//interpreted - code gets converted line by line
// dynamic and static
// programming lang means set of instruction given to computer

// *******Very Important************
// It is also called single threaded synchronous language.

// To see output in the console
// console.log("First Line of code");
// console.log("second of line code");
// console.log("third of line code ");

// language - English - alphabets, grammar - noun, pronoun, conjuction, statement

// variables - are just a container or a box to store a value or data

// three ways to create a variable
// 1. var 2. let 3. const

// var score = 76;
// let emailid = "tes@gmail.com";
// const name123 = "Tarun";

// let $myName = "Sharath";
// const my_rollno = 232;

// Rules to follow

// 1. variables are case sensitive - score and Score are different
// 2. variables cannot start with number - 123name is not correct , name123 is correct
// 3. You cannot use JavaScript reserved keywords (such as let, const, function, return, if, etc.) as variable names.
// 4.  Names can contain letters (a-z, A-Z), digits (0-9), underscores (_), and dollar signs ($).
// 5.No Spaces or Hyphens: Variable names cannot contain spaces or hyphens (-)

// var, let and const - to create any variables

// var - traditional way of declaring variable

// declare and initialize
// var/let/const variablename = value ;

// declaration
// var baby;
// initialization
// baby = "girl";

// var baby = "boy";

// console.log(baby);

// if(true){
//     let a = 10;
// }
// console.log(a);
// Avoid using var because it gets re-declared and reintialized

// declared and intialized
// let my_name = "John";

//cannot redeclaration but reintialized with let is possible
// my_name = "Purushottam";
// console.log(my_name);

// const pi = 3.14;
// pi = 3.55;
// console.log(pi);

// var can be redeclared and reintialized
// let can be reintialized but cannot redeclared
// const cannot redeclare neither it should reinitialized

// What is a data type in javascript ?
// Data type means type of data a variable is holding

// Data types are categorized in two ways primitive and non- primitive data type

// 1. Primitive data type
// Number - 4, 49, 55.5, 66.3;
// String - character written inside double or single qoutes
// Boolean - true or false
// Undefined - value has not been assigned.
// null - when you don't have any value you intentionally put null.
// symbol - task
// BigInt - task

// 2 . Non Primitive datatypes
// 1. Array
// 2. Objects
// 3. Functions

// Number
// let marks = 50;
// let price = 99.99;

// String
// const my_name = "Tarun";
// const space = " ";
// console.log(space);

// Boolean - true or false

// let isTrainer = true;
// const isStudent = false;
// console.log(isStudent);

// Undefined
// let myKey;
// console.log(myKey);

// Null
// let box = null;
// console.log(box);

// Non - Primitive Data type

// Array - Data structure  - denoted [] square brackets

let fruits = ["banana", 45, true, undefined, null];

let veggies = ["radish", "potato", "lady's finger", "bitter gourd"];

console.log(veggies);

// Object - {}, flower brackets, curly braces

// object is used to store the data in key and value pairs

// name, roll_no, age, city , isStudent - keys
// "poojitha", 4556, 23, hyderabad, true - value
let student_data = {
  name: "Poojitha",
  roll_no: 4556,
  age: 23,
  city: "Hyderabad",
  isStudent: true,
};
