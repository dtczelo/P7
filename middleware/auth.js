const jwt = require("jsonwebtoken");

module.exports = (req, res, next, role) => {
    try {
        const decodedToken = jwt.verify(req.headers.authorization, "ed8ce15da9b7b5e2ee70634cc235e363");
            next();
    } catch {
        res.status(401).json({
            error: new Error("Requete invalide !"),
        });
    }
};
