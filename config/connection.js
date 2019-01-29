// Set up MySQL connection --------------------------------------
const mysql = require("mysql");

var connection;

//Links to the Heroku DB add on ------------------------------------
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "hsjxpgy2htjgonsx",
		password: "tl8phuejyqc63zd3",
		database: "dnk8dygqk253a0n8"
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