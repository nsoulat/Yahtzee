const DBCONFIG = require("./config.json").DATABASE;

module.exports = {
    user: DBCONFIG.USER,
    password: DBCONFIG.PASSWORD,
    DB: DBCONFIG.DB,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
