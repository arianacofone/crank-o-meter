const db = require('../config/sql/db');
const sql = require('../config/sql/sqlProvider').users;
const User = require('../models/Users');

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
  staticCreate({ name, email, password }) {
    return db.one(sql.create, [name, email, password])
             . then((row) => new User(row));
  }
  // In future, add delete static function to remove sentences
}

module.exports = UserDAO;
