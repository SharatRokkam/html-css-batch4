// console.log("Hello Nodejs")

// REPL - play ground
// Read evaluate print loop
// quick calculations, debuggings..

// NodeJS - special ability
// file handling - fs, os, path...

// Modules  - 3 types modules
// 1. inbuilt module - fs, path, os
// 2 . local modules - new.js, new1.js
// 3. third party module - express, nodemon

// File - html, css, js, audio, video, pdf...

// 1. Built In module
const fs = require("fs");

const path = require("path");
const os = require("os");

// writefile replace the previous data
// fs.writeFile("data.txt", "Hello Students\n", (err) =>{
//     if(err) throw err;
//     console.log("file written successfully")
// })

// fs.appendFile("data.txt", "9393939390", (err) =>{
//     if(err) throw err;
//     console.log("file written successfully")
// })

// fs.readFile("data.txt", "utf-8", (err, data) =>{
//     if(err) throw err;
//     console.log(data)
// })

// console.log(path.basename(__filename))
// console.log(path.dirname(__filename))
// console.log(path.extname(__filename))

// console.log(os.platform())

// console.log(os.cpus())
// console.log(os.freemem())

// -----------------------------------------

// Nodejs introduction - features
// REPL
//Modules export import
// fs, os, path, local

// -------------------------------------------

// google.com ----- so many file ?
// request -- > response (HTML, CSS, JS, Images)

// Reactjs, angular, nextjs

const http = require("http");

const server = http.createServer((request, response) => {
  response.end("<h1>Hello from server</h1>");
});

const PORT = 5555;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
