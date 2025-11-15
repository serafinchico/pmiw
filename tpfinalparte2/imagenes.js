
let principal
  let musica;
let juego

  let imgRio;
let imgJugador;
let imgSanguche;
let imgBenson;
let imgArcade;

let portada;
let portadaPerdiste;
let portadaGanaste;
let portadaTutorial;
let portadaCreditos;
let imgBoton;

function preload() {
  soundFormats('mp3');
  musica=loadSound("data/bala.mp3")

    imgCasa = loadImage("data/casa.png");
  imgJugador = loadImage("data/personajes.png");
  imgSanguche = loadImage("data/doblesanguche.png");
  imgBenson = loadImage("data/benson.png");
  imgArcade = loadImage("data/arcade.png");
  portada = loadImage("data/portada.jpg");
  portadaPerdiste = loadImage("data/derrota.jpg");
  portadaGanaste = loadImage("data/musculoso.jpg");
  portadaTutorial = loadImage("data/tutorial.jpg");
  portadaCreditos = loadImage("data/creditos.jpg");
  imgBoton = loadImage("data/boton.png");
}


function setup() {
  createCanvas(640, 480);
  principal = new Principal();
  juego = new Juego();
}


function draw() {
  background(170, 0, 170);
  principal.mostrar();


  if (keyIsPressed) {
    juego.teclaPresionada();
  }
}
function mousePressed() {
  principal.cambioDePantallas()
}
