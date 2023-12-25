// Please don't change the pre-written code.

const express = require("express");
const app = express();

const logRequest = (req,res,next) => {
  // Write your code here
  const requestMethod = req.method;
  const requestPath = req.path;
  console.log(requestMethod);
  console.log(requestPath);
  next();
};

// 
app.get("/",logRequest);

app.get("/", (req, res) => {
  res.send("Coding Ninjas!");
});

module.exports = app;
