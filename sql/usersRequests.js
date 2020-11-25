const sql = require("./sqlConfig");

exports.signUpSql = (lastname, firstname, email, hash) => {
        sql.query(
            `INSERT INTO users VALUES (NULL, '${lastname}', '${firstname}', '${email}', '${hash}')`,
            function (error, results, fields) {
                if (error) throw error;
                console.log(results)
                return results;
            }
        );
        console.log(results)
        return results;
};
