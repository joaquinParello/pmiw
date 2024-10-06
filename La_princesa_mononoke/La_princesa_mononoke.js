let img, img2;
let escena = 1; 
let posTextoActual = 0;
let dialogos;

function preload() {
  img = loadImage('data/escena1.jpeg'); // Cargar imagen
  img2 = loadImage('data/escena2.jpeg');
  dialogos = loadStrings('data/dialogos.txt'); // Cargar diálogos desde archivo
}

function setup() {
  createCanvas(640, 480); 
   alturatext = textAscent() + textDescent();
}

function draw() {
  if (escena === 1) {
    image(img, 0, 0, 640, 480); // Mostrar imagen de la escena 1
    textos();
    text(dialogos[0], 20, 360); // Mostrar primera línea del diálogo
    text(dialogos[1], 20, 400); // Mostrar segunda línea del diálogo
  } else if (escena === 2) {
    image(img2, 0, 0, 640, 480);
     text(dialogos[2], 20, 400);
     text(dialogos[3], 20, 430);
      text(dialogos[4], 20, 460);
     
  } else if (escena === 3) {
    background(50, 100, 200); // Cambiar a fondo azul en la escena 3
    fill(255);
    textSize(30);
    text("Has pasado a la escena 3", 100, 200); // Texto de la escena 3
  }
}

function mousePressed() {
  if (escena === 1) {
    escena = 2; // Cambiar a escena 2 al hacer clic
  } else if (escena === 2) {
    escena = 3; // Cambiar a escena 3 al hacer clic
  }
}

function textos() {
  textSize(25); // Establecer tamaño del texto
  fill(225); // Color del texto (blanco)
  stroke(0); // Contorno del texto (negro)
  strokeWeight(5); // Grosor del contorno
}
