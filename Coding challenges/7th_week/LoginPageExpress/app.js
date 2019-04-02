var express=require("express");

var app=express();

var parser=require("body-parser");

app.set("body-parser","hbs");

app.use(parser.urlencoded({extended:false}));

var loginDB=[];

app.get("/login",function(req,res){

res.render("index.hbs")
    
})

app.post("/login",function(req,res){
    var DB={};
    DB.username=req.body.EmailID;
    DB.password=req.body.Password;

    var userDB = [
        {name: "ansal@gmail.com", password: "ansal123"},
        {name: "vaibhav", password: "vaibhav123"},
        {name: "divyam", password: "divyam123"}
      ];

      for(var i=0;i<=userDB.length;i++){
          if(DB.username==userDB.name[i]&&DB.Password==userDB.password[i]){
              alert("Logged in");
              
          }
          else{
              alert("wrong password or userID");
          }
      }
})


app.listen(3050);