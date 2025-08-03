// db.js
const mysql = require('mysql2/promise'); // Using promise wrapper

const pool = mysql.createPool({
  host:  'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database:  'jdbc',
  port: 3306,

});

module.exports = pool;