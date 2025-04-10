const express = require("express");
const app = express();
const ExpressError=require("./ExpressError");
//middleware->response send

// app.use((req, res,next) => {

//     console.log("Hi, I am 1st middleware");
//     return next();
//     console.log("This is after next()");

// });
// app.use((req, res,next) => {

//     console.log("Hi, I am 2nd  middleware");
//     next();

// });
// //logger-morgan
// let chechToken = ((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.time);
//     next();
// });
const chechToken= (req, res, next) => {
    let { token } = req.query;
    if (token == "giveaccess") {
        return next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
};
app.get("/api",chechToken, (req, res) => {
    res.send("data");
});
app.get("/", (req, res) => {
    console.log("this is a root");

    res.send("Hi,I am root.");
});
app.get("/random", (req, res) => {
    res.send("this is a random guys");
});
app.get("/err", (req, res) => {
    abcd = abcd;
})
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is forbidden")
})
app.use((err, req, res, next) => {
    let {status=500, message="SOME ERROR"}=err;
    res.status(status).send(message);

});
// app.use((req, res) => {
//   res.status(404).send("Page not found!");
// });
app.listen(8080, () => {
    console.log("server listening to port 8080");
});
