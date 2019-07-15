const express = require('express');
const db = require('../db');

const router = express.Router();

// Route "READ all"
router.get('/', (req, res) => {

  db.query('SELECT * FROM playlist', (err, results) => {

    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      })
    }
    return res.json(results);
  });
});

// en tant qu'utilisateur, je veux pouvoir consulter une playlist en renseignant son id dans l'url

router.get('/:id', (req, res) => {

  db.query('SELECT * FROM playlist WHERE id = ?', req.params.id, (err, results) => {
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

// en tant qu'utilisateur, je veux pouvoir créer une nouvelle playlist
router.post('/', (req, res) => {
  db.query('INSERT INTO playlist SET ?', req.body, (err, status) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      })
    }
    db.query(
      'SELECT * FROM playlist WHERE id = ?',
      status.insertId,
      (err, results) => {
        res.status(201).json(results[0]);
      }
    )
  });
});

// en tant qu'utilisateur, je veux pouvoir modifier une playlist
router.put('/:id', (req, res) => {
  db.query('UPDATE playlist SET ? WHERE id = ?', [req.body, req.params.id], (err, status) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      })
    }
    res.json(req.body);
  });
});

// en tant qu'utilisateur, je veux pouvoir supprimer une playlist
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM playlist WHERE id = ?', req.params.id, (err, status) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      })
    }
    res.sendStatus(204);
  });
});

module.exports = router;