//https://youtu.be/lHMpDEdWO3A
//serafin chico y valentino andreu comision 2 

class Principal {
  constructor() {
    this.juego = new Juego;
    this.Pantallas = new Pantallas
      this.estado = "inicio";
  }

  mostrar() {
    if (this.estado === "inicio") {
      this.Pantallas.mostrarPantallaInicio();
    } else if (this.estado === "jugar") {
      juego.dibujar()
    } else if (this.estado === "instrucciones") {
      this.Pantallas.mostrarPantallaControles()
    } else if (this.estado === "creditos") {
      this.Pantallas.mostrarPantallacreditos();
    }
  }
  cambioDePantallas() {
    if ( this.estado === "inicio") {
      if (mouseX > 130 && mouseX < 130 + 60 && mouseY > 220 && mouseY < 220 + 30) {
        this.estado = "jugar";
      }
      if (mouseX > 450 &&
        mouseX < 450 + 60 &&
        mouseY > 220 &&
        mouseY < 220 + 30) {
        this.estado = "instrucciones";
      }
      if (mouseX > 285 &&
        mouseX < 285 + 60 &&
        mouseY > 220 &&
        mouseY < 220 + 30) {
        this.estado = "creditos";
      }
    }
    if (this.estado === "instrucciones" || this.estado === "creditos") {
      if (mouseX > 130 &&
        mouseX < 130 + 60 &&
        mouseY > 220 &&
        mouseY < 220 + 30) {
        this.estado = "inicio";
      }
    }
  }
}
