// Step 1 : Grab all the DOM elements at once
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

// Step 2: State - all data lives
let todos = [];

// Step 3 : Add a Todo
const addTodo = () => {
  const text = input.value.trim();
  // console.log(text);
  if (text == "") return;

  const newTodo = {
    id: Date.now(), // unique ID
    text: text,
    completed: false,
  };

  todos.push(newTodo);
  input.value = "";
  render();
};

// step 4 : delete the todo
function deleteTodo() {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

// step 5 : Toggle completed
function toggleTodo() {
  todos = todos.map((todo) => {
    if (todo.id == id) {
      // spread operator
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  render();
}

function render() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
  });

  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", () => toggleTodo(todo.id));

  span.textContent = todo.text;

  if (todo.completed) {
    span.style.textDecoration = "line-through";
    span.style.opacity = "0.5";
  }

  delBtn.textContent = "❌";
  delBtn.addEventListener("click", () => deleteTodo(todo.id));

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);
}

addBtn.addEventListener("click", addTodo);
