let PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));

let db;

exports.init = () => {
  if (!db)
    db = new PouchDB('http://localhost:5984/test_couch');

  return db;
}