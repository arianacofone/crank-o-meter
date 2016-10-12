const express = require('express');
const SentenceController = require('../controllers/SentenceController');

const router = express.Router();

router.get('/', SentenceController.getOne);

module.exports = router;
