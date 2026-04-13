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
const item = document.querySelectorAll(".item");

console.log(item);
