module.exports = app => {
	const scores = require("../controllers/score.controller.js");

	var router = require("express").Router();

	// Créer un nouveau Score
	router.post("/", scores.create);

	// Récupère tous les Scores
	router.get("/", scores.findAll);

	// Récupère les scores supérieurs
	router.get("/:value", scores.findAllSuperior);

	// Supprime tous les Scores
	router.delete("/", scores.deleteAll);

	app.use('/api/scores', router);
}