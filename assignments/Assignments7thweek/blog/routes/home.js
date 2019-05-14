const express = require('express');

const router = express.Router();

const mongo=require('mongodb');




router.get("/", function(request, response) {

    if(request.session.user) {

        response.redirect("/home");
    } else {

        response.redirect("/login");
    }

});


router.get("/home", function(request, response){
    let DB = req.app.locals.DB;
    if(!request.session.user) { return response.redirect("/login"); }


    DB.collection("posts").find({ createdBy: request.session.user._id }).toArray(function(error, allPosts){
        if(error) {
            response.send("Error fetching blog posts");
        } else {
            var data = {
                allPosts: allPosts,
                loggedInUser: request.session.user
            };
            response.render("index.hbs", data);
        }
    });
});

router.get("/logout", function(request, response) {
    request.session.user = null;
    response.redirect("/login");
});

module.exports = router;