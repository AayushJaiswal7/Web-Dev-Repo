const express = require("express");
const router = express.Router();
const User= require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport=require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const { mvTosignup, signup, login } = require("../controllers/user.js");

router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");
});

router.get("/login",(req,res)=>{
    res.render("users/login.ejs")
})
router.post("/signup",wrapAsync(signup));
router.post("/login",
    saveRedirectUrl,
    passport.authenticate("local",
        {failureRedirect:'/login',
        failureFlash:true }),login 
    )
router.get("/logout",)
module.exports=router;