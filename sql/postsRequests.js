const sql = require("./sqlConfig");

exports.createSql = (user_id, title, imageUrl) => {
    return new Promise((resolve, reject) => {
        sql.query(`INSERT INTO ?? VALUES (NULL, ?, CURRENT_TIMESTAMP, ?, ?)`,
        ['posts', user_id, title, imageUrl], 
        function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.modifySql = (post_id, title, imageUrl) => {
    return new Promise((resolve, reject) => {
        sql.query(`UPDATE ?? SET ?? = ?, date=date, ?? = ? WHERE ?? = ?`, 
        ['posts', 'title', title, 'image_url', imageUrl, 'id', post_id],
        function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.deleteSql = (post_id) => {
    return new Promise((resolve, reject) => {
        sql.query(`DELETE FROM ?? WHERE ?? = ?`,
        ['posts', 'id', post_id],
        function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.findOneSql = (post_id) => {
    return new Promise((resolve, reject) => {
        var columns = ['id', 'user_id', 'date', 'title', 'image_url'];
        sql.query(`SELECT ?? FROM ?? WHERE ?? = ?`,
        [columns, 'posts', 'id', post_id],
        function (error, results, fields) {
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
