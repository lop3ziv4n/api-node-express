const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// database
const db = require('./models');
db.sequelize.sync()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the config:', err);
    });

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome Node.js application."});
});

// api routes
require("./routes/book.routes")(app);

// swagger
require('./config/swagger.config')(app);

// set port, listen for requests
const {PORT} = require("./config/app.config.js");
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});