const express = require('express');

const router = express.Router();

const mongo=require('mongodb');





router.get("/signup", function(request, response) {
    response.render("signup.hbs");
});

router.post("/signup", function(request, response) {
    let DB = req.app.locals.DB;
    var newUser = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    };

    DB.collection("users").insertOne(newUser, function(error, data) {
        response.redirect("/login");
    });
});

router.get("/logout", function(request, response) {
    request.session.user = null;
    response.redirect("/login");
});

module.exports = router;