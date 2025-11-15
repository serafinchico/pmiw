class bala {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.disparada = false;
    this.vida = true;
  }
  dibujar() {
    if ( this.disparada && this.vida) {
      if (this.vida) {
        fill(0);
        ellipse(this.posX, this.posY, 5, 5);
        this.mover()
      }
    }
  }
  mover() {
    this.posY -=8
  }
  disparar() {
    this.disparada = true;
  }
  destruir() {
    this.vida = false;
  }
}
