const {Sequelize, DataTypes} = require('sequelize');

const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.DB_USER, dbConfig.DB_PASSWORD, {
    host: dbConfig.DB_HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.DB_PORT
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.books = require("./book.model.js")(sequelize, Sequelize, DataTypes);

module.exports = db;