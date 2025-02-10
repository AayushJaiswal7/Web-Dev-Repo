const express= require("express");
const app=express();

// console.dir(app);
let port = 8080;
app. listen(port, ()=> {
console. log(` app is listening on port ${port}` ) ;
});
// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     // res.send({
//     //     name:"fruit",
//     //     color:"red",
//     // });
//     let code="<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
    
// }); 
app.get("/",(req,res)=>{
    res.send("hello,i am root ");

});
// app.get("/search",(req,res)=>{
//     res.send("you contacted search path");

// });
app.get("/contact",(req,res)=>{
    res.send("you contacted contact path");

});
// app.get("*",(req,res)=>{
//     res.send("this path does not exist");
// });
app.post("/",(req,res)=>{
    res.send("you sent a post request to root");
})
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    let htmltxt=`<h1>Welcome to the page of ${username}</h1>`;
    res.send(htmltxt);

});
app.get("/search",(req,res)=>{
   let {q}=req.query;
   if (!q) {
    res.send("<h1> nothing</h1>")
    
   }
    res.send(`<h1>search result for query:${q}</h1>`);
    
})