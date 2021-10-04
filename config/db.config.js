const DBCONFIG = require("./config.json").DATABASE;


module.exports = {
    host: DBCONFIG.HOST,
    user: DBCONFIG.USER,
    password: DBCONFIG.PASSWORD,
    DB: DBCONFIG.DB,
    port: DBCONFIG.PORT,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};