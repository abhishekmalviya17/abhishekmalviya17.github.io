"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var mongo = require("mongodb");

var app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(express.static("public"));

var DB;

var mongoClient = new mongo.MongoClient("mongodb://localhost:27017/library", {useNewUrlParser: true});
mongoClient.connect(function(error) {
    if (error) 
    {
        console.log("Error connecting to the database.");
    } else 
    {
        
        var DB = mongoClient.db("library");
        console.log("Connected");
    }
});


app.get('/', function(req, res) 
{
    res.render("index.hbs");
});

app.post('/', function(req, res) 
{

    var languageOfBook = 
    {
        language: req.body.language
    }
    DB.collection("books").find(languageOfBook).toArray(function(error, books) {

        if (error) 
        {
            console.log("error connecting to table");
        } else 
        {
            var booksData = 
            {
                books: books
            };


            res.render("search.hbs", booksData);
        }

    });
});







app.listen(3000);