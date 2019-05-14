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
   let username=req.body.EmailID;
   let password=req.body.Password;

   

      for(var i=0;i<userDB.length;i++){
          if((username==(userDB[i].name))&&(password==(userDB[i].password))){
              
            res.send("Login Success");
              
          }
          else{
            res.redirect("/");
          }
      }
});


app.listen(3050);