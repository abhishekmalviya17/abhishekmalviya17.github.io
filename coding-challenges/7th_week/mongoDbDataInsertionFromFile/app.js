"use strict";

var express = require("express");

var mongo = require("mongodb");

var fs = require("fs");

var app = express();





var mongoClient = new mongo.MongoClient("mongodb://localhost:27017/library", { useNewUrlParser: true });
mongoClient.connect(function(error) {
    if (error) 
    {
        console.log("Error connecting to the database");
    } else 
    {
        console.log("connected to database!");
        var DB = mongoClient.db("library");


        fs.readFile('./books.json', function(err, data)  
        {
            if (err)
            {
                return console.log("error in fetching info from database");
            }

            var booksData = JSON.parse(data);

            DB.collection("books").insertMany(booksData, function(error, result) 
            {
                if (error) 
                {
                    return console.log("error in insertion of data");
                }

                console.log("success!")
            });
        });

    }
});





app.listen(3000);