const express = require("express");
const morgan = require("morgan");
const app = express();

const AppError=require('./Error/appError');
const ErrorHandler=require('./Error/errorController');
const compression=require('compression');
const userRoute=require('./userRoutes');
//const hpp=require('hpp');
const path = require("path");

const PORT = process.env.PORT || 3100;

app.use(express.json({ limit: "10kb" })); //ova ti treba za da mozhes req.body
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(morgan("dev"));
app.use('/api/v1/users',userRoute);
app.listen(PORT, () => {
    console.log(`Winery Service running on port ${PORT}`);
});