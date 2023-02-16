const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
require("./db/conn");
const Login = require("./models/logins");
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


app.post("/login", (req,res)=>{
    try{
        console.log(req.body.username);
        res.send(req.body.username);
    }catch(error){
        res.status(400).send(error);
    }
});

// app.post('/login',(req,res)=>{
//     var myData = new Login(req.body);
//     myData.save().then(()=>{
//         res.send("DATA ranigla");
//     }).catch(()=>{
//         res.status(200).send("no item");
//     })
//     res.status(200).render('login.hbs');
// });

app.listen(port,()=>{
    console.log("server started");
});


