class Juego {
  constructor() {
    this.juega = true;
    this.gana = false;
    this.personaje = new personaje();
    this.rio = new rio();
    this.rioDerecha = new rioDerecha();


    this.personaje.rio = this.rio;
    this.personaje.rioDerecha = this.rioDerecha;

    this.arcades = [];
    this.bensons = [];
    this.cantEnemigos = 10;
    this.cantSanguches = 7;
    this.combustible= new combustible();
    this.sanguches = [];


    //creacion de enemigos y bidones
    for (let i=0; i<this.cantSanguches; i++) {
      let posXAleatoria = random(50, width-50);
      let ubicacion = random(-20, -30);
      this.sanguches.push(new sanguche(posXAleatoria, ubicacion));
    }

    for (let i=0; i<this.cantEnemigos; i++) {
      let posXAleatoria = random(50, width-50);
      let ubicacion =random(-20, -40);
      this.bensons.push(new benson(posXAleatoria, ubicacion));
    }

    for (let t=0; t<this.cantEnemigos; t++) {
      let posXAleatoria = random(50, width-50);
      let ubicacion = random(-20, -40);
      this.arcades.push(new arcade(posXAleatoria, ubicacion));
    }
  }


  dibujar()
  {
    if (this.juega) {
      image(imgCasa, 0, 0, 640, 480);
      this.rioDerecha.dibujar();
      this.rio.dibujar();
      this.personaje.dibujar();
      this.combustible.dibujar();
      this.combustible.gastoDeCombustible();
      this.controlarDisparosAEnemigos();
      this.reubicarEnemigos();
      this.reubicarSanguches();
      this.verificarVidaDeEnemigos();


      for (let i=0; i<this.cantSanguches; i++) {
        this.sanguches[i].dibujar();
      }


      for (let i=0; i<this.cantEnemigos; i++) {
        this.bensons[i].dibujar();
      }

      for (let t=0; t<this.cantEnemigos; t++) {
        this.arcades[t].dibujar();
      }
      this.evaluarCombustible();
      this.evaluarColisionPersonajeConSanguches()
        this.evaluarColisionPersonajeConEnemigos();
    } else {
      if (!this.gana) {
        this.pantallaDePerdiste();
      }
      if (this.gana) {
        this.pantallaDeGanaste();
      }
    }
  }




  teclaPresionada()
  {
    this.personaje.teclaPresionada();
  }

  evaluarColisionPersonajeConEnemigos()
  {
    for (let i=0; i<this.cantEnemigos; i++) {
      this.bensons[i].dibujar();
      if (
        dist(
        this.bensons[i].posX,
        this.bensons[i].posY,
        this.personaje.posX,
        this.personaje.posY
        ) < 22) {
        this.juega = false;
        this.gana = false;
      }
    }
    for (let i=0; i<this.cantEnemigos; i++) {
      this.arcades[i].dibujar();
      if (
        dist(
        this.arcades[i].posX,
        this.arcades[i].posY,
        this.personaje.posX,
        this.personaje.posY
        ) < 22) {
        this.juega = false;
        this.gana = false;
      }
    }
  }


  evaluarCombustible() {
    if ( this.combustible.alto <= 1) {

      this.juega = false;
      this.gana = false;
    }
  }


  evaluarColisionPersonajeConSanguches() {
    for (let i = 0; i < this.cantSanguches; i++) {

      if (this.sanguches[i].vida && dist(
        this.sanguches[i].posX,
        this.sanguches[i].posY,
        this.personaje.posX,
        this.personaje.posY
        ) < 30
        ) {

        this.combustible.alto = 150;
        this.sanguches[i].destruir()
      }
    }
  }

  controlarDisparosAEnemigos() {
    if (this.personaje.haDisparadoBala()) {
      for (let i=0; i<this.cantEnemigos; i++) {
        this.bensons[i].haTocadoLaBala(this.personaje.bala);
      }
      for (let i=0; i<this.cantEnemigos; i++) {
        this.arcades[i].haTocadoLaBala(this.personaje.bala);
      }
    }
  }

  reubicarEnemigos() {
    for (let i = 0; i < this.cantEnemigos; i++) {
      this.arcades[i].reubicar();
      this.bensons[i].reubicar();
    }
  }
  reubicarSanguches() {
    for (let i = 0; i < this.cantSanguches; i++) {
      this.sanguches[i].reubicar();
    }
  }

  verificarVidaDeEnemigos() {
    let enemigosVivos = 0;
    for (let i = 0; i < this.cantEnemigos; i++) {
      if (   this.arcades[i].vida) {
        enemigosVivos++;
      }
    }
    for (let i = 0; i < this.cantEnemigos; i++) {
      if (this.bensons[i].vida) {
        enemigosVivos++;
      }
    }
    if (enemigosVivos === 0) {
      this.juega = false;
      this.gana = true;
    }
  }
  pantallaDeGanaste() {
    image(portadaGanaste, 0, 0, 640, 480);
    let  titulo = "has derrota a los enemigos felicitaciones"
      let  subtitulo =   "bien jugado"
      let   boton =     "inicior"


      fill(0,255,0);
    textAlign(CENTER);
    textSize(22);
    text(titulo, width / 2, height / 2 - 125);
    image(imgBoton, 130, 300, 60, 30);
    text(subtitulo, width / 2, height / 2 - 80);
    fill(0, 0, 255);
    textSize(18);

    text(boton, 160, 320);

    if (mouseIsPressed) {
      if (mouseX > 130 &&
        mouseX < 130 + 60 &&
        mouseY > 300 &&
        mouseY < 300 + 30) {
        principal.estado = "inicio";
        this.regresarAlInicio();
      }
    }
  }
  pantallaDePerdiste() {
    image(portadaPerdiste, 0, 0, 640, 480);
    let  titulo = "fuiste derribado"
      let  subtitulo =   "quizas lo logres en la proxima"
      let   boton =     "inicio"


      fill(0);
    textAlign(CENTER);
    textSize(22);
    text(titulo, width / 2, height / 2 - 125);
    textSize(22);
    text(subtitulo, width / 2, height / 2 - 80);
    image(imgBoton, 130, 300, 60, 30);
    fill(0, 0, 255);
    textSize(18);

    text(boton, 160, 320);

    if (mouseIsPressed) {
      if (mouseX > 130 &&
        mouseX < 130 + 60 &&
        mouseY > 300 &&
        mouseY < 300 + 30) {
        principal.estado = "inicio";
        this.regresarAlInicio();
      }
    }
  }

  regresarAlInicio() {

    this.juega = true;
    this.gana = false;
    this.personaje = new personaje();
    this.rio = new rio();
    this.rioDerecha = new rioDerecha();


    this.personaje.rio = this.rio;
    this.personaje.rioDerecha = this.rioDerecha;

    this.arcades = [];
    this.bensons = [];
    this.cantEnemigos = 10;
    this.cantSanguches = 10;
    this.combustible= new combustible();
    this.sanguches = [];


    for (let i = 0; i < this.cantSanguches; i++) {
      let posXAleatoria = random(50, width - 50);
      let ubicacion = random(-20, -30);
      this.sanguches.push(new sanguche(posXAleatoria, ubicacion));
    }

    for (let i = 0; i < this.cantEnemigos; i++) {
      let posXAleatoria = random(50, width - 50);
      let ubicacion = random(-20, -40);
      this.bensons.push(new benson(posXAleatoria, ubicacion));
    }

    for (let t = 0; t < this.cantEnemigos; t++) {
      let posXAleatoria = random(50, width - 50);
      let ubicacion = random(-20, -40);
      this.arcades.push(new arcade(posXAleatoria, ubicacion));
    }

    principal.estado = "inicio";
  }
}
