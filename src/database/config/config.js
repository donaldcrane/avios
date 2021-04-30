require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "Ejiofor52@",
    database: "avios",
    host: "127.0.0.1",
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