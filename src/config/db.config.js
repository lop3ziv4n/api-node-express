const dbConfig = {
    DB_HOST: process.env.DB_HOST  || "localhost",
    DB_PORT: process.env.DB_PORT  || 3308,
    DB_USER: process.env.DB_USER || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "root",
    DB_NAME: process.env.DB_NAME || "test",
    dialect: "mysql"
};

module.exports = dbConfig;
