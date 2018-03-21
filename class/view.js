let User = require('./user');
let Action = require('./action');
let Entree = require('./entree');
let Resource = require('./resource');
let Sortie = require('./sortie');
let Harvester = require('./harvester');

class View {
    constructor() {
      this.usersH = [];
      this.usersA = [];
      this.users = [];
      this.artisanalResources = 0 ;
      this.totalBalance = 0;
      this.totalBalanceTick = 0;
      this.tick =0 ;
      this.higestRent = 0;
      this.lowestRent = 0;
      
    }

    addHarvester(h){
      this.usersH.push(h);
    }

    updateTick(t){
      this.tick = t;
    }
    
    updateArtisanalResource(ar){
      this.artisanalResources = ar;
    }

    updateBalances(tbt){
      this.totalBalanceTick = tbt;
      this.totalBalance =  tbt;
    }

    updateRent(lr,hr){
      this.higestRent = hr;
      this.lowestRent =  lr;
    }

    getHarvesters(){
     return this.usersH;
    }

    static getInstence(){
      if(!View.instance){
        console.log("Re instencisation")
        View.instance = new View();
      }
      console.log("instancié ")
      return View.instance;
    }
  }
  module.exports = View;
