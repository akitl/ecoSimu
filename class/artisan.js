let User = require('./user');

class Artisan extends User {
    crie() {
      super.crie();
      console.log(this.nom + ' aboie.');
    }
  }

  module.exports = Artisan;