class User {
  constructor(nom, id) {
    this.nom = nom;
    this.id = id;
    this.balance = 200;
    this.rent = 20;
    this.inventory = [];
    this.work = null;
    this.action = [0,0];
    this.emergency = false;
  }

  nextAction() {
    number: cpoumr = this.canPayOrUpgradeMyRent();
    if (cpoumr == 0){
      this.emergency = true;
    }else {
      if ( this.action[0] == 0 && cpoumr == this.rent*10){
        this.rent = cpoumr
        return 1;
      }
    }
    
  }

  canPayOrUpgradeMyRent(){
    if( this.balance < this.rent){
      return 0;
    }else{
      if((this.balance*30)/100 == this.rent*10){
        return this.rent * 10
      }else{
        this.rent;
      }
    } 
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