module.exports = (req, res, next) => {
    try {
        var title = req.body.title;
        var formattedTitle = title.replace(/'/g, "''");
        req.body.title = formattedTitle;
        next();
    } catch {
        res.status(401).json({
            error: new Error("Erreur lors du formattage des données !"),
        });
    }
};