const SentenceDAO = require('../services/SentenceDAO');

class SentenceController {
  static getOne(req, res) {
    SentenceDAO.getSentence()
           .then((sentence) => res.status(200).json(sentence));
  }
}

module.exports = SentenceController;
