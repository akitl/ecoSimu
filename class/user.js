var configEco = require('../configEco');

class User {
  constructor(nom, id) {
    this.nom = nom;
    this.id = id;
    this.balance = configEco.BaseBalance;
    this.rent =configEco.BaseRent;
    this.inventory = [0,0];
    this.work = null;
    this.actionId = 0;
    this.actionDuration = 0;
    this.actionResult = 0;
    this.actionTraitement = 0;
    this.emergency = false;
  }

  nextAction() {
    let cpoumr = this.canPayOrUpgradeMyRent();
    if (cpoumr <= 0){
      this.emergency = true;
    }else {
      if ( this.actionId == 0 && cpoumr == this.rent*10){
        this.rent = cpoumr
        return 1;
      }
    }
    
  }

  canPayOrUpgradeMyRent(){
    if( this.balance < this.rent){
      console.log("urg");
      return this.balance - this.rent;
    }else{
      if((this.balance*30)/100 == this.rent*10){
        console.log("upgrade");
        return this.rent * 10
      }else{
        this.rent;
      }
    } 
  }

   getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
module.exports = User;


/*
Un user as un Work qui contien une liste d'action 
un loyer qui évolue avec ça condition
un stock d'objet l'inventaire qui contien de resource 
un compte en banque un chifre
*/


/* description des action pour un bucherons 

chercher du bois 
couper du bois 
retourner en ville
vendre du bois / mettre du bois en vente 
acheter des la nouriture 
acheter des meuble 

*/