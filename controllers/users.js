let user_model = require('../models/user');
let Resource = require('../class/resource');
let View = require('../class/view');

// GET /users
exports.list = (req, res) => {
  // Les resultats ne sont trouvés qu'au moment ou le Promise renvoie sa callback de succes, attention a ne pas attendre les résultats en dehors du promise
  //View.getInstence();
  
  res.json(View.instance);
    //res.json(user_model.getAllUsers());
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