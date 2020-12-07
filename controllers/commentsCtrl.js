const express = require("express");
const commentsRequests = require("../sql/commentsRequests");

exports.createComment = (req, res) => {
    commentsRequests.createSql(req.body.user_id, req.body.post_id, req.body.message)
    .then((results) => res.status(200).json({ message: "Commentaire ajouté !" }))
    .catch((error) => res.status(400).json({ error }));
};


exports.findComments = (req, res) => {
    commentsRequests.findAllSql(req.params.id)
        .then((results) => res.status(200).json({ results }))
        .catch((error) => res.status(400).json({ error }));
};