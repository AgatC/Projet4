const express = require('express');
const bodyParser = require('body-parser');
const trackRouter = require('./routes/track');
const playlistRouter = require('./routes/playlist');
const searchRouter = require('./routes/search');
const usersRouter = require('./routes/users');

const app = express();

app.use(bodyParser.json());

app.use('/api/track', trackRouter);
app.use('/api/playlist', playlistRouter);
app.use('/api', searchRouter);
app.use('/api/users', usersRouter);


app.listen(process.env.PORT || 5000, err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(`Server is listening on port ${process.env.PORT || 5000}`);
  }
});