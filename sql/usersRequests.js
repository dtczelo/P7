const sql = require("./sqlConfig");

exports.signUpSql = (lastname, firstname, email, hash) => {
    return new Promise((resolve, reject) => {
        sql.query(
            `INSERT INTO users VALUES (NULL, '${lastname}', '${firstname}', '${email}', '${hash}')`,
            function (error, results, fields) {
                if (error) reject(error);
                resolve(results);
            }
        );
    });
};

exports.loginSql = (email) => {
    return new Promise((resolve, reject) => {
        sql.query(`SELECT id, email, password FROM users WHERE email= '${email}'`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.deleteSql = (id) => {
    return new Promise((resolve, reject) => {
        sql.query(`DELETE FROM users WHERE id='${id}'`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};
