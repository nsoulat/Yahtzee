import axios from "axios";
var config = null;
try {
    config = require("../../backend/config/config.json");
} catch (ex) {
    config = require("../../backend/config/config.model.json");
}
const serverConfig = config.SERVER;
const HOSTNAME = serverConfig.HOST;
const PORT = serverConfig.PORT;

export default axios.create({
  baseURL: `http://${HOSTNAME}:${PORT}/api`,
  headers: {
    "Content-type": "application/json"
  }
});
