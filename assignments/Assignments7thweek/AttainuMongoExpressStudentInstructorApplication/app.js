var express=require("express");

var app=express();

var parser=require("body-parser");

var mongo=require("mongodb");


app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: false }));


var DB;

app.get("/",function(req,res){
    console.log("res sucess")
    res.render("index.hbs");
    
});

var mongoClient=new mongo.MongoClient("mongodb://localhost:27017/attainu",{useNewUrlParser:true});
mongoClient.connect(function(error){
        if(error){
            console.log("There is an error connecting to database");
        }
        else{
            console.log("DB connection successful");
            DB=mongoClient.db("attainu");
        }
});





app.get("/instructors",function(req,res){
        DB.collection("instructors").find({}).toArray(function(error,instructors){
            if(error){
                console.log("error fetching data from instructors");
            }
            var data={
                instructors: instructors
            };
            res.render("instructors.hbs",data);
        });

app.get("/instructorsadd",function(req,res){
    res.render("instructorsadd.hbs");
})

app.post("/instructorsadd",function(req,res){
    var instructorName=req.body.name;
    var instructorPhone=req.body.phone;

    var newInstructor={
        name : instructorName,
        phone :instructorPhone
    };
    DB.collection("instructors").insertOne(newInstructor,function(error){
        if(error){
            console.log("problem with inserting data into instructors");
        }
        else{
            res.redirect("/instructors");
        }
    });

}); });










app.get("/students",function(req,res){
    DB.collection("students").find({}).toArray(function(error,students){
        if(error){
            console.log("error fetching data from students");
        }
        var data={
            students:students
        };
        res.render("students.hbs",data);
    });

app.get("/studentsadd",function(req,res){
    res.render("studentsadd.hbs");
});

app.post("/studentsadd",function(req,res){
        var studentName=req.body.name;
        var studentPhone=req.body.phone;
        var studentLocation=req.body.location;
    
        var newStudent={
            name : studentName,
            phone :studentPhone,
            location:studentLocation
        };
        DB.collection("students").insertOne(newStudent,function(error){
            if(error){
                console.log("problem with inserting data into instructors");
            }
            else{
                res.redirect("/students");
            }
        });
    
    }); });

app.listen(3050);
