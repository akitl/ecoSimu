let Action = require('./action');

class Work {
    constructor(name, id) {
      this.name = name;
      this.id = id;
      
    }

    generateList(id){
        if(id == 0){
            this.actions = [ 
                new Action("cherche",0,5,)
            ]
        }
    }
  }
  module.exports = Work;


  /*
  liste d'action pour un metié donnée 
  */