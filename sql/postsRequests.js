const sql = require("./sqlConfig");

exports.createSql = (user_id, title, message) => {
    return new Promise((resolve, reject) => {
        sql.query(
            `INSERT INTO posts VALUES (NULL, '${user_id}', CURRENT_TIMESTAMP, '${title}', '${message}')`,
            function (error, results, fields) {
                if (error) reject(error);
                resolve(results);
            }
        );
    });
};

exports.modifySql = () => {
    return new Promise((resolve, reject) => {
        sql.query(`UPDATE posts SET WHERE`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    })
};

exports.deleteSql = (id) => {
    return new Promise((resolve, reject) => {
        sql.query(`DELETE FROM posts WHERE id='${id}'`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    })
};

exports.findOneSql = () => {            // NOT FINISH
    return new Promise((resolve, reject) => {
        sql.query(`SELECT id, user_id, date, title, message FROM posts WHERE id= '${req.params.id}'`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    })
};

exports.findSql = () => {
    return new Promise((resolve, reject) => {
        sql.query(`SELECT id, user_id, date, title, message FROM posts`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    })
};
