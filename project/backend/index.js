import express from "express";
// const express = require("express")
// import cors from "cors";

const app = express();

//anyone can access the data
// app.use(cors())

// var corsOptions = {
//   origin: ["http://localhost:5173"],
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

app.get("/", (req, res) => {
  res.send("server is ready");
});

// cors(corsOptions),
app.get("/api/jokes",  (req, res) => {
  const jokes = [
    {
      id: 1,
      type: "programming",
      joke: "Why do programmers prefer dark mode?",
      answer: "Because light attracts bugs.",
    },
    {
      id: 2,
      type: "general",
      joke: "Why don’t skeletons fight each other?",
      answer: "They don’t have the guts.",
    },
    {
      id: 3,
      type: "programming",
      joke: "What is a programmer’s favorite hangout place?",
      answer: "Foo Bar.",
    },
    {
      id: 4,
      type: "general",
      joke: "Why did the math book look sad?",
      answer: "Because it had too many problems.",
    },
    {
      id: 5,
      type: "programming",
      joke: "Why do Java developers wear glasses?",
      answer: "Because they don’t see sharp.",
    },
    {
      id: 6,
      type: "general",
      joke: "Why can’t your nose be 12 inches long?",
      answer: "Because then it would be a foot.",
    },
    {
      id: 7,
      type: "programming",
      joke: "What did the developer say after fixing a bug?",
      answer: "It works on my machine.",
    },
    {
      id: 8,
      type: "general",
      joke: "Why did the scarecrow win an award?",
      answer: "Because he was outstanding in his field.",
    },
    {
      id: 9,
      type: "programming",
      joke: "Why did the computer go to the doctor?",
      answer: "Because it caught a virus.",
    },
    {
      id: 10,
      type: "general",
      joke: "Why don’t eggs tell jokes?",
      answer: "Because they’d crack each other up.",
    },
  ];

  res.json(jokes);
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serving at port ${port}`);
});
