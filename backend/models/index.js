const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.user,
    dbConfig.password,
    {
        dialect: dbConfig.dialect,
        operatorsAliases: 0
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.scores = require("./score.model.js")(sequelize, Sequelize);

module.exports = db;
