const express = require("express");
const morgan = require("morgan");
const app = express();
const viewRoute=require('./Routes/viewRoutes')
//const hpp=require('hpp');
const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use((req, res, next) => {
  console.log("Hello from the middlware");
  next();
});
app.use(express.json({ limit: "10kb" })); //ova ti treba za da mozhes req.body
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/", viewRoute);
module.exports = app;
