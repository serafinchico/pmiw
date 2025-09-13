//https://youtu.be/SU8zFwp9hGc

let img;

let cols = 20;
let rows = 20;

let maxTam = 30;
let minTam = 2;

let modo = 0;
let colorActual;
let usarColor = false;

let velocidad = 0.2;

function preload() {
  // Carg la imagen 
  img = loadImage("data/opart3.jpg");
}

function setup() {
  createCanvas(800, 400);

  if (img) img.resize(400, 400); // Ajusta el tamaño de la imagen
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  background(255);

  // imagen 
  if (img) image(img, 0, 0);

  // Circulos 
  let gridWidth = 400;
  let gridHeight = 400;
  let cellW = gridWidth / cols;
  let cellH = gridHeight / rows;

  translate(400, 0); 

  let mx = constrain(mouseX - 400, 0, 400);
  let my = constrain(mouseY, 0, 400);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW + cellW / 2;
      let y = j * cellH + cellH / 2;

      let centroX = gridWidth / 2;
      let centroY = gridHeight / 2;

      let dCentro = dist(x, y, centroX, centroY);
      let tamBase = map(dCentro, 0, dist(0, 0, centroX, centroY), maxTam, minTam);

      let dMouse = dist(mx, my, x, y);
      let tam = calcularTamano(dMouse, x, y, mx, my, tamBase);

      let pulso = map(sin(frameCount * 0.3 + i * 3 + j * 5), -1, 1, 0.85, 1.15);
      tam *= pulso;

      if (usarColor) fill(colorActual);
      else fill(0);

      ellipse(x, y, tam, tam);
    }
  }
}

function calcularTamano(d, x, y, mx, my, tamBase) {
  let modoActual = modo % 4;

  if (modoActual === 0) return tamBase * map(cos(d * 0.05), -1, 1, 0.5, 1.2);
  if (modoActual === 1) return tamBase * map(sin(d * 0.07 + frameCount * velocidad), -1, 1, 0.3, 1.4);
  if (modoActual === 2) {
    let dx = x - mx;
    let dy = y - my;
    let ang = (dx - dy) * 0.05;
    let r = dist(mx, my, x, y);
    return tamBase * map(sin(r * 0.1 + ang + frameCount * velocidad), -1, 1, 0.4, 1.5);
  }
  if (modoActual === 3) return tamBase * constrain(map(d, 0, 200, 1.1, 0.6), 0.6, 1.1);
  return tamBase;
}

function keyPressed() {
  if (key === " ") {
    usarColor = true;
    colorActual = color(random(255), random(255), random(255));
  }
  if (key === "f") {
    velocidad += 0.05;
    print("Velocidad: " + velocidad);
  }
  if (key === "r") {
    modo = 0;
    velocidad = 0.2;
    usarColor = false;
    colorActual = color(0);
    print("Variables reiniciadas");
  }
}

function mousePressed() {
  modo++;
}
