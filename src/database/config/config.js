require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: "mysql",
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: "mysql",
  },
  production: {
    url: process.env.PROD_DATABASE_URL,
    dialect: "mysql",
  },
};