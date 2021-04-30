require("dotenv").config();

module.exports = {
  development: {
    Host: process.env.Host,
    Port: process.env.Port,
    Username: process.env.User,
    Password: process.env.Password,
    Database: process.env.Database,
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