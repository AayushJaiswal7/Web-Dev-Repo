const express=require("express");
const app=express();
const port=8080;

app.set("view engine","ejs");
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
