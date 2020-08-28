//const express = require("express");
/*const User = require("../models/user.js");




module.exports = function(app) {
    app.get("/api/searchAll", function(req,res){
        User.selectAll(function(data){
            const hbsObject = {
                users: data
            };
            console.log(hbsObject);
            res.render("search", hbsObject);
        });
    });

};