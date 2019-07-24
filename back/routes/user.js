const express = require('express');
const db = require('../db');

const router = express.Router();


router.get('/:id', (req, res) => {
  db.query('SELECT * FROM user WHERE id = ?', req.params.id, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      })
    }
    if (results.length === 0) {
      return res.status(404).json({
        error: `No record with id ${req.params.id}`
      });
    }
    return res.json(results[0]);
  });
});

router.put('/:id', (req, res) => {
  db.query('UPDATE user SET ? WHERE user.id = ?', [req.body, req.params.id], (err, status) => {

    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      })
    }

    res.json(req.body);
  });
});

module.exports = router;