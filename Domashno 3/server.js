const mongoose=require('mongoose')//npm i mongoose@5
const dotenv=require('dotenv');
const app=require("./app.js");
dotenv.config({path:'./config.env'})
const port=process.env.PORT || 6000;

const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(con=>{
    console.log(con.connections)
    console.log("DB connection success ")
})

const server=app.listen(port,()=>{
    console.log("App runnuing ...");
})