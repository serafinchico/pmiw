class personaje {
  constructor() {
    this.posX = width/2;
    this.posY = 440;
    this.vidas = 1;
    this.bala = new bala();
  }

  dibujar() {
    this.bala.dibujar();

    fill(0, 255, 0);
    image(imgJugador,this.posX, this.posY, 40, 40);
  }

  moverDerecha() {
    if (this.posX < this.rioDerecha.posX - 20) {
      this.posX = this.posX + 3;
    }
  }
  moverIzquierda() {
    if (this.posX > this.rio.posX+22) {
      this.posX = this.posX -3 ;
    }
  }

  dispararBala() {
    this.bala = new bala(this.posX, this.posY);
    this.bala.disparar();
  }
  haDisparadoBala() {
    return this.bala.disparada;
  }
  teclaPresionada() {
    if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === ENTER) {
      this.dispararBala();
      if (!musica.isPlaying()) {

        musica.play();
      }
    }
  }
}
