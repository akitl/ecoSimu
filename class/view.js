let User = require('./user');
let Action = require('./action');
let Entree = require('./entree');
let Resource = require('./resource');
let Sortie = require('./sortie');
let harvester = require('./harvester');

class View {
    constructor() {
      this.userTest;
      
    }

    
    static getInstence(){
      if(!View.instance){
        View.instance = new View();
      }
      return View.instance;
    }
  }
  module.exports = View;
