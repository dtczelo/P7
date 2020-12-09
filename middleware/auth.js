const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        console.log(req.body);
        const decodedToken = jwt.verify(req.headers.authorization, "RANDOM_TOKEN_SECRET");
        const userId = decodedToken.userId;
        console.log(userId);
        console.log(req.body.userId);
        if (req.body.userId && req.body.userId !== userId) {
            throw "ID Utilisateur invalide";
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error("Requete invalide !"),
        });
    }
};
