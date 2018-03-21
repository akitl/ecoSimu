let home_controller = require('./controllers/home');
let users_controller = require('./controllers/users');

exports.init = (app) => {
    // Home

    app.get('/', (req, res) => {
        home_controller.index(req, res);
    });

    // Users

    app.get('/users', users_controller.list);
    

    app.get('/users/:name', (req, res) => {
        users_controller.index(req, res);
    });
}

