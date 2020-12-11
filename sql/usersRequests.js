const sql = require("./sqlConfig");

exports.signUpSql = (lastname, firstname, email, hash) => {
    return new Promise((resolve, reject) => {
        sql.query(
            `INSERT INTO users VALUES (NULL, '${lastname}', '${firstname}', '${email}', '${hash}', '1')`,
            function (error, results, fields) {
                if (error) reject(error);
                resolve(results);
            }
        );
    });
};

exports.signAdminSql = (lastname, firstname, email, hash) => {
    return new Promise((resolve, reject) => {
        sql.query(
            `INSERT INTO users VALUES (NULL, '${lastname}', '${firstname}', '${email}', '${hash}', '2')`,
            function (error, results, fields) {
                if (error) reject(error);
                resolve(results);
            }
        );
    });
};

exports.loginSql = (email) => {
    return new Promise((resolve, reject) => {
        sql.query(`SELECT users.id, users.email, users.password, roles.code FROM users 
        INNER JOIN roles ON users.role_id = roles.id WHERE users.email= '${email}'`, function (error, results, fields) {
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
