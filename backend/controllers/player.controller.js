const db = require("../models");
const Player = db.players;
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

    // Créer un Player (les colonnes id, createdAt et updatedAt sont gérées automatiquement)
    const player = {
        name: req.body.name,
        birthDate: req.body.birthDate,
        isPremium: req.body.isPremium ? req.body.isPremium : false
    };

    // Save Player in the database
    Player.create(player)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Player."
            });
        });
};

// Recherche de tous les Players (ou ceux qui un 'name' particulier)
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    Player.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving players."
            });
        });
};

// Recherche du Player par Id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Player.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Player with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Player with id=" + id
            });
        });
};

// Mise à jour d'un Player
exports.update = (req, res) => {
    const id = req.params.id;

    Player.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Player was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Player with id=${id}. Maybe Player was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Player with id=" + id
            });
        });
};

// Supprimer un Player
exports.delete = (req, res) => {
    const id = req.params.id;

    Player.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Player was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Player with id=${id}. Maybe Player was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Player with id=" + id
            });
        });
};

// Suppression de tous les Players
exports.deleteAll = (req, res) => {
    Player.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Players were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all players."
            });
        });
};

// Rechercher selon certaines conditions
exports.findAllPremium = (req, res) => {
    Player.findAll({ where: { isPremium: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving players."
            });
        });
};