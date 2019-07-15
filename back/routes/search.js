const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/search', (req, res) => {
  let title = req.query.title;
  let genre = req.query.genre;
  let artist = req.query.artist;
  let where;
  if (title) {
    where = `SELECT playlist.* FROM playlist WHERE playlist.title LIKE "%${title}%"`;
  } else if (genre) {
    where = `SELECT playlist.* FROM playlist WHERE playlist.genre LIKE "%${genre}%"`;
  } else if (artist) {
    where = `SELECT track.* FROM track WHERE track.artist LIKE "%${artist}%"`;
  }
  db.query(where, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      });
    }
    if (results.length === 0) {
      return res.status(404).json({
        error: `No record with search ${req.params.search}`
      });
    }
    return res.json(results);
  });
});

module.exports = router;