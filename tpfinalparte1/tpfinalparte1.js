//https://youtu.be/LER-sp8BmpE
//serafin chico y valentino andreu comision 2 

let imagenes = []; 
let textos = [];
let opcionA = [];
let opcionB = [];
let destinoA = [];
let destinoB = [];

let escena = 1;
let musica;

let xA = 20, yA = 420, wA = 260, hA = 40;
let xB = 360, yB = 420, wB = 260, hB = 40;

function preload() {
  // Carga de imágenes 
  for (let i = 1; i <= 16; i++) {
    imagenes[i] = loadImage("data/p" + i + ".png");  
  }

  // Audio de fondo
  musica = loadSound("data/mario.mp3.mp3"); 
}

function setup() {
  createCanvas(640, 480);
  textFont("Arial");

  userStartAudio();   

  if (musica) {
    musica.loop();
  }

  // --------- TEXTOS NARRATIVOS 
  textos[1]  = "La arcade 'Tiempo Roto' despierta en el parque. Luces verdes y violetas salen de la pantalla. Benson llega furioso y les ordena arreglarlo. ¿Qué hacen?";
  textos[2]  = "En el taller, Skips confirma que falta el Foco Cuántico, una pieza clave para estabilizar la energía.";
  textos[3]  = "Benson acepta que investiguen, pero exige resultados rápidos. Se oye un zumbido raro desde la casa de Fantasmin.";
  textos[4]  = "En el depósito aparece un portal pequeño. Un minimonstruo roba el Foco y corre hacia el portal.";
  textos[5]  = "En la cafetería, Margaret halla un manual: el Foco responde a música estable y bien afinada.";
  textos[6]  = "En la casa de Fantasmin, un dron poseído zumba. Lleva un rastreador que podría guiar hasta la arcade.";
  textos[7]  = "Dentro del portal, el mundo es 'glitch'. Un Guardián ofrece devolver el Foco si superan un reto musical.";
  textos[8]  = "La red falla pero deja pintura fluorescente. El rastro lleva al anfiteatro.";
  textos[9]  = "La banda de Musculoso abre un portal estable por unos segundos. Hay que decidir cómo usarlo.";
  textos[10] = "Skips conecta el reproductor a un amplificador. El Foco vibra y apunta hacia la arcade descontrolada.";
  textos[11] = "La arcade flota sobre un vórtice. El panel de control puede estabilizar o empeorar todo.";
  textos[12] = "Sin el dron, se pierde el rastro. Margaret propone un Plan B: sincronizar pulso y Foco con música.";
  textos[13] = "FINAL A — Logran instalar y sincronizar el Foco. La arcade se apaga y el parque se calma.";
  textos[14] = "FINAL B — Un error o pelea desata un bucle temporal. El día se repite sin fin.";
  textos[15] = "FINAL C — Cortan la energía total. La arcade se salva, pero el parque queda sin luz por un tiempo.";
  textos[16] = "CRÉDITOS — Valentino Andreu y Serafin Chico. Gracias por jugar.";

  // --------- OPCIONES Y DESTINOS 
  opcionA[1] = "Ir con Skips";
  opcionB[1] = "Hablar con Benson";
  destinoA[1] = 2;
  destinoB[1] = 3;

  opcionA[2] = "Ir al depósito";
  opcionB[2] = "Ir con Margaret";
  destinoA[2] = 4;
  destinoB[2] = 5;

  opcionA[3] = "Ir al zumbido";
  opcionB[3] = "Volver a Skips";
  destinoA[3] = 6;
  destinoB[3] = 2;

  opcionA[4] = "Saltar tras él";
  opcionB[4] = "Usar una red";
  destinoA[4] = 7;
  destinoB[4] = 8;

  opcionA[5] = "Banda Musculoso";
  opcionB[5] = "Reproductor";
  destinoA[5] = 9;
  destinoB[5] = 10;

  opcionA[6] = "Seguir dron";
  opcionB[6] = "Apagar dron";
  destinoA[6] = 11;
  destinoB[6] = 12;

  opcionA[7] = "Aceptar reto";
  opcionB[7] = "Rechazar";
  destinoA[7] = 10;
  destinoB[7] = 14;

  opcionA[8] = "Seguir rastro";
  opcionB[8] = "Volver a Skips";
  destinoA[8] = 9;
  destinoB[8] = 2;

  opcionA[9] = "Traer arcade";
  opcionB[9] = "Llevar música";
  destinoA[9] = 11;
  destinoB[9] = 10;

  opcionA[10] = "Instalar Foco";
  opcionB[10] = "Revisar manual";
  destinoA[10] = 13;
  destinoB[10] = 12;

  opcionA[11] = "Estabilizar";
  opcionB[11] = "Cortar energía";
  destinoA[11] = 13;
  destinoB[11] = 15;

  opcionA[12] = "Probar música";
  opcionB[12] = "Ir al panel";
  destinoA[12] = 10;
  destinoB[12] = 11;

  opcionA[13] = "Reiniciar";
  opcionB[13] = "Créditos";
  destinoA[13] = 1;
  destinoB[13] = 16;

  opcionA[14] = "Reiniciar";
  opcionB[14] = "Créditos";
  destinoA[14] = 1;
  destinoB[14] = 16;

  opcionA[15] = "Reiniciar";
  opcionB[15] = "Créditos";
  destinoA[15] = 1;
  destinoB[15] = 16;

  opcionA[16] = "Inicio";
  opcionB[16] = "Inicio";
  destinoA[16] = 1;
  destinoB[16] = 1;
}

function draw() {
  background(0);

  if (imagenes[escena]) {
    image(imagenes[escena], 0, 0, 640, 480);
  }

  fill(0, 180);
  rect(0, 320, 640, 160);

  fill(255);
  textSize(16);
  text(textos[escena], 20, 340, 600);

  dibujarBoton(xA, yA, wA, hA, opcionA[escena]);
  dibujarBoton(xB, yB, wB, hB, opcionB[escena]);
}

function mousePressed() {
  if (clicEn(xA, yA, wA, hA)) {
    cambiarEscena(destinoA[escena]);
  } else if (clicEn(xB, yB, wB, hB)) {
    cambiarEscena(destinoB[escena]);
  }
}

function dibujarBoton(x, y, w, h, texto) {
  fill(200, 40, 40);
  rect(x, y, w, h);
  fill(255);
  textSize(14);
  text(texto, x + 8, y + 8, w - 16);
}

function clicEn(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function cambiarEscena(num) {
  escena = num;
}
