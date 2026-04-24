// import { useEffect, useState } from "react";
// import axios from 'axios';

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         const res = await axios.get(
//           "https://jsonplaceholder.typicode.com/todos/",
//         );
//         setTodos(res.data.slice(0, 5));
//         console.log(res.data);
//       } catch (err) {
//         setError("Failed to fetch the data", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTodos();
//   }, []);

//   const addTodo = async () => {
//     try {
//       const res = await axios.post(
//         "https://jsonplaceholder.typicode.com/todos/",
//         {
//           title: "New Task",
//           completed: false,
//         },
//       );

//       setTodos([res.data, ...todos]);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const deleteTodo = async () => {
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

//       setTodos(todos.filter((t) => t.id !== id));
//     } catch {}
//   };

//   if (loading) return;
//   <h2>Loading....</h2>;
//   if (error) return <h2>{error}</h2>;

//   return (
//     <>
//       <h1>Todo App</h1>

//       <button>Add Todo</button>

//       <ul>
//         {todos.map((todo) => {
//           <li>
//             {todo.title}
//             <button>❌</button>
//           </li>;
//         })}
//       </ul>
//     </>
//   );
// };

// export default App;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         const res = await axios.get("https://jsonplaceholder.typicode.com/todos/");
//         setTodos(res.data.slice(0, 20));
//       } catch (err) {
//         setError("Failed to fetch the data", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTodos();
//   }, []);

//   const addTodo = async () => {
//     try {
//       const res = await axios.post("https://jsonplaceholder.typicode.com/todos/", {
//         title: "New Task",
//         completed: false,
//       });
//       setTodos([res.data, ...todos]);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // ✅ Fix 2: Added `id` parameter
//   const deleteTodo = async (id) => {
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
//       setTodos(todos.filter((t) => t.id !== id));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // ✅ Fix 1: Removed misplaced semicolon
//   if (loading) return <h2>Loading....</h2>;
//   if (error) return <h2>{error}</h2>;

//   return (
//     <>
//       <h1>Todo App</h1>

//       {/* ✅ Fix 4: Wired onClick */}
//       <button onClick={addTodo}>Add Todo</button>

//       <ul>
//         {todos.map((todo) => (  // ✅ Fix 3: Implicit return with ( )
//           <li key={todo.id}>   {/* ✅ Fix 4: Added key prop */}
//             {todo.title}
//             <button onClick={() => deleteTodo(todo.id)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;

// ***********************************************************************************

import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((r) => r.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch todos.");
        setLoading(false);
      });
  }, []);

  const handleAdd = (todo) => setTodos((prev) => [todo, ...prev]);
  const handleDelete = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));
  const handleEdit = (id, title) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, title } : t)));
  const handleToggle = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );

  if (loading) return <h2>Loading…</h2>;
  if (error) return <h2>{error}</h2>;

  const done = todos.filter((t) => t.completed).length;

  return (
    <div className="app">
      <div className="header">
        <h1>My Tasks</h1>
        <span>
          {done}/{todos.length} done
        </span>
      </div>

      <AddTodo onAdd={handleAdd} />

      <div className="todo-list">
        {todos.length === 0 ? (
          <p>No tasks yet. Add one above.</p>
        ) : (
          todos.map((todo, i) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={i}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onToggle={handleToggle}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
