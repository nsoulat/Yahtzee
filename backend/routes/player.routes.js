module.exports = app => {
    const players = require("../controllers/player.controller.js");

    var router = require("express").Router();

    // Créer un nouveau Player
    router.post("/", players.create);

    // Récupère tous les Players
    router.get("/", players.findAll);

    // Récupère tous les Players premium
    router.get("/premium", players.findAllPremium);

    // Récupère un certain Player
    router.get("/:id", players.findOne);

    // Met à jour un certain Player
    router.put("/:id", players.update);

    // Supprime un player d'un certain Id
    router.delete("/:id", players.delete);

    // Supprime tous les Players
    router.delete("/", players.deleteAll);

    app.use('/api/players', router);
};