const express = require('express');

const router = express.Router();

const mongo=require('mongodb');




router.get("/login", function(request, response) {
    response.render("login.hbs");
});

router.post("/login", function(request, response) {
    let DB = req.app.locals.DB;
    
    var user = {
        email: request.body.email,
        password: request.body.password
    };

    DB.collection("users").findOne(user, function(error, user) {

        if(error || !user) {
            response.render("invalid-login.hbs");
            return;
        }

        request.session.user = user;
        response.redirect("/home");

    });
});

module.exports = router;