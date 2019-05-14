const express = require('express');

const router = express.Router();

const mongo=require('mongodb');




router.get("/add", function(request, response) {
    if(!request.session.user) { return response.redirect("/login"); }

    let DB = req.app.locals.DB;
    var data = {
        loggedInUser: request.session.user
    };

    if(request.query.success) {
        data.postAdded = true;
    }

    response.render("add.hbs", data);
});

router.post("/add", function(request, response){
    if(!request.session.user) { return response.redirect("/login"); }


    var data = {
        title: request.body.title,
        content: request.body.content,
        createdBy: request.session.user._id
    };
    let DB = req.app.locals.DB;
    DB.collection("posts").insertOne(data, function(error, result) {

        if(error) {
            response.send("Error creating your blog post");
            return;
        } else {
            response.redirect("/add?success=true");
        }

    });

});

router.get("/logout", function(request, response) {
    request.session.user = null;
    response.redirect("/login");
});

module.exports = router;