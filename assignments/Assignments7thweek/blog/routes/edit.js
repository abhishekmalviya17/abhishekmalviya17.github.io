const express = require('express');

const router = express.Router();

const mongo=require('mongodb');



router.get("/edit/:mongoId", function(request, response){
    if(!request.session.user) { return response.redirect("/login"); }
    let DB = req.app.locals.DB;
    var mongoId = request.params.mongoId;
    var editSuccess = request.query.success;

    DB.collection("posts").findOne({_id: mongodb.ObjectID(mongoId) }, function(error, data){
        if(error) {
            response.send("Error: Not found");
            return;
        }

        if(data.createdBy != request.session.user._id) {
            return response.send("oh no! you are not allowed view this");
        }

        data.loggedInUser = request.session.user;

        if(editSuccess) {
            data.success = true;
        }

        response.render("edit.hbs", data);

    });

});


router.post("/edit/:mongoId", function(request, response){
    if(!request.session.user) { return response.redirect("/login"); }

    var mongoId = request.params.mongoId;

    var newTitle = request.body.title;
    var newContent = request.body.content;

    DB.collection("posts").updateOne(
        {_id: mongodb.ObjectID(mongoId)},   
        {$set: {title: newTitle, content: newContent} }, 
        function(error, data) { 

           response.redirect("/edit/" + mongoId + "?success=true");

    });

});

router.get("/logout", function(request, response) {
    request.session.user = null;
    response.redirect("/login");
});

module.exports = router;