var express=require('express');
var app=express();

var parser=require("body-parser");

app.set("view engine","hbs");

app.use(parser.urlencoded({extended:false}));

var contacts=[];

app.get("/",function(req,res){
    
    var data={
        
        contact:contacts
    }
    res.render("index.hbs",data);
    
})

app.post("/contacts",function(req,res){
    var newContacts={};
    newContacts.name=req.body.inputName;
    
    newContacts.phone=req.body.inputPhone;
   
    contacts.push(newContacts);
    
    res.redirect("/");

})


app.listen(3000);