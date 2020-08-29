// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const nodemailer = require("nodemailer");
const { Op } = require("sequelize");
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    let picture;
    switch(req.body.species){
      case "Dog": picture = "/img/pexels-dominika-roseclay-2023384.jpg"; break;
      case "Cat": picture = "/img/Zeus.jpeg"; break;
      case "Bug": picture = "/img/ant.png"; break;
      case "Bird": picture = "/img/pexels-skitterphoto-9291.jpg"; break;
      case "Aquatic": picture = "/img/fish.png"; break;
      case "Small Mammal": picture = "/img/guinea.jpg"; break;
      case "Large Mammal": picture = "/img/horse.jpg"; break;
      case "Reptile": picture = "/img/pexels-pragyan-bezbaruah-2566315.jpg"; break;
    }
    db.User.create({
      name: req.body.username,
      age: req.body.age,
      sex: req.body.sex,
      species: req.body.species,
      email: req.body.email,
      password: req.body.password,
      picture: picture
    })
    //.then(db.Profile.create({
    //  name: req.body.username,
    //  age: req.body.age,
    //  sex: req.body.sex,
    //  species_id: req.body.species
    //}))
    .then(() => {
      res.redirect(307, "/api/login");
    }).catch(err => {
      res.status(401).json(err);
    });
    
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.post('/api/send-email', function (req, res){
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            // should be replaced with real sender's account
            //user: 'bobbillson68@gmail.com',
            //pass: "Warhammer40k1"
            user: "donotreply.to.petmatch@gmail.com",
            pass: "Thankst13"
        }
    });
    //db.User.findOne({where: {id: req.body.id }}).then((data) => {
      /*
      console.log(data.email);
      console.log(req.body.subject);
      console.log(req.body.text);
      let email = data.email;
      if(data.email == null){
        email = "jose.burgos.me@gmail.com";
      }
      */
      let mailOptions = {
        // should be replaced with real recipient's account
        to: "jose.burgos.me@gmail.com",
        subject: "Subject Things",
        text: "Test Text"
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      });
    //});

  });

  app.post("/api/searchAll", function(req,res){
    const species = req.body.species;
    const ageMin = req.body.ageMin;
    const ageMax = req.body.ageMax;
    const sex = req.body.sex;
    db.User.findAll().then((data) => {
      res.render("search",{
        user: data
      });
    });
/*{
      where:{
        species: "Dog",
        sex: "Female",
        age: {
          [Op.gte]: ageMin,
          [Op.lte]: ageMax
        }
      }
    }*/
  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        name: req.user.name,
        age: req.user.age,
        sex: req.user.sex,
        species: req.user.species,
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
