let User = require('./user');
let Resource = require('./resource');
var configEco = require('../configEco');

class Harvester extends User {
  nextAction() {
    // action du user standar permet la verification du loyer 
    super.nextAction();
    let iSwitch = this.actionId;
    switch (iSwitch) {
      case 0: // standby
     // console.log("standby");
      
        if (!this.emergency) { // loyer peyable
          this.actionId = 1; // action de recherhe 
          this.actionDuration = configEco.SearchDuration; 
        } else {
          this.actionId = 4;
          this.actionDuration = configEco.SearchDurationEmr;
        }
        return 0;
        break;
      case 1:// search
      //console.log("search id:"+this.actionId+" | duration: "+this.actionDuration+" | Result: "+this.actionResult+" | Traitement: "+this.actionTraitement);


        if (!this.emergency) {
          // non emergency 
          if (this.actionDuration > 0) { // si la recherche n'est pas fini on décrémente
            this.actionDuration = this.actionDuration - 1;
            return 0;
          } else if (this.actionDuration == 0) { // si la recherche est fini
            this.actionResult = this.getRandomArbitrary(configEco.MinFindHarvest, configEco.MaxFindHarvest); // on donne le nombre de resource trouver  
            if(Resource.instance.artisanalResources < this.actionResult){ // on veriffie le stoque de resource
              this.actionResult = Resource.instance.artisanalResources; // on donne le max de resource possible si il y en as moins que le nombre demmendé
            }
            if(this.actionResult == 0){// si aucune ressrouce attendu
              this.actionDuration = configEco.SearchDuration;
              return 0;
            }else{
              this.actionId = 2;
              return 0;
            }

          }
        } else {
          if (this.actionDuration > 0) {
            this.actionDuration = this.actionDuration - 1;
            return 0;
          } else if (this.actionDuration == 0) {
            this.actionResult = this.getRandomArbitrary(1, 2);
            this.actionId = 5;
            return 0;
          } else if (this.actionDuration > 2) {
            this.actionDuration = 1;
            return 0;
          }
        }
        return 0;
        break;
      case 2:// harvesting
      //console.log("harvesting id:"+this.actionId+" | duration: "+this.actionDuration+" | Result: "+this.actionResult+" | Traitement: "+this.actionTraitement);

        if (!this.emergency) {
          if (this.actionResult > 0) {
            this.actionDuration = this.actionResult * 2;
            this.actionTraitement = this.actionResult;
            this.actionResult = 0;
            return 0;
          } else if (this.actionDuration > 0) {
            this.actionDuration = this.actionDuration - 1;
            return 0;
          } else if (this.actionDuration == 0) {
            this.inventory[1] = this.inventory[1] + this.actionTraitement;
            Resource.instance.takeArtisanalResource(this.actionTraitement);
            this.actionTraitement = 0;
            if (this.inventory[1] >= 20) {
              this.actionId = 3;
              this.actionDuration = configEco.SearchDuration;
              return 1;
            } else {
              this.actionId = 0;
              return 0;
            }
          }
        } else {
          if (this.inventory[1] * 5 + this.canPayOrUpgradeMyRent() < 0) {
            this.actionId = 6;
          }
          if(this.actionDuration == 0){
            this.actionDuration = 1;
            return 0;
          }
          if (this.actionDuration > 2) {
            if (this.actionDuration - this.actionTraitement > 0) {
              this.actionTraitement = this.actionDuration - this.actionTraitement;
              this.actionDuration = 1;
              return 0;
            }
            if (this.actionDuration - this.actionTraitement == 0) {
              this.inventory[1] = this.inventory[1] + (this.actionTraitement - 1);
              Resource.instance.takeArtisanalResource(this.actionTraitement);             
               this.actionDuration = 0; this.actionResult = 0; this.actionTraitement = 0;
              return 1;
            }
          } else if (this.actionDuration < 2) {
            if (this.actionTraitement > 1) {
              this.inventory[1] = this.inventory[1] + (this.actionTraitement - 1);
              Resource.instance.takeArtisanalResource(this.actionTraitement); 
              return 1;
            } else if(this.actionDuration == 1) {
              this.inventory[1] = this.inventory[1] + this.actionTraitement;
              Resource.instance.takeArtisanalResource(this.actionTraitement);
              return 1;
            }
          }
        }
        return 0;
        break;
      case 3:// sell
     // console.log("sell");

        if (!this.emergency) {
          if (this.actionDuration == 0){
            this.balance = this.balance + this.inventory[1]*5;
            this.inventory[1] = 0;
            this.actionId = 0;
            return 0;
          }else{
            this.actionDuration = this.actionDuration -1;
            return 0;
          }
        } else {
          this.actionId = 4;
          this.actionDuration = configEco.SearchDurationEmr;
        }
        return 0;
        break;
      case 4:// search emergency
      console.log("search emergency");

        if (!this.emergency) {
          this.actionId = 1;
          this.actionDuration = configEco.SearchDuration;
        } else {
          this.actionId = 4;
          this.actionDuration = configEco.SearchDurationEmr;
        }
        return 0;
        break;
      case 5:// harvesting emergency
      console.log("harvesting emergency");

        if (!this.emergency) {
          this.actionId = 1;
          this.actionDuration = configEco.SearchDuration;
        } else {
          this.actionId = 4;
          this.actionDuration = configEco.SearchDurationEmr;
        }
        return 0;
        break;
      case 6:// sell emergency
      console.log("sell emergency");

        if (!this.emergency) {
          this.actionId = 1;
          this.actionDuration = configEco.SearchDuration;
        } else {
          this.actionId = 4;
          this.actionDuration = configEco.SearchDurationEmr;
        }
        return 0;
        break;

      default:
      console.log("default");
        break;
    }


  }

}

module.exports = Harvester;