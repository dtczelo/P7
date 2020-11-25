const express = require("express");
const usersRequest = require("../sql/usersRequests");
const sql = require("../sql/sqlConfig")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// exports.login = (req, res) => {
//     sqlRequest = new Promise((resolve, reject) => {
//         sql.query(`SELECT id, email, password FROM users WHERE email= '${req.body.email}'`, function (error, results, fields) {
//             if (error) reject(error);
//             resolve(results);
//         });
//     })
//         .then((results) => {
//             if (results.length === 0) {
//                 res.status(404).json({ alert: "Email incorrect" }).end();
//             } else {
//                 bcrypt
//                     .compare(req.body.password, results[0].password)
//                     .then((passOk) => {
//                         if (passOk) {
//                             res.status(200).json({
//                                 userId: results[0].id,
//                                 email: results[0].email,
//                                 token: jwt.sign({ userId: results[0].id }, "RANDOM_TOKEN_SECRET", {
//                                     expiresIn: "24h",
//                                 }),
//                                 verifyPassword: passOk,
//                             });
//                         } else {
//                             res.status(400).json({ alert: "Mot de passe incorrect" }).end();
//                         }
//                     })
//                     .catch((error) => res.status(404).json({ error }));
//             }
//         })
//         .catch((error) => res.status(400).json({ error }));
// };

exports.signUp = (req, res) => {
    bcrypt
        .hash(req.body.password, 10)
        .then((hash) => {
            var sqlRequest = usersRequest.signUpSql(req.body.lastname, req.body.firstname, req.body.email, hash)
            .then((results) => res.status(200).json({ message: "Utilisateur ajouté !" }))
            .catch((error) => res.status(400).json({ error }));
        })
        .catch((error) => res.status(400).json({ error }));
};

exports.deleteAccount = (req, res) => {
    sqlRequest = new Promise((resolve, reject) => {
        sql.query(`SELECT id, email, password FROM users WHERE email= '${req.body.email}'`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    })
        .then((results) => {
            if (results.length === 0) {
                res.status(404).json({ alert: "Email incorrect" }).end();
            } else {
                bcrypt
                    .compare(req.body.password, results[0].password)
                    .then((passOk) => {
                        if (passOk) {
                            res.status(200).json({
                                userId: results[0].id,
                                email: results[0].email,
                                token: jwt.sign({ userId: results[0].id }, "RANDOM_TOKEN_SECRET", {
                                    expiresIn: "24h",
                                }),
                                verifyPassword: passOk,
                            });
                        } else {
                            res.status(400).json({ alert: "Mot de passe incorrect" }).end();
                        }
                    })
                    .catch((error) => res.status(404).json({ error }));
            }
        })
        .catch((error) => res.status(400).json({ error }));
};
