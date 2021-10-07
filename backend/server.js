const path = require('path')
const express = require("express");

const app = express()

const serverConfig = require("./config/config.json").SERVER;
const HOSTNAME = serverConfig.HOST;
const PORT = serverConfig.PORT;

const db = require("./models");
db.sequelize.sync();

app.use(function (req, res, next) {
    date = new Date(Date.now())
    console.log('Time:', date.toLocaleDateString(), date.toLocaleTimeString(), "; url :", req.url);
    next(); // sans cette ligne on ne pourra pas poursuivre.
})

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// bind static front
app.use(express.static('../frontend/dist'))

// simple route
app.get("/hello", (req, res) => {
    res.statusCode = 200;
    res.json({
        status: 200,
        message: "Welcome to Yahtzee backend."
    });
});

require("./routes/player.routes")(app);

app.use(function (req, res) {
    console.log("et c'est le 404 : " + req.url);

    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');

    res.json({
        status: 404,
        message: "Request not found"
    })
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}.`);
});
