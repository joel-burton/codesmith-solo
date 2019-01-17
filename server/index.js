/* eslint-disable no-console, */
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// import routers
const user = require('./routers/user');
const character = require('./routers/character');

const { PORT } = process.env;
const app = express();

// default middleware for every request
app.use(cookieParser());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.locals.error = {};
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
});

// default page
app.get('/', (req, res) => res.send('please sign up or sign in'));

app.use('/user', user);

app.use('/character', character);

// ERROR HANDLER //
app.use((err, req, res, next) => {
  switch (err.type) {
    // user errors
    case 'user':
      console.log(`encountered user error: ${res.locals.error}`);
      return res.status(401).send('You\'re not authorized to do that');

    case 'db':
      console.log(`database error: ${res.locals.error.message}`);

      return res.status(500).send(res.locals.error.message);

    // default error
    default:
      return res.status(500).send('Sorry, something went wrong...');
  }
});

app.listen(PORT, () => console.log(`||||| project server listening on port ${PORT} |||||`));
