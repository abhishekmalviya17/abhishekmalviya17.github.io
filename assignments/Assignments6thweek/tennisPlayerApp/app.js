'use strict'

var express=require('express');
var app=express();

var parser=require('body-parser');

app.set("view engine","hbs");

app.use(parser.urlencoded({extended:false}));

var Players=[];

app.get("/players",function(req,res){
    var data={
        players:Players,
        userName : "Abhishek"
    }
    res.render("index.hbs",data);
});

app.post("/players", function(req, res) {
    var playersWithCountry={};
    playersWithCountry.name=req.body.Name;
    playersWithCountry.country=req.body.Country;
    Players.push(playersWithCountry);

    res.redirect("/players");

});

app.listen(3000);