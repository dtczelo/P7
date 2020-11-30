const sql = require("./sqlConfig");

exports.createSql = (user_id, post_id, message) => {
    return new Promise((resolve, reject) => {
        sql.query(`INSERT INTO comments VALUES (NULL, '${user_id}', '${post_id}', CURRENT_TIMESTAMP, '${message}')`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.findAllSql = (post_id) => {
    return new Promise((resolve, reject) => {
        sql.query(
            `SELECT comments.id, comments.user_id, comments.post_id, CONCAT(users.firstname, ' ', users.lastname) AS author, comments.date, comments.message 
            FROM comments INNER JOIN users ON comments.user_id = users.id 
            WHERE comments.post_id='${post_id}' ORDER BY date DESC`,
            function (error, results, fields) {
                if (error) reject(error);
                resolve(results);
            }
        );
    });
};