let User = require('./user');
let Resource = require('./resource');

class Harvester extends User {
  nextAction() {
    super.nextAction();
    let iSwitch = this.action[0];
    switch (iSwitch) {
      case 0: // standby
        if (!this.emergency) {
          this.action[0] = 1;
          this.action[1] = 5;
        } else {
          this.action[0] = 4;
          this.action[1] = 2;
        }
        let r = Resource.getInstence();
        r.takeArtisanalResource(50);
console.log(r.artisanalResources);
        return 0;
        break;
      case 1:// search
        if (!this.emergency) {
          if (this.action[1] < 0) {
            this.action[1] = this.action[1] - 1;
            return 0;
          }else if (this.action[1] == 0 ){
            this.getRandomArbitrary(1,5);
          }
        } else {
          this.action[0] = 4;
          this.action[1] = 2;
        }
        return 0;
        break;
      case 2:// harvesting
        if (!this.emergency) {
          this.action[0] = 1;
          this.action[1] = 5;
        } else {
          this.action[0] = 4;
          this.action[1] = 2;
        }
        return 0;
        break;
      case 3:// sell
        if (!this.emergency) {
          this.action[0] = 1;
          this.action[1] = 5;
        } else {
          this.action[0] = 4;
          this.action[1] = 2;
        }
        return 0;
        break;
      case 4:// search emergency
        if (!this.emergency) {
          this.action[0] = 1;
          this.action[1] = 5;
        } else {
          this.action[0] = 4;
          this.action[1] = 2;
        }
        return 0;
        break;
      case 5:// harvesting emergency
        if (!this.emergency) {
          this.action[0] = 1;
          this.action[1] = 5;
        } else {
          this.action[0] = 4;
          this.action[1] = 2;
        }
        return 0;
        break;
      case 6:// sell emergency
        if (!this.emergency) {
          this.action[0] = 1;
          this.action[1] = 5;
        } else {
          this.action[0] = 4;
          this.action[1] = 2;
        }
        return 0;
        break;

      default:
        break;
    }


  }

}

module.exports = Harvester;