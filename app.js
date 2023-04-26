const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const port = 8000;
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('./Website')); 





app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/Website/index.html'));
})
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, "/Website/login.html"));
})
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, "/Website/signup.html"));
})


app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});