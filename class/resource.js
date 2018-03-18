class Resource {
    constructor() {
      this.artisanalResources = 500;
      
    }

    takeArtisanalResource(i){
      this.artisanalResources = this.artisanalResources -i;
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