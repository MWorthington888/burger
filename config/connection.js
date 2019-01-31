// Set up MySQL connection --------------------------------------
const mysql = require("mysql");

var connection;

//Links to the Heroku DB, if not go via localhost------------------------------------
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "Michael Worthington",
		password: "gracieroot",
		database: "burgers_db"
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
module.exports = connection;