const passport = require("passport");
const googleStrategy= require("passport-google-oauth20").Strategy;
const keys= require("../Config/keys");
const mongoose = require("mongoose");

const Users= mongoose.model('userDetails');

passport.use(new googleStrategy({
    "clientID":keys.googleClientID,
    "clientSecret":keys.googlecleintSecret,
    "callbackURL":"/auth/google/callback"
},(accessToken,refreshToken,profile,done)=>{
   //console.log(accessToken)
   Users.find({"googleId":profile.id}).then((userExisted)=>{
              if(userExisted){
                  done(null,userExisted);
              }else{
                new Users({googleId:profile.id}).save().then(user=>done(null,user))
              }
   })  
}))