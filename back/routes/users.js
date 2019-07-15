const express = require('express');
const db = require('../db');

const router = express.Router();

// Route "READ all"
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {

    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      })
    }
    return res.json(results);
  });
});

// en tant qu'users, je veux pouvoir créer mon profil
router.post('/', (req, res) => {
  db.query('INSERT INTO users SET ?', req.body, (err, status) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      })
    }
    db.query(
      'SELECT * FROM users WHERE id = ?',
      status.insertId,
      (err, results) => {
        res.status(201).json(results[0]);
      }
    )
  });
});

module.exports = router;