let User = require('./user');
let Action = require('./action');
let Entree = require('./entree');
let Resource = require('./resource');
let Sortie = require('./sortie');
let harvester = require('./harvester');
let View = require('./view');

class Economie {
    constructor(name) {
      this.name = name;
      this.list = [];
      this.idUser = 0;
      this.tick= 0;
      this.tickRent = 200 ;
      this.tickRentCount =0;


    }
    test() {
        //let v = View.getInstence();
        var i =0;
        while(i < 25){
            this.list.push(this.generateUser("recolteur"));
            //this.list.push(generateUser("artisan"));
            //View.instance.addHarvester(this.list[i]);
            i++
        }
      
      }

      start(){
        
        //let r = Resource.getInstence();
        //let v = View.getInstence();

        this.tick++;
        this.tickRentCount++;
        let totalBalanceTick =0;
        let lr = this.list[0].rent;
        let hr = this.list[0].rent;
       for (let index = 0; index < this.list.length; index++) {
           const element = this.list[index];
           if ( this.tickRentCount == this.tickRent){
            element.balance = element.balance - element.rent;
            this.tickRentCount =0;
           }
           element.nextAction();
           totalBalanceTick = totalBalanceTick + element.balance;
           if (element.rent > hr){
               hr = element.rent;
           }
           
       }
       Resource.instance.updateTick();
       View.instance.updateArtisanalResource(Resource.instance.artisanalResources);
       View.instance.updateBalances(totalBalanceTick);
       View.instance.updateTick(this.tick);
       View.instance.updateRent(lr,hr);

    }


      generateUser(name) {
      
       
       if (name == "recolteur"){
        let h = new harvester(name+""+this.idUser,this.idUser);   
        this.idUser++;
        return h 
       }else {
          // u.work = artisan;
       }

      }
  }
  module.exports = Economie;

  /*
   une itération sur le tableau list corespond a une action de chaque element de la list 
   une journé est coupé 200 action 
  */