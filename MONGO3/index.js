const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");
const { dir } = require("console");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
main().then(() => {
    console.log("connection successful");

}).catch((err) => { console.log(err) });
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
};

// let chat1=new Chat({
//     from:"neha",
//     to:"priya",
//     msg:"send me your exam sheets",
//     created_at:new Date()
// })

//Create Route
app.post("/chats", async (req, res, next) => {
    try {
        let { from, to, msg } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date(),
        });

        await newChat.save();
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
});


// Chat.deleteMany({from:"neha"}).then((res)=>{
//     console.log("Done");

// }).catch((err)=>{
//     console.log(err);

// });

// chat1.save().then((res)=>{
//     console.log(res);

// }).catch((err)=>{
// console.log(err);

// })
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });

})
//New route
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404,"Page not found");
    res.render("new.ejs");
});

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    }
}
// New-show route
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
            next(new ExpressError(404, "chat not found"));
        }
        res.render("edit.ejs", { chat });

    }));
//Edit Route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
})
//Update Route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;

    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { msg: newMsg },
        { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");

})
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats")

})
app.get("/", (req, res) => {
    res.send("root is working");
});
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name==="ValidationError"){
        console.dir(err);
    }
    next(err);   
})
//Error Handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some error Occurred" } = err;
    res.status(status).send(message);
});
app.listen(8080, () => {
    console.log("server is listening on port 8080");

});