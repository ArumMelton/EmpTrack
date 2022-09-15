const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username,
        user: 'root',
        // your mysql password,
        password: 'LogicProX10!',
        database: 'company'
    },
    console.log('Connected to Employee Tracker')
    
);

module.exports = db;