class Resource {
    constructor() {
      this.artisanalResources = 100000;
      this.ARresilianceDuration =20;
      this.ARresilianceValue = 500;
      this.ARactualTick = 0; 
      
    }

    takeArtisanalResource(i){
      //console.log("take R");
      this.artisanalResources = this.artisanalResources -i;
    }

    updateTick(){
      
      this.ARresiliance();
    }

    ARresiliance(){
      this.ARactualTick++;
      if (this.ARactualTick == this.ARresilianceDuration){
        this.artisanalResources = this.artisanalResources + this.ARresilianceValue;
        this.ARactualTick =0;
      }

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