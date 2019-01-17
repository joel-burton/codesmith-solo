const express = require('express');
const characterController = require('../controllers/characterController');

const router = express.Router();

// returns data for a single character
router.post('/', characterController.getOne, (req, res) => res.json(res.locals.character));

// creates a new character in db OR finds a specific character
router.post('/create', characterController.create, (req, res) => res.json(res.locals.character));

// updates existing character in DB
router.put('/', (req, res) => res.send('returns updated character record'));

// deletes an existing character from DB
router.delete('/', (req, res) => res.send('DELETED'));

module.exports = router;
