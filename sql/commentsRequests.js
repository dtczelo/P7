const sql = require("./sqlConfig");

exports.createSql = (user_id, post_id, message) => {
    return new Promise((resolve, reject) => {
        sql.query(
            `INSERT INTO ?? VALUES (NULL, ?, ?, CURRENT_TIMESTAMP, ?)`, 
            ['comments', user_id, post_id, message],
            function (error, results, fields) {
                if (error) reject(error);
                resolve(results);
            }
        );
    });
};

exports.deleteSql = (comment_id) => {
    return new Promise((resolve, reject) => {
        sql.query(`DELETE FROM ?? WHERE ?? = ?`,
        ['comments','id', comment_id], 
        function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.findOneSql = (comment_id) => {
    return new Promise((resolve, reject) => {
        var columns = ['id', 'user_id', 'post_id', 'date', 'message']
        sql.query(`SELECT ?? FROM ?? WHERE ?? = ?`,
        [columns, 'comments', 'id', comment_id],
        function (error, results, fields) {
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
            WHERE comments.post_id= ? ORDER BY date DESC`, 
            [post_id],
            function (error, results, fields) {
                if (error) reject(error);
                resolve(results);
            }
        );
    });
};
