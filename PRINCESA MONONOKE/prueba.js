let dialogos;
let escenas = [];
let pantalla = 0;

function preload() {
  // Cargar tres imágenes y agregarlas al arreglo
  escenas[0] = loadImage('data/escena1.jpeg'); 
  escenas[1] = loadImage('data/escena2.jpeg'); 
  escenas[2] = loadImage('data/escena3.jpeg');
  dialogos = loadStrings('data/dialogos.txt');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  // Mostrar la imagen de la pantalla actual
  image(escenas[pantalla], 0, 0, width, height); 

  // Mostrar los textos dependiendo de la pantalla actual
  if (pantalla === 0) {
    textos();
    text(dialogos[0], 20, 360); 
    text(dialogos[1], 20, 400);
  } else if (pantalla === 1) {
    textos();
    text(dialogos[2], 20, 400); 
    text(dialogos[3], 20, 450);
    text(dialogos[4], 450, 450);
  } else if (pantalla === 2) {
    textos();
    text(dialogos[5], 20, 360); 
    text(dialogos[6], 20, 400);
  }
}

function mousePressed() {
  // Pantalla 0: Cambia a la pantalla 1 al hacer clic en cualquier parte
  if (pantalla === 0) {
    pantalla = 1; // Cambia a la pantalla 1
  }
  // Pantalla 1: Cambia a la pantalla 2 solo si se hace clic en los textos de "pelear" o "huir"
  else if (pantalla === 1) {
    if (mouseY > 360 && mouseY < 400) { // Área del primer texto
      pantalla = 2; // Cambia a la pantalla 2
    } else if (mouseY > 400 && mouseY < 460) { // Área del segundo texto
      pantalla = 2; // Cambia a la pantalla 2
    }
  }
  // Puedes agregar más lógica aquí para la pantalla 2 si lo deseas
}

function textos() {
  textSize(25); // Establecer tamaño del texto
  fill(225); // Color del texto (blanco)
  stroke(0); // Contorno del texto (negro)
  strokeWeight(5); // Grosor del contorno
}
