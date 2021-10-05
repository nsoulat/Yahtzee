const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.user,
    dbConfig.password,
    {
        dialect: dbConfig.dialect,
        operatorsAliases: false, // problem ?

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.players = require("./player.model.js")(sequelize, Sequelize);

module.exports = db;
