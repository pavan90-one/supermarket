const express = require("express");
const passport = require("passport");
const routes= express.Router();
module.exports = app=>{
    app.get("/auth/google",passport.authenticate('google',{scope:["profile",'email']}));
    app.get('/auth/google/callback',passport.authenticate('google'));
}
