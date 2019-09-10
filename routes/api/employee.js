const express = require('express');
const router = express.Router();
const Employee = require('../../models/Employee');

router.post('/', async (req, res) => {
  res.send(req.body);
});

module.exports = router;
