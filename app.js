const express = require("express");
const mongoose = require("mongoose");
const keys = require("./Config/keys")
const app = express();
require("./models/userDetails_model");
const body_parser=require("body-parser");
app.use(body_parser.json());
mongoose.connect(keys.mongoURL,(conn,error)=>{

});
const passport = require("./service/passport");
require("./routues/passport")(app)
const PORT = 4000
app.listen(PORT,()=>{
    console.log(`running `)
})