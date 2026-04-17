// Synchronous - line by line (blocking)

// console.log("start");

// // alert, prompt -will not work without html file
// alert("wait here");

// console.log("end");

// Asynchronous

//DOM, setTimeout and setInterval - Web API, they are not part of Javascript

// console.log("start");

// setTimeout(() => {
//   console.log("Async task in progress");
// }, 2000);

// three ways of async implement
// 1. Callback function is function that takes another function as an argument

//Avoid using callbacks function as it will lead you to callback hell that creates unreadibilty in the code

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("data received");
//   }, 1000);
// }

// function newFunc(data) {
//   console.log(data);
// }

// fetchData(newFunc);

// Promises - task

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Data Received");
  }, 2000);
});

promise.then((data) => console.log(data)).catch((err) => console.log(err));

// Async Await

async function getData() {
  try {
    const data = await promise;
    console.log("data received again");
  } catch (error) {
    console.log(error);
  }
}

getData();
