const express = require("express");
const postsRequests = require("../sql/postsRequests");

exports.createPosts = (req, res) => {
    postsRequests.createSql(req.body.user_id, req.body.title)
        .then((results) => res.status(200).json({ message: "Post ajouté !" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.modifyPosts = (req, res) => {
    postsRequests.modifySql()
        .then((results) => res.status(200).json({ message: "Post modifié !" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.deletePosts = (req, res) => {
    postsRequests.deleteSql(req.params.id)
        .then((results) => res.status(200).json({ message: "Post supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.findOnePosts = (req, res) => {
    postsRequests.findOneSql()
        .then((results) => res.status(200).json({ results }))
        .catch((error) => res.status(400).json({ error }));
};

exports.findPosts = (req, res) => {
    postsRequests.findAllSql()
        .then((results) => res.status(200).json({ results }))
        .catch((error) => res.status(400).json({ error }));
};
