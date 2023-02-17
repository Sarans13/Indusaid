const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser")
require("./db/conn");
const port = process.env.PORT || 5500;
const Login = require("./models/logins");

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));
app.use(express.static(path.join(__dirname,"../public/images")));

app.set("view engine","hbs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("index");
});
app.post("/debit",(req,res)=>{
    res.render("debit");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/login",(req,res)=>{
    res.render("login");
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.get("/book",(req,res)=>{
    res.render("book");
});
// app.get("/",(req,res)=>{
//     res.render("index");
// });

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/login",(req,res)=>{
    res.render("service");
})

app.post("/login", async(req,res)=>{
    try{
        console.log(req.body.username);
        res.send(req.body.username);
    }catch(error){
        res.status(400).send(error);
    }
});

app.post("/manufacturingShutdown",(req,res)=>{
    res.render("manufacturingShutdown");
});

app.post("/vehicle",(req,res)=>{
    res.render("vehicle");
});

app.post("/disrupt",(req,res)=>{
    res.render("disrupt");
});

app.post("/liquid",(req,res)=>{
    res.render("liquid");
});

app.post("/customer",(req,res)=>{
    res.render("customer");
});



app.listen(port,()=>{
    console.log("server started");
});
