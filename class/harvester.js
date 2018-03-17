let User = require('./user');

class Harvester extends User {
  nextAction() {
    super.nextAction();
    iSwitch = this.action[0];
    switch (iSwitch) {
      case 0: // standby
        
      break;
      case 1:// search
        
      break;
      case 2:// harvesting
      
      break;
      case 3:// sell
      
      break;
      case 4:// search emergency
      
      break;
      case 5:// harvesting emergency
    
      break;
      case 6:// sell emergency
    
      break;

      default:
        break;
    }


    }

  }

  module.exports = Harvester;