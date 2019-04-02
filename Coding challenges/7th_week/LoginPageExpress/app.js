var express=require("express");

var app=express();

var parser=require("body-parser");

app.set("body-parser","hbs");

app.use(parser.urlencoded({extended:false}));


var userDB = [
    {name: "ansal@gmail.com", password: "ansal123"},
    {name: "vaibhav", password: "vaibhav123"},
    {name: "divyam", password: "divyam123"}
  ];

app.get("/",function(req,res){

res.render("index.hbs")
    
})

app.post("/login",function(req,res){
    var DB={};
    username=req.body.EmailID;
    password=req.body.Password;

   

      for(var i=0;i<userDB.length;i++){
          if(username==userDB.name[i]&&password==userDB.password[i]){
              alert("Logged in");
              res.redirect("/login")
              
          }
          else{
              alert("wrong password or userID");
          }
      }
})


app.listen(3050);