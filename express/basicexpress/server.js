// common js module 
// const express = require("express")

import express from 'express';
const server= express()
// HTTP methods - get , post ,put, patch, delete

// routes -instagram.com / localhost://

// API - end points
server.get('/', (request, response) =>{
    response.send("<h1>Hello from server</h1>");
})

server.get("/about", (request, response) =>{
    response.send("<h1>About Page</h1>")
})

server.get("/services", (request, response) =>{
    response.send("<h1>Services Page</h1>")
})


server.get("/api", (request, response) =>{
    response.json({"name" : "Sharat"})
})


server.listen(4000, () =>{
    console.log("server running on port 4000")
})

