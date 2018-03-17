class Resource {
    constructor(nom, id) {
      this.nom = nom;
      this.id = id;
    }

    static getInstence(){
      if(!Resource.instance){
        Resource.instance = new Resource();
      }
      return Resource.instance;
    }
  }
  module.exports = Resource;

  /*
  exemple arbre  = 5 unité de bois 
  une unité de bois = 50 miniblock 
  */