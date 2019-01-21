

// Modules that need to be installed prior to operation -----------------------------------


tion.js 
// Global
const mysql = require("mysql");
// Connection
const connection = mysql.createConnection({
	host: "localhost",
	user: "Michael Worthington",
	password: "gracieroot",
	database: "burger_db"
});
​
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});
​
module.exports = connection;