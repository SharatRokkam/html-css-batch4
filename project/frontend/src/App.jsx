import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1>Jokes App</h1>
      <p>Jokes : {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.joke}</h3>
          <p>{joke.answer}</p>
        </div>
      ))}
    </>
  );
};

export default App;
