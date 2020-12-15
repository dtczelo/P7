const express = require("express");
const commentsRequests = require("../sql/commentsRequests");

exports.createComment = (req, res) => {
    if (res.locals.userId === parseInt(req.body.user_id) || res.locals.role === "ADM") {
        commentsRequests
            .createSql(req.body.user_id, req.body.post_id, req.body.message)
            .then(() => res.status(200).json({ message: "Commentaire ajouté !" }))
            .catch((error) => res.status(400).json({ error }));
    } else {
        res.status(401).json({ alert: "Vous n'avez pas les droits nécessaires !" });
    }
};

exports.deleteComment = (req, res) => {
    commentsRequests
        .findOneSql(req.params.id)
        .then((results) => {
            if (res.locals.userId === results[0].user_id || res.locals.role === "ADM") {
                commentsRequests
                    .deleteSql(req.params.id)
                    .then(() => res.status(200).json({ message: "Commentaire supprimé !" }))
                    .catch((error) => res.status(400).json({ error }));
            } else {
                res.status(401).json({ alert: "Vous n'avez pas les droits nécessaires !" });
            }
        })
        .catch((error) => res.status(404).json({ error }));
};

exports.findComments = (req, res) => {
    commentsRequests
        .findAllSql(req.params.id)
        .then((results) => res.status(200).json({ results }))
        .catch((error) => res.status(400).json({ error }));
};
