const express = require("express");
const app = express();
const body_parser=require("body-parser");
app.use(body_parser.json());

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`running `)
})