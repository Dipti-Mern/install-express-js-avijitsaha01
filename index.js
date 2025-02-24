const express = require("express");
const app = express();
let port = 4000;

app.get('/',(req, res)=>{
    res.send("hello world!");
})

app.get('/about', (req, res)=>{
    res.send("this is about page!")
})
app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
