const sql = require("./sqlConfig");

exports.createSql = (user_id, title, imageUrl) => {
    return new Promise((resolve, reject) => {
        sql.query(`INSERT INTO posts VALUES (NULL, '${user_id}', CURRENT_TIMESTAMP, '${title}', NULL)`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.modifySql = () => {
    return new Promise((resolve, reject) => {
        sql.query(`UPDATE posts SET WHERE`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.deleteSql = (id) => {
    return new Promise((resolve, reject) => {
        sql.query(`DELETE FROM posts WHERE id='${id}'`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.findOneSql = () => {
    // NOT FINISH
    return new Promise((resolve, reject) => {
        sql.query(`SELECT id, user_id, date, title, message FROM posts WHERE id= '${req.params.id}'`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.findAllSql = () => {
    return new Promise((resolve, reject) => {
        sql.query(
            `SELECT posts.id, CONCAT(users.firstname, ' ', users.lastname) AS author, date, title, image_url FROM posts 
            INNER JOIN users ON posts.user_id = users.id ORDER BY date DESC`,
            function (error, results, fields) {
                if (error) reject(error);
                resolve(results);
            }
        );
    });
};
