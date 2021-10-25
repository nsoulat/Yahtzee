const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.user,
    dbConfig.password,
    {
        dialect: dbConfig.dialect,
        operatorsAliases: false, // problem ?
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.players = require("./player.model.js")(sequelize, Sequelize);
db.scores = require("./score.model.js")(sequelize, Sequelize);

module.exports = db;
