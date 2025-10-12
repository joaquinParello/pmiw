//https://youtu.be/7xBpctT0_78
//joaquin parello COM2
let imagenes = [];        
let estado = -1;          // -1 por presentación
let sonidoCofre;          
let sonidoCaos;
let musicafondo;          
let sonidoReproducido = false; 
let caosReproducido = false; 

// textos de cada estado
let textos = [
  "Bob Esponja se despierta, es un día normal.",                     // 0
  "Bob llega a las puertas del Crustáceo Cascarudo.",                // 1
  "Bob entra al Crustáceo Cascarudo. ¿Qué hace Bob?",                // 2
  "Bob se pone a cocinar Cangreburgers con entusiasmo.",             // 3
  "Se escucha descontrol fuera del Crustáceo Cascarudo.",            // 4
  "El caos llega al fondo de bikini.",                               // 5 final malo
  "Bob sigue a Plankton, que se infiltra en la oficina.",            // 6
  "¿Frenarlo ya o quedarse observando?",                             // 7
  "Bob decide frenarlo. Plankton falla sus planes.",                 // 8 final bueno
  "Bob observa cómo Plankton llega a la fórmula secreta.",           // 9
  "¿Actuar cauteloso o actuar rápido?",                              // 10
  "Bob lo acorrala dentro del cofre.",                               // 11
  "Plankton queda atrapado dentro de ese cofre para toda la eternidad",//12 final neutral
  "Joaquin Parello COM2."                                            // 13 pantalla de créditos
];

// opciones de cada pantalla
let opciones = [
  ["Ir al Crustáceo Cascarudo"],          // 0
  ["Entrar al Crustáceo Cascarudo"],      // 1
  ["Seguir trabajando", "Seguir a Plankton"],  // 2
  ["Cocinar Cangreburgers"],              // 3
  ["Salir"],                              // 4
  ["Fin"],                                // 5 final malo
  ["Frenarlo", "Observar"],               // 6
  [],                                     // 7
  ["Fin"],                                // 8 final bueno
  ["Actuar cauteloso", "Actuar rápido"],  // 9
  [],                                     // 10
  ["Atrapar"],                            // 11
  ["Fin"],                                // 12 final neutral
  ["Reiniciar"]                           // 13 créditos
];

// transiciones
let transiciones = [
  [1],       // 0  entrar a las puertas
  [2],       // 1 única opción = entrar
  [3, 6],    // 2 trabajar o seguir
  [4],       // 3 cocinar 
  [5],       // 4 salir pantalla caos
  [13],      // 5 final malo créditos
  [8, 9],    // 6 frenar u observar
  [],        // 7
  [13],      // 8 final bueno  créditos
  [4, 11],   // 9 cauteloso descontrol (4), rápido neutral (11)
  [],        // 10
  [12],      // 11 atrapar final neutral
  [13],      // 12 final neutral créditos
  [-1],      // 13 créditos reiniciar presentación
];

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

  // Pantalla de presentación
  if (estado === -1) {
    if (imagenes["presentacion"]) image(imagenes["presentacion"], 0, 0, width, height);
    fill(0, 180);
    rect(0, height - 150, width, 150);
    fill(255);
    textSize(28);
    text("¡Un Dia Normal En El Fondo De Bikini!", width / 2, height - 110);
    fill(50, 200, 100);
    rect(width / 2 - 100, height - 80, 200, 40, 12);
    fill(255);
    textSize(20);
    text("Iniciar", width / 2, height - 60);
    return;
  }

  // mostrar imágenes de historia o créditos
  if (estado === 13) { // pantalla de créditos
    if (imagenes[13]) image(imagenes[13], 0, 0, width, height);
  } else {
    if (imagenes[estado]) image(imagenes[estado], 0, 0, width, height);
  }

  // caja de texto
  fill(0, 150);
  rect(0, height - 150, width, 150);
  fill(255);
  textSize(18);
  text(textos[estado], width / 2, height - 120);

  // mostrar opciones
  if (opciones[estado].length > 0) {
    for (let i = 0; i < opciones[estado].length; i++) {
      fill(50, 150, 250);
      rect(100, height - 100 + i * 40, 400, 30, 8);
      fill(255);
      textSize(16);
      text(opciones[estado][i], width / 2, height - 85 + i * 40);
    }
  }
}

function mousePressed() {
  // botón de presentación
  if (estado === -1) {
    let x = width / 2 - 100;
    let y = height - 80;
    let w = 200;
    let h = 40;
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
      estado = 0;
      sonidoReproducido = false;
      caosReproducido = false;
    }
    return;
  }

  // opciones normales
  if (opciones[estado].length > 0) {
    for (let i = 0; i < opciones[estado].length; i++) {
      let x = 100;
      let y = height - 100 + i * 40;
      let w = 400;
      let h = 30;
      if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        let siguiente = transiciones[estado][i];

        // sonido cofre (pantalla 11)
        if (estado === 11 && !sonidoReproducido) {
          sonidoCofre.play();
          sonidoReproducido = true;
        }

        // sonido caos (pantalla 4 5)
        if (estado === 4 && siguiente === 5 && !caosReproducido) {
          sonidoCaos.play();
          caosReproducido = true;
        }

        estado = siguiente;
      }
    }
  }
}
