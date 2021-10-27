var config = null;
try {
    config = require("../backend/config/config.json");
} catch (ex) {
    console.log(`WARN: environnement instable -- config.json non trouvé`);
    config = require("../backend/config/config.model.json");
}
module.exports = {
    publicPath: '',
    "devServer": {
        "port": 8081, //config.SERVER.PORT,
        "proxy": {
            "/api": {
                "target": `http://${config.SERVER.HOST}:${config.SERVER.HOST}`,
                "changeOrigin": true
            }
        }
    }
}