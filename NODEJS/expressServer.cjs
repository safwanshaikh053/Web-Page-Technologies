require('dotenv').config();
const  express =require('express');
const app=express();

const host = process.env.HOST;
const port = process.env.PORT;

app.get("/",(req,res,next)=>{
    res.send("Simple get request")
});
app.get("/home",(req,res,next)=>{
    res.sendFile(__dirname+"/home.html")
});
app.get("/about/:id",(req,res,next)=>{
    res.sendFile(__dirname+"/about.html")
});
app.get(/.*/,(req,res,next)=>{
    res.send("404");
});
app.listen(port,()=>{
    console.log(`server get statedon ${host} : ${port}`);
});
