import axios from "axios";
const serverConfig = require("../../backend/config/config.json").SERVER;
const HOSTNAME = serverConfig.HOST;
const PORT = serverConfig.PORT;

export default axios.create({
  baseURL: `http://${HOSTNAME}:${PORT}/api`,
  headers: {
    "Content-type": "application/json"
  }
});
