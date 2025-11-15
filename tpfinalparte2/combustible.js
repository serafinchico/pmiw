class combustible {
  constructor() {
    this.posY = 50;
    this.posX = 453;
    this.ancho = 30;
    this.alto =150;
   
  }

  gastoDeCombustible() {
   
    if ( this.alto > 0) {
      this.alto = this.alto - 0.10;
      
    }
  }
  dibujar(){
    fill(255,0,0);
    rect(this.posX,this.posY,this.ancho,this.alto);
  }
}
