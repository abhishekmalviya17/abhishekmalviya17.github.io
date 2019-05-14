"use strict";

var express = require("express");

var mongo = require("mongodb");

var fs = require("fs");

var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var mongoClient = new mongo.MongoClient("mongodb://localhost:27017/library", { useNewUrlParser: true });
mongoClient.connect(function(error) 
{
    if (error) 
    {
        console.log("Error connecting to the database.");
    } else 
    {
        console.log("DB connection established.");
        var DB = mongoClient.db("library");


          DB.collection("books").find({}).toArray(function(error, books) 
          {
          
              if (error) 
              {
                  console.log("Error");
              } else 
              {
                  
                var bookData = JSON.stringify(books);

                fs.writeFile('books.json', bookData, function(err) 
                {
                    if (err) throw err;
                    console.log('Saved');
                });
              }
          });
    }
});

app.listen(3000);