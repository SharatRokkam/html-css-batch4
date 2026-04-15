// Different ways of targeting or accessing the element
// 1. getElementById
// 2. getElementsByClassName
// 3. getElementsByTagname
// 4. querySelector
// 5. querySelectorAll

// const title = document.getElementById("title");
// console.log(title);

// console.log(title.textContent);

// title.textContent = "Hello Javascript";

// const items = document.getElementsByClassName("item");
// console.log(items);

// items[0].textContent = "HTML";
// items[1].textContent = "Javascript";
// items[2].textContent = "Python";

// Note : whenever you are using querySelector and all then for id and class, you must use . or # to identification.
// const item = document.querySelectorAll(".item");

// console.log(item);

// Types of Nodes
// 1. Element Node - h1, div, p, table, form
// 2. Text Node - "Hello World" (content)
// 3. Attribute node - class="box", href="www.linkedin.com"

// const heading = document.querySelector("h1");

// innerHTML, innerText and textContent - there are used to change the content of the element directly...

// heading.innerText = "Learning DOM"
// heading.innerHTML = "<p>Learning DOM 1</p>"
// heading.textContent = "Learning DOM 2";

// innertext will only display content visible on the screen
// console.log(heading.innerText)
// text node as well as it will access the inner HTML tags
// console.log(heading.innerHTML)
// will give you the complete content inside the tag
// console.log(heading.textContent)

// const heading = document.querySelector("h1");

// heading.style.color = "red";
// // in CSS we write the two word properties with - , but in JS we use camelcase convention
// heading.style.backgroundColor = "beige";
// heading.style.padding = "20px";
// heading.style.fontFamily = "arial";
// heading.style.margin = "10px";
// heading.style.textAlign = "center";

// heading.setAttribute("class", "head foot");
// console.log(heading.getAttribute("id"));

// Events ---->
// Events are the action that happen in the browser, Javascript can listen and repsond to those actions

// Event : something that happends (click, type, scroll)
// EventListener : code that reacts to it

// common types of events
// 1. mouse events
// 2. keyboard events
// 3. Form Events
// 4. Window Events

// const button = document.querySelector("button");
// const heading = document.querySelector("h1");

// button.addEventListener("mouseover", function () {
//   heading.textContent = "Hello DOM";
// });

// const box = document.querySelector("div");

// box.style.width = "200px";
// box.style.height = "150px";
// box.style.backgroundColor = "blue";
// box.style.marginTop = "20px";

// box.addEventListener("mouseover", () => {
//   box.style.backgroundColor = "red";
// });

// box.addEventListener("mousedown", () => {
//   box.style.backgroundColor = "black";
//   box.innerText = "Javascript";
//   box.style.color = "white";
// });

const input = document.querySelector("input");

// input.addEventListener("input", (e) => {
//   console.log("Typing : ", e.target.value);
// });

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  // it will stop your form by getting submitted automatically
  e.preventDefault();
  console.log("form submitted");
});

// keyup , keydown, keypress, scroll - task for tommorrow
