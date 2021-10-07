module.exports = app => {
    const players = require("../controllers/player.controller.js");

    var router = require("express").Router();

    // Cr�er un nouveau Player
    router.post("/", players.create);

    // R�cup�re tous les Players
    router.get("/", players.findAll);

    // R�cup�re tous les Players premium
    router.get("/premium", players.findAllPremium);

    // R�cup�re un certain Player
    router.get("/:id", players.findOne);

    // Met � jour un certain Player
    router.put("/:id", players.update);

    // Supprime un player d'un certain Id
    router.delete("/:id", players.delete);

    // Supprime tous les Players
    router.delete("/", players.deleteAll);

    app.use('/api/players', router);
};