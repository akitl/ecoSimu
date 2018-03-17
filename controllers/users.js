let user_model = require('../models/user');

// GET /users
exports.list = (req, res) => {
  // Les resultats ne sont trouvés qu'au moment ou le Promise renvoie sa callback de succes, attention a ne pas attendre les résultats en dehors du promise

  user_model.getAllUsers().then((result) => {
    res.render('pages/users/list', { users: result.docs });
  })
  .catch((err) => {
    res.render('pages/users/list', { users: false });
  });
}

// GET /users/:name
exports.index = (req, res) => {
  user_model.getUser(req.params.name).then((result) => {
    res.render('pages/users/index', { user: result.docs[0] });
  })
  .catch((err) => {
    res.render('pages/users/index', { user: false });
  });
}