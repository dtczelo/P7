

const mysql = require("mysql");
require("dotenv").config();

const connectSql = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
});

connectSql.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected to DataBase as id " + connectSql.threadId);
});

module.exports = connectSql;
