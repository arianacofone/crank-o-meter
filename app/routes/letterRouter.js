const express = require('express');
const LetterController = require('../controllers/LetterController');

const router = express.Router();

router.post('/', LetterController.createAndSend);

module.exports = router;
