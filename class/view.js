let User = require('./user');
let Action = require('./action');
let Entree = require('./entree');
let Resource = require('./resource');
let Sortie = require('./sortie');
let Harvester = require('./harvester');

class View {
    constructor() {
      this.userTest = null;
    }

    addHarvester(h){
      console.log("Salut");
      console.log(this);
      this.userTest = h;
    }

    static getInstence(){
      if(!View.instance){
        View.instance = new View();
      }
      return View.instance;
    }
  }
  module.exports = View;
