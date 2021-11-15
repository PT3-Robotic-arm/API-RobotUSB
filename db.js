const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const { open } = require('sqlite');

module.exports = async function openDb() {
  return await open({
    filename: './db.sqlite',
    driver: sqlite.Database,
  });
}
