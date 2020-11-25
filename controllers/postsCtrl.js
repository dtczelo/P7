const express = require("express");
const postsRequest = require("../sql/postsRequests");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createPosts = (req, res) => {
    postsRequest.createSql(req.body.user_id, req.body.title, req.body.message)
        .then((results) => res.status(200).json({ message: "Post ajouté !" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.modifyPosts = (req, res) => {
    postsRequest.modifySql()
        .then((results) => res.status(200).json({ message: "Post modifié !" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.deletePosts = (req, res) => {
    postsRequest.deleteSql(req.params.id)
        .then((results) => res.status(200).json({ message: "Post supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.findOnePosts = (req, res) => {
    postsRequest.findOneSql()
        .then((results) => res.status(200).json({ results }))
        .catch((error) => res.status(400).json({ error }));
};

exports.findPosts = (req, res) => {
    postsRequest.findSql()
        .then((results) => res.status(200).json({ results }))
        .catch((error) => res.status(400).json({ error }));
};
