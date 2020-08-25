// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      //res.redirect("/profile");
      res.render("profile", {layout: "index"});
    }
    res.render("main", {layout: "index"});
    //res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  app.get("/create", (req, res) => {
    if(req.user){
      res.render("profile", {layout: "index"});
    }
  });
  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("profile", {layout: "index"});
    }
    res.render("login", {layout: "index"});
    //res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", isAuthenticated, (req, res) => {
    //res.sendFile(path.join(__dirname, "../public/profile.html"));
    res.render("profile", {layout: "index"});
  });

  app.get("/search", isAuthenticated, (req, res) => {
    res.render("search", {layout: "index"});
    //res.sendFile(path.join(__dirname, "../views/layouts/main"));
  });
};
