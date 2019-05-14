'use strict';


var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var session = require("express-session");


var app = express();

app.set("view engine", "hbs");

app.use(express.static("public"));

app.use(express.static("views"));

app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret: "secret-key"
}));

const Add = require("./routes/add");

const Edit = require("./routes/edit");

const Home = require("./routes/home");

const Signup = require("./routes/signup");

const Login = require("./routes/login");


app.use("/", Home);

app.use("/login", Login);

app.use("/edit", Edit);

app.use("/signup", Signup);

app.use("/Add", Add);

var DB;

var mongoClient = new mongodb.MongoClient('mongodb://localhost:27017/blog', {useNewUrlParser: true});
mongoClient.connect(function(err) {
    if(err) {
        console.log("Error connecting to MongoDB");
    } else {
        console.log("Connection to MongoDB database blog established");
    }
    DB = mongoClient.db("blog");
});





// Deletes a post via JSON/AJAX
app.post("/delete/:mongoId", function(request, response){
    if(!request.session.user) { return response.redirect("/login"); }

    var mongoId = request.params.mongoId;
    
    DB.collection("posts").deleteOne(
        {_id: mongodb.ObjectID(mongoId)},
        function(error, status) {
            response.json({deleted: true});
    });

});










app.listen(3000);