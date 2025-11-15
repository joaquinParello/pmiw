// https://www.youtube.com/watch?v=BQZLISxWTp8
// joaquin parello COM2

let imagenes = [];        
let estado = -1;          
let sonidoCofre;          
let sonidoCaos;
let musicafondo;          
let sonidoReproducido = false; 
let caosReproducido = false; 

// textos de cada estado
let textos = [
  "Bob Esponja se despierta, es un día normal.",
  "Bob llega a las puertas del Crustáceo Cascarudo.",
  "Bob entra al Crustáceo Cascarudo. ¿Qué hace Bob?",
  "Bob se pone a cocinar Cangreburgers con entusiasmo.",
  "Se escucha descontrol fuera del Crustáceo Cascarudo.",
  "El caos llega al fondo de bikini.",
  "Bob sigue a Plankton, que se infiltra en la oficina.",
  "¿Frenarlo ya o quedarse observando?",
  "Bob decide frenarlo. Plankton falla sus planes.",
  "Bob observa cómo Plankton llega a la fórmula secreta.",
  "¿Actuar cauteloso o actuar rápido?",
  "Bob lo acorrala dentro del cofre.",
  "Plankton queda atrapado para toda la eternidad.",
  "Joaquin Parello COM2."
];

// opciones de cada pantalla
let opciones = [
  ["Ir al Crustáceo Cascarudo"],
  ["Entrar al Crustáceo Cascarudo"],
  ["Seguir trabajando", "Seguir a Plankton"],
  ["Cocinar Cangreburgers"],
  ["Salir"],
  ["Fin"],
  ["Frenarlo", "Observar"],
  [],
  ["Fin"],
  ["Actuar cauteloso", "Actuar rápido"],
  [],
  ["Atrapar"],
  ["Fin"],
  ["Reiniciar"]
];

// transiciones
let transiciones = [
  [1],
  [2],
  [3, 6],
  [4],
  [5],
  [13],
  [8, 9],
  [],
  [13],
  [4, 11],
  [],
  [12],
  [13],
  [-1]
];

function dibujarBoton(x, y, w, h, texto) {
  fill(50, 150, 250);
  rect(x, y, w, h, 8);
  fill(255);
  textSize(16);
  text(texto, x + w/2, y + h/2);
}

function botonClic(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function preload() {
  sonidoCofre = loadSound("data/cofre.mp3");
  sonidoCaos = loadSound("data/caos.mp3");
  musicafondo = loadSound("data/musica.mp3");

  imagenes["presentacion"] = loadImage("data/inicio.webp");
  imagenes[0] = loadImage("data/despierto.jpeg");    
  imagenes[1] = loadImage("data/bob.webp");     
  imagenes[2] = loadImage("data/bob6.png");    
  imagenes[3] = loadImage("data/bob2.jpeg");     
  imagenes[4] = loadImage("data/robo.webp");         
  imagenes[5] = loadImage("data/caos.jpeg");
  imagenes[6] = loadImage("data/oficina.png");
  imagenes[8] = loadImage("data/echando.png");
  imagenes[9] = loadImage("data/bob5.jpeg");
  imagenes[10] = loadImage("data/bob5.jpeg");
  imagenes[11] = loadImage("data/cofre.png");
  imagenes[12] = loadImage("data/bob3.jpg");
  imagenes[13] = loadImage("data/creditos.png");
}

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(200);

  // reproducir música de fondo una vez
  if (estado !== -1 && !musicafondo.isPlaying()) {
    musicafondo.loop();
  }

  // presentación
  if (estado === -1) {
    image(imagenes["presentacion"], 0, 0, width, height);
    fill(0, 180);
    rect(0, height - 150, width, 150);
    fill(255);
    textSize(28);
    text("¡Un Dia Normal En El Fondo De Bikini!", width/2, height - 110);
    dibujarBoton(width/2 - 100, height - 80, 200, 40, "Iniciar");
    return;
  }

  // imágenes normales o créditos
  if (imagenes[estado]) image(imagenes[estado], 0, 0, width, height);

  // caja de texto
  fill(0, 150);
  rect(0, height - 150, width, 150);
  fill(255);
  textSize(18);
  text(textos[estado], width/2, height - 120);

  // dibujar botones del estado
  for (let i = 0; i < opciones[estado].length; i++) {
    let x = 100;
    let y = height - 100 + i * 40;
    let w = 400;
    let h = 30;
    dibujarBoton(x, y, w, h, opciones[estado][i]);
  }
}

function mousePressed() {

  // botón presentación
  if (estado === -1) {
    let x = width/2 - 100;
    let y = height - 80;
    let w = 200;
    let h = 40;
    if (botonClic(x, y, w, h)) {
      estado = 0;
      sonidoReproducido = false;
      caosReproducido = false;
    }
    return;
  }

  // botones de opciones
  for (let i = 0; i < opciones[estado].length; i++) {
    let x = 100;
    let y = height - 100 + i * 40;
    let w = 400;
    let h = 30;

    if (botonClic(x, y, w, h)) {
      let siguiente = transiciones[estado][i];

      // sonido del cofre
      if (estado === 11 && !sonidoReproducido) {
        sonidoCofre.play();
        sonidoReproducido = true;
      }

      // sonido del caos
      if (estado === 4 && siguiente === 5 && !caosReproducido) {
        sonidoCaos.play();
        caosReproducido = true;
      }

      estado = siguiente;
    }
  }
}
