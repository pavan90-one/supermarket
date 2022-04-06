const express = require("express");
const app = express();
const body_parser=require("body-parser");
app.use(body_parser.json());
app.get("/",(req,resp,next)=>{
    resp.send("welcome  to node js deployment ")
})
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`running `)
})