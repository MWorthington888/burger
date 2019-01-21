

// Modules that need to be installed prior to operation -----------------------------------

const mysql = require("mysql");// Connection verbage ------------------------------------------------------------------------


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "Michael Worthington",
    password: "gracieroot",
    database: "burgers_db"
});