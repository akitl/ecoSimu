let User = require('./user');
let Action = require('./action');
let Entree = require('./entree');
let Resource = require('./resource');
let Sortie = require('./sortie');
let Work = require('./work');

class Economie {
    constructor(name) {
      this.name = name;
      this.list = [];
      this.idUser = 0;

      this.recolte = new Work("recolteur",0)
      this.artisan = new Work("artisan",1)

    }
    test() {
        var i =0;
        while(i < 25){
            this.list.push(generateUser("recolteur"));
            this.list.push(generateUser("artisan"));
            i++
        }
      }

      generateUser(name) {
       u = new User(name+""+this.idUser,this.idUser);
       this.idUser++;
       if (name == "recolteur"){
           u.work = recolte;
       }else {
           u.work = artisan;
       }



        return u;
      }
  }
  module.exports = Economie;

  /*
   une itération sur le tableau list corespond a une action de chaque element de la list 
   une journé est coupé 200 action 
  */