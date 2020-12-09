const mysql = require("mysql");

    const connectSql = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "P7",
        multipleStatements: true
    });
    
    connectSql.connect(function (err) {
        if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }
        console.log("connected to DataBase as id " + connectSql.threadId);
    });  

module.exports = connectSql;