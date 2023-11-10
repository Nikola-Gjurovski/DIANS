const express=require('express');
const morgan=require('morgan')
const app=express();
//const hpp=require('hpp');
const path=require('path');
app.use((req,res,next)=>{
    console.log("Hello from the middlware")
    next();
})
app.use(morgan('dev'))
module.exports=app;