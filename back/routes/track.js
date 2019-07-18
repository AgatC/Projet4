const express = require('express');
const db = require('../db');

const router = express.Router();

// Route "READ all"
router.get('/', (req, res) => {
  db.query('SELECT * FROM track', (err, results) => {

    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      })
    }
    return res.json(results);
  });
});

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM track WHERE id = ?', req.params.id, (err, results) => {
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

// en tant qu'utilisateur, je veux lister tous les morceaux d'une playlist

router.get('/playlist/:id', (req, res) => {
  db.query('SELECT track.* FROM track JOIN playlist ON track.playlist_id = playlist.id WHERE playlist_id = ?', req.params.id, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      });
    }
    return res.json(results);
  });
});

// en tant qu'utilisateur, je veux créer et affecter un morceau à une playlist
router.post('/', (req, res) => {
  db.query('INSERT INTO track SET ?', req.body, (err, status) => {

    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      })
    }
    db.query(
      'SELECT * FROM track WHERE id = ?',
      status.insertId,
      (err, results) => {
        res.status(201).json(results[0]);
      }
    )
  });
});

// en tant qu'utilisateur, je veux modifier un morceau d'une playlist
router.put('/:id', (req, res) => {
  db.query('UPDATE track SET ? WHERE track.id = ?', [req.body, req.params.id], (err, status) => {

    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      })
    }

    res.json(req.body);
  });
});

// en tant qu'utilisateur, je veux supprimer un morceau d'une playlist
router.put('/:id/playlist/delete', (req, res) => {
  db.query('UPDATE track SET playlist_id = null WHERE id = ?', req.params.id, (err, status) => {

    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      })
    }

    res.sendStatus(204);
  });
});

// en tant qu'utilisateur, je veux pouvoir supprimer un morceau
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM track WHERE id = ?', req.params.id, (err, status) => {
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