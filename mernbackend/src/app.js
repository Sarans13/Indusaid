const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const port = process.env.PORT || 5500;

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));
app.set("view engine","hbs");
app.use("/images",express.static(path.join(__dirname,"../public/images")));


app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.listen(port,()=>{
    console.log("server started");
});

