const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
//const expressValidator = require("express-validator");

const postRoutes = require('./routes/post');

mongoose.connect('mongodb://localhost:27017')
.then(() => console.log("DB connected"));

mongoose.connection.on("error", err => {
    console.log('db connect error: ${err.message}')
})

app.use(morgan("dev"));
app.use(bodyParser.json());
//app.use(expressValidator)
app.use("/",postRoutes);
 
app.listen(3000);


