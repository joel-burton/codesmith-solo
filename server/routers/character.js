const express = require('express');

const router = express.Router();

// gets data for a single character
router.get('/', (req, res) => res.send('data for a single character sheet'));

// creates a new character in DB
router.post('/', (req, res) => res.send('returns created character data from DB'));

// updates existing character in DB
router.put('/', (req, res) => res.send('returns updated character record'));

// deletes an existing character from DB
router.delete('/', (req, res) => res.send('DELETED'));

module.exports = router;
