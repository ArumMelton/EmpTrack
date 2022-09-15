//requires //
const mysql = require("mysql2");
require('dotenv').config();

//implementing middleware //
const db = mysql.createConnection(
    {
      host: "localhost",
      //enter your own username, otherwise root
      user: "root",
      //enter your own password
      password: "LogicProX10!",
      database: process.env.DB_DATABASE,
    }
  );

module.exports = db;