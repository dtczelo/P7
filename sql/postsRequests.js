const sql = require("./sqlConfig");

exports.createSql = (user_id, title, imageUrl) => {
    return new Promise((resolve, reject) => {
        sql.query(`INSERT INTO posts VALUES (NULL, '${user_id}', CURRENT_TIMESTAMP, '${title}', '${imageUrl}')`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.modifySql = (post_id, title, imageUrl) => {
    return new Promise((resolve, reject) => {
        sql.query(`UPDATE posts SET title='${title}', image_url='${imageUrl}' WHERE id='${post_id}'`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.deleteSql = (post_id) => {
    return new Promise((resolve, reject) => {
        sql.query(`DELETE FROM posts WHERE id='${post_id}'`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.findOneSql = (post_id) => {
    return new Promise((resolve, reject) => {
        sql.query(`SELECT id, user_id, date, title, image_url FROM posts WHERE id= '${post_id}'`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.findAllSql = () => {
    return new Promise((resolve, reject) => {
        sql.query(
            `SELECT posts.id, posts.user_id, CONCAT(users.firstname, ' ', users.lastname) AS author, date, title, image_url FROM posts 
            INNER JOIN users ON posts.user_id = users.id ORDER BY date DESC`,
            function (error, results, fields) {
                if (error) reject(error);
                resolve(results);
            }
        );
    });
};
