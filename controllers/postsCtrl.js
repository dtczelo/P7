const express = require("express");
const fs = require("fs");
const postsRequests = require("../sql/postsRequests");

exports.createPosts = (req, res) => {
    console.log(req.headers.authorization);
    postsRequests.createSql(req.body.user_id, req.body.title, `${req.protocol}://${req.get('host')}/images/${req.file.filename}`)
        .then((results) => res.status(200).json({ message: "Post ajouté !" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.modifyPosts = (req, res) => {
    postsRequests.modifySql(req.params.id, req.body.title, `${req.protocol}://${req.get('host')}/images/${req.file.filename}`)
        .then((results) => res.status(200).json({ message: "Post modifié !" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.deletePosts = (req, res) => {
    postsRequests.findOneSql(req.params.id)
    .then((results) => {
        const filename = results[0].image_url.split("/images/")[1];
            fs.unlink(`images/${filename}`, () => {
                postsRequests.deleteSql(req.params.id)
                .then((results) => res.status(200).json({ message: "Post supprimé !" }))
                .catch((error) => res.status(400).json({ error }));
            });
    })
    .catch((error) => res.status(404).json({ error }))
};

exports.findOnePosts = (req, res) => {
    postsRequests.findOneSql(req.params.id)
        .then((results) => res.status(200).json({ results }))
        .catch((error) => res.status(400).json({ error }));
};

exports.findPosts = (req, res) => {
    postsRequests.findAllSql()
        .then((results) => res.status(200).json({ results }))
        .catch((error) => res.status(400).json({ error }));
};
