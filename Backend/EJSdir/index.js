const express=require("express");
const app=express();
const port=8080;
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
});
app.get("/",(req,res)=>{
    // res.send("this is a home");
    res.render("home.ejs");
});
app.get("/hello",(req,res)=>{
    res.send("hello");
});
