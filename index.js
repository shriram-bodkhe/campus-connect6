const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

let posts =[
    {
      username:"apnacollege",
      content:"i love coding"
    },
     {
      username:"shriram",
      content:"i love gaming"
    },
     {
      username:"shiva",
      content:"i love cricket"
    }
];

let post = posts[0];
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/main/login",(req,res)=>{

    res.render("login.ejs",{ post });
})

app.get("/main/signup",(req,res)=>{
  res.render("signup.ejs");
})

app.post("/posts",(req,res)=>{
  let {username , content} = req.body;
  posts.push({username,content});
  res.redirect("/posts");
})

app.post("/main/home",(req,res)=>{
  res.render("home.ejs");
})

app.get("/main/home/dash",(req,res)=>{
  res.render("home.ejs");
})

app.get("/main/message",(req,res)=>{
  res.render("message.ejs");
})

app.get("/main/myfeed",(req,res)=>{
  res.render("myfeed.ejs");
})

app.post("/main/domain",(req,res)=>{
  res.render("domain.ejs");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})