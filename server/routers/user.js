const express = require('express');
const userController = require('../controllers/userController');
const characterController = require('../controllers/characterController');

const router = express.Router();

// ***   handles all routes to '/user/...' *** //

// logs in a user, redirects to '/home'
router.post('/', userController.login, (req, res) => res.redirect('/user'));

// user home page => serves links to individual characters
router.get('/', characterController.getAll, (req, res) => res.send('user home\na list of a user\'s characters'));

// creates a new user => redirects to '/user'
router.post('/signup', userController.create, (req, res) => {
  res.status(200).json(req.body);
});

// logs out a user, redirects to '/'
router.post('/logout', (req, res) => res.redirect('/'));


module.exports = router;
