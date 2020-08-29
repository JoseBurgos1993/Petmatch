/*
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "nwhazdrp7hdpd4a4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "exdhnnw4i9l1anno",
    password: "m5ruhrryj7kylc5d",
    database: "llrixdzsjqu2hlp1"
});

connection.connect(function(err){
    if(err){
        console.error("Error: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;