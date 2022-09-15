const db = require('../db/connection');
const cTable = require('console.table');

getDepartments = function () {
    db.query(`SELECT * FROM department`, (err, rows) => {
        console.table(rows);
        startProgram();
      });
    };
