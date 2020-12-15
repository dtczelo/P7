module.exports = (req, res, next) => {
    try {
        var message = req.body.message;
        var formattedMessage = message.replace(/'/g, "''");
        req.body.message = formattedMessage;
        next();
    } catch {
        res.status(401).json({
            error: new Error("Erreur lors du formattage des données !"),
        });
    }
};