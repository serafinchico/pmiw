class Pantallas {
  constructor() {
  }


  mostrarPantallaInicio() {

    image(portada, 0, 0, width, 480);
    let titulo = "Un show mas el problema del arcade";
    let subtitulo = "Chico Serafin , Valentino Andreu";
    let boton = "jugar";
    let creditos = "créditos";
    let tutorial = "tutorial";

    fill(0);
    image(imgBoton,450, 220, 60, 30);
    image(imgBoton,130, 220, 60, 30);
    image(imgBoton,285, 220, 65, 30);
    fill(0)
      textSize(25);
    text(titulo, width / 2, height / 2 - 125);
    fill(0, 0, 255);
    textAlign(CENTER);
    textSize(18);
    text(boton, 160, height / 2);
    text(creditos, 315, 240);
    text(tutorial, 480, height / 2);
    fill(0);
    textSize(22);
    text(subtitulo, width / 2, height / 2 - 80);
  }

  mostrarPantallaControles() {
    image(portadaTutorial, 0, 0, 640, 480);
    let titulo = "Tenes agarrar los doble sanguche para poder cargar energia.";
    let subtitulo = "Evita a los enemigos \n te moves con las flechas, disparas con el enter.";
    let boton = "volver";

    fill(0);
    textAlign(CENTER);
    textSize(22);
    text(titulo, width / 2, height / 2 - 125);
    text(subtitulo, width / 2, height / 2 - 80);
    image(imgBoton,130, 220, 60, 30);
    fill(0, 0, 255);
    textSize(18);
    text(boton, 160, height / 2);
  }

  mostrarPantallacreditos() {
    image(portadaCreditos, 0, 0, 640, 480);
    let titulo = "Juego creado por \n Serafin Chico, Valentino Andreu de la comisión 2 \n Inspirado en la serie \n un show mas";
    let boton = "volver";
    fill(0);
    image(imgBoton,130, 220, 60, 30);
    fill(255, 255, 0);
    textAlign(CENTER);
    textSize(22);
    text(titulo, width / 2, 400);
    fill(0, 0, 255);
    textSize(18);
    text(boton, 160, height / 2);
  }
}
