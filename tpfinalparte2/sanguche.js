class sanguche {
  constructor(posX, ubicacion) {
    this.posX = posX;
    this.radio = 10;
    this.posY = random(-200, -400);
    this.velocidad = random(0.7,1);
    this.vida = true;
  }
  
 dibujar() {
     if ( this.vida) {
    fill(150, 0, 150); 
    image(imgSanguche,this.posX, this.posY, this.radio * 4, this.radio * 4); 
    this.posY = this.posY + this.velocidad;
  }
 }
    reubicar() {
    if (this.posY > height ) {
      this.posY = random(-20, -40); 
      this.posX = random(175, 460);  

    }
  }
   destruir() {
    this.vida = false;
  }
}
