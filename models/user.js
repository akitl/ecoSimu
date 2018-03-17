let db = require('./db').init();

exports.User = () => {
  name;
  age;
}

exports.getAllUsers = () => {
  return db.find({
    selector: {type: "User"},
    fields: ['_id', 'name']
  });
}

exports.getUser = (name) => {
  return db.find({
    selector: {type: "User", name: name},
    limit: 1
  });
}