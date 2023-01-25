const path = require('path');
require('dotenv').config();

const development = {
    username: process.env.POSTGRESQL_USERNAME,
    password: process.env.POSTGRESQL_PASSWORD,
    database: process.env.POSTGRESQL_DATABASE,
    host: process.env.POSTGRESQL_HOST,
    port:process.env.POSTGRESQL_PORT,
    dialect: "postgres",
    operatorAliases : false
}

module.exports = development;