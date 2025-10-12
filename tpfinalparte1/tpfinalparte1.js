https://youtu.be/uiuddLGtOjY

let escenas = [
  {id:1 , img:"assets/p1.jpg",  t:"La arcade 'Tiempo Roto' despierta en el parque. Luces verdes y violetas salen de la pantalla. Benson llega furioso y les ordena arreglarlo. ¿Qué hacen?",
  a:"Ir con Skips a pedir ayuda técnica.", aTo:2,  b:"Pedir permiso y plan a Benson.", bTo:3},
  {id:2 , img:"assets/p2.jpg",  t:"En el taller, Skips confirma que falta el Foco Cuántico, una pieza clave para estabilizar la energía.",
  a:"Buscar en el depósito oscuro.", aTo:4, b:"Consultar a Margaret en la cafetería.", bTo:5},
  {id:3 , img:"assets/p3.jpg",  t:"Benson acepta que investiguen, pero exige resultados rápidos. Se oye un zumbido raro desde la casa de Fantasmin.",
  a:"Investigar el zumbido.", aTo:6, b:"Volver con Skips para seguir el plan.", bTo:2},
  {id:4 , img:"assets/p4.jpg",  t:"En el depósito aparece un portal pequeño. Un minimonstruo roba el Foco y corre hacia el portal.",
  a:"Saltar tras el minimonstruo.", aTo:7, b:"Intentar atraparlo con una red.", bTo:8},
  {id:5 , img:"assets/p5.jpg",  t:"En la cafetería, Margaret halla un manual: el Foco responde a música estable y bien afinada.",
  a:"Probar con la banda de Musculoso.", aTo:9, b:"Usar el reproductor de Skips.", bTo:10},
  {id:6 , img:"assets/p6.jpg",  t:"En la casa de Fantasmin, un dron poseído zumba. Lleva un rastreador que podría guiar hasta la arcade.",
  a:"Seguir el dron hacia la arcade.", aTo:11, b:"Apagar el dron ahora mismo.", bTo:12},
  {id:7 , img:"assets/p7.jpg",  t:"Dentro del portal, el mundo es 'glitch'. Un Guardián ofrece devolver el Foco si superan un reto musical.",
  a:"Aceptar el reto musical.", aTo:10, b:"Rechazar y pelear (arriesgado).", bTo:14},
  {id:8 , img:"assets/p8.jpg",  t:"La red falla pero deja pintura fluorescente. El rastro lleva al anfiteatro.",
  a:"Seguir el rastro al anfiteatro.", aTo:9, b:"Volver con Skips.", bTo:2},
  {id:9 , img:"assets/p9.jpg",  t:"La banda de Musculoso abre un portal estable por unos segundos. Hay que decidir cómo usarlo.",
  a:"Traer la arcade al anfiteatro.", aTo:11, b:"Llevar la música hacia la arcade.", bTo:10},
  {id:10, img:"assets/p10.jpg", t:"Skips conecta el reproductor a un amplificador. El Foco vibra y apunta hacia la arcade descontrolada.",
  a:"Ir a instalar el Foco ya.", aTo:13, b:"Revisar el manual para afinar mejor.", bTo:12},
  {id:11, img:"assets/p11.jpg", t:"La arcade flota sobre un vórtice. El panel de control puede estabilizar o empeorar todo.",
  a:"Estabilizar desde el panel.", aTo:13, b:"Cortar energía del parque.", bTo:15},
  {id:12, img:"assets/p12.jpg", t:"Sin el dron, se pierde el rastro. Margaret propone un Plan B: sincronizar pulso y Foco con música.",
  a:"Intentar otra vez con el reproductor.", aTo:10, b:"Ir directo al panel.", bTo:11},
  {id:13, img:"assets/p13.jpg", t:"FINAL A — Logran instalar y sincronizar el Foco. La arcade se apaga y el parque se calma.",
  a:"Reiniciar historia.", aTo:1, b:"Ver créditos.", bTo:16},
  {id:14, img:"assets/p14.jpg", t:"FINAL B — Un error o pelea desata un bucle temporal. El día se repite sin fin.",
  a:"Reiniciar historia.", aTo:1, b:"Ver créditos.", bTo:16},
  {id:15, img:"assets/p15.jpg", t:"FINAL C — Cortan la energía total. La arcade se salva, pero el parque queda sin luz por un tiempo.",
  a:"Reiniciar historia.", aTo:1, b:"Ver créditos.", bTo:16},
  {id:16, img:"assets/p16.jpg", t:"CRÉDITOS — Valentino Andreu y Serafin Chico. Gracias por jugar.",
  a:"Volver al inicio.", aTo:1, b:"Volver al inicio.", bTo:1},
];

let i = 0;
let imgs = [];
let btnA, btnB;

function preload(){
  for (let e of escenas){
    imgs.push(loadImage(e.img));
  }
}

function setup(){
  createCanvas(640, 480);
  textFont('Arial');
  textSize(16);
  btnA = {x:16, y:480-56, w:280, h:44};
  btnB = {x:640-16-280, y:480-56, w:280, h:44};
}

function draw(){
  background(0);
  if (imgs[i]) image(imgs[i], 0, 0, 640, 480);
  
  // Fondo para el texto
  fill(0, 190); 
  noStroke();
  rect(0, 480-160, 640, 160);
  
  // Texto principal
  fill(255);
  textSize(16);
  text(escenas[i].t, 12, 480-160+14, 640-24);
  
  // Botones
  dibujarBtn(btnA, escenas[i].a);
  dibujarBtn(btnB, escenas[i].b);
}

function mousePressed(){
  if (adentro(btnA, mouseX, mouseY)) irA(escenas[i].aTo);
  else if (adentro(btnB, mouseX, mouseY)) irA(escenas[i].bTo);
}

function dibujarBtn(b, label){
  noStroke();
  fill(200, 40, 40);
  rect(b.x, b.y, b.w, b.h);
  fill(255);
  textSize(14);
  text(label, b.x+8, b.y+8, b.w-16);
}

function adentro(b, mx, my){
  return (mx>=b.x && mx<=b.x+b.w && my>=b.y && my<=b.y+b.h);
}

function irA(id){
  for (let k=0; k<escenas.length; k++){
    if (escenas[k].id === id){
      i = k;
      break;
    }
  }
}
