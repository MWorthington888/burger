// Set up MySQL connection --------------------------------------
const mysql = require("mysql");

var connection;

//Links to the Heroku DB add on ------------------------------------
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "lmag6s0zwmcswp5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "l66h7h2r2x45ogaa",
		password: "m5fg0uoz5k7tps85",
		database: "ouuyrktko4d7gu1v"
	});
}

// Make connection ---------------------------------------------------
connection.connect(err => {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use ----------------------------------
module.exports = connection;