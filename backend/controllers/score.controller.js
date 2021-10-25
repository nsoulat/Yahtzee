const { sequelize } = require("../models");
const db = require("../models");
const Score = db.scores;
const Op = db.Sequelize.Op;

// Creation
exports.create = (req, res) => {
	// Validate request
	if (!req.body.name) {
		res.status(400).send({
			message: "Content can not be empty!"
		});
		return;
	}

	// Créer un Score
	const score = {
		name: req.body.name,
		points: req.body.points
	};

	// Sauvegarder Score
	Score.create(score)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the Score."
			});
		});
};

// Recherche de tous les Scores (ou juste ceux d'un certain 'name')
exports.findAll = (req, res) => {
	const name = req.query.name;
	var condition = name ? { name: { [Op.iLike]: `%${name}` } } : null;

	Score.findAll({order: [ ['points', 'DESC'], ], where: condition} )
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving scores."
			});
		});
};

// Suppression de tous les Scores
exports.deleteAll = (req, res) => {
	Score.destroy({
		where: {},
		truncate: false
	})
		.then(nums => {
			res.send({ message: `${nums} Scores were deleted successfully.`});
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while removing all scores."
			});
		});
};

// Rechercher les Scores supérieurs à une valeur
exports.findAllSuperior = (req,res) => {
	const value = req.params.value;

	Score.findAll({ where: { points: {[Op.gte]: value } } }, {order: ['points', 'DESC']} )
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving scores."
			});
		});
};