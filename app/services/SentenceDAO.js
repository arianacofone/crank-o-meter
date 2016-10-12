const db = require('../config/db');
const sql = require('../config/sqlProvider').sentences;
const Sentence = require('../models/Sentence');

class SentenceDAO {
  static getSentence() {
    return db.map(sql.get, [], (row) => new Sentence(row));
  }
}

module.exports = SentenceDAO;
