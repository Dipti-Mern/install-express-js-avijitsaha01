const express = require("express");
const checkAge = require("./middleware/checkAge");
const app = express();
let port = 4000;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/contact/:city?", (req, res) => {
  if (!req.query.city) {
    res.send("Please provide city");
  } else {
    res.send(`Your city is ${req.query.city}`);
  }
});

app.get("/about/:age?", checkAge, (req, res) => {
  res.send("this is about page!");
});
app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
