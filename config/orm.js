/*
const connection = require("./connection.js");

const orm = {
  selectAll: function(cb) {
    const query = "SELECT * FROM Users";
    connection.query(query, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  },
  selectBySpecies: function(value, cb) {
      const query = "SELECT * FROM Users WHERE species = '?'";
      connection.query(query, [value], function(err, res){
        if(err) throw err;
        cb(res);
      });
  },
  selectByAge: function(min, max, cb){
      const query = "SELECT * FROM Users WHERE age >= ? AND age <= ?";
      connection.query(query, [min, max], function(err, res){
        if(err) throw err;
        cb(res);
      });
  },
  selectByBoth: function(value, min, max, cb){
      const query = "SELECT * FROM Users WHERE species = '?' AND age >= ? AND age <= ?";
      connection.query(query, [value, min, max], function(err, res){
        if(err) throw err;
        cb(res);
      });
  }
/*
  ,
  create: function(value,cb) {
    const query = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(query, [value], function(err, res) {
      if(err) throw err;
      cb(res);
    });
  },
  update: function(condition,cb) {
    const query = "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(query, [condition], function(err, res) {
      if(err) throw err;
      cb(res);
    });
  }*/
//};

//module.exports = orm;
