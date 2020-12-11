const express = require("express");
const usersRequests = require("../sql/usersRequests");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = (req, res) => {
    bcrypt
        .hash(req.body.password, 10)
        .then((hash) => {
            usersRequests
                .signUpSql(req.body.lastname, req.body.firstname, req.body.email, hash)
                .then((results) => res.status(201).json({ message: "Utilisateur ajouté !" }))
                .catch((error) => res.status(400).json({ error }));
        })
        .catch((error) => res.status(400).json({ error }));
};

exports.login = (req, res) => {
    usersRequests
        .loginSql(req.body.email)
        .then((results) => {
            if (results.length === 0) {
                res.status(404).json({ alert: "Email incorrect" });
            } else {
                bcrypt
                    .compare(req.body.password, results[0].password)
                    .then((passOk) => {
                        if (passOk) {
                            res.status(200).json({
                                userId: results[0].id,
                                email: results[0].email,
                                token: jwt.sign({ userId: results[0].id, role: results[0].code }, "ed8ce15da9b7b5e2ee70634cc235e363", {
                                    expiresIn: "24h",
                                }),
                                role: results[0].code,
                                verifyPassword: passOk
                            });
                        } else {
                            res.status(400).json({ alert: "Mot de passe incorrect" });
                        }
                    })
                    .catch((error) => res.status(404).json({ error }));
            }
        })
        .catch((error) => res.status(400).json({ error }));
};

exports.deleteAccount = (req, res) => {
    usersRequests.deleteSql(req.params.id)
        .then((results) => res.status(200).json({ message: "Utilisateur supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
};
