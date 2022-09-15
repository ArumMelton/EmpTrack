const db = require('../db/connection');
const cTable = require('console.table');

getDepartments = function () {
    db.query(`SELECT * FROM department`, (err, rows) => {
        console.table(rows);
        startProgram();
      });
    };

//add department function and confirmation that the department was added //
addDepartment= function (name) {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        db.query(sql, name, (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log(`The ${name} department was added to the database.`)
        });
        startProgram();
      };

      