const DBCONFIG = require("./config.json").DATABASE;

module.exports = {
    user: DBCONFIG.USER,
    password: DBCONFIG.PASSWORD,
    DB: DBCONFIG.DB,
    dialect: "postgres",
};
