let express = require('express');
let bodyParser = require('body-parser');
let router = require('./router');
let User = require('./class/user');
let Harvester = require('./class/harvester');
let Resource = require('./class/resource');
let View = require('./class/view');
let Economie = require('./class/economie');
// On crée l'application
let app = express();

// Permet de parser le body des requêtes, pour obtenir les paramètre POST
app.use(bodyParser.urlencoded({ extended: false }));


// Les images et autres ressources statiques seront dans le dossier public
app.use(express.static(__dirname + '/public'));

// On initialise notre module de routage
router.init(app);

// On demande à l'application d'écouter soit sur le port défini par le système (Heroku définie le 80 de base), soit sur le port 8080
let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});
let r = Resource.getInstence();

let e = new Economie();
e.test(); 
setInterval(function() { e.start(); }, 10);