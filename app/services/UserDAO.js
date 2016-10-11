const db = require('../config/db');
const sql = require('../config/sqlProvider').users;
const User = require('../models/User');

class UserDAO {
  static all() {
    return db.map(sql.all, [], (row) => new User(row));
  }
  static findBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.one(sql.find, [key, value])
             .then((row) => new User(row));
  }
  static create({ name, email, password }) {
    return db.one(sql.create, [name, email, password])
             . then((row) => new User(row));
  }
  // In future, add delete static function to remove sentences
}

module.exports = UserDAO;
