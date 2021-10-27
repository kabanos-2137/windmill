//Imports
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => { // GET request
  res.render('index') //Respond to GET request with index file
})

module.exports = router; // Export router