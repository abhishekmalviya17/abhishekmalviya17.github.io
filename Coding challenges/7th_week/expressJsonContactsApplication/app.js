var express=require('express');
var app=express();

var parser=require("body-parser");

app.set("view engine","hbs");

app.use(parser.urlencoded({extended:false}));

var contacts=[];

app.get("/contacts",function(req,res){
    console.log(contacts);
    var data={
        
        contact:contacts
    }
    res.render("index.hbs",data);
    
})

app.post("/contacts",function(req,res){
    var Contacts={};
    Contacts.name=req.body.inputName;
    
    Contacts.phone=req.body.inputPhone;
   
    contacts.push(Contacts);
    
    res.redirect("/contacts");

})


app.listen(3000);