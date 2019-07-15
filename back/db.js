const mysql = require('mysql');
const settings = require('./db-settings.js');

const connection = mysql.createConnection(settings);

module.exports = connection;