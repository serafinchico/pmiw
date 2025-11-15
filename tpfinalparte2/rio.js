class rio {
  constructor() {
    this.posX = -150;
    this.velocidad = 0.2;
  }

  dibujar() {
    fill(0);
    rect(this.posX, -10, 20, height + 10);
    if (this.posX < 170) {
      this.posX = this.posX + this.velocidad;
    }
  }
}
