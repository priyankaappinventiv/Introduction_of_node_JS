const express = require("express");
const app = express();

const middleware =require('./middleware');

app.get("/testing", middleware,(req, res, next) => {
    console.log("hello  priyanka");
    next();
  });
  
app.listen(8001, () => {
  console.log(`Listening to port 8001);
});
