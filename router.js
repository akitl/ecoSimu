let home_controller = require('./controllers/home');
let users_controller = require('./controllers/users');
let View = require('./class/view');

exports.init = (app) => {
    // Home

    let v = View.getInstence();
v.addHarvester("this.list[i]");

    app.get('/', (req, res) => {
        home_controller.index(req, res);
    });

    // Users

    app.get('/users', users_controller.list);
   
    

    app.get('/users/:name', (req, res) => {
        users_controller.index(req, res);
    });
}

