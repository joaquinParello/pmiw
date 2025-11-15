//https://www.youtube.com/watch?v=klcwBGMqoqU
//Joaquin Parello

let juego;
let estado = 0;
let imgBob;
let imgMedusa;
let imgPlankton;
let imgFin;
let imgFondomedusa;
let imgFondodebikini;
let imgGanar;
let musica;

function preload() {
  imgBob = loadImage("data/bob.png");
  imgMedusa = loadImage("data/medusa.png");
  imgPlankton = loadImage("data/plankton.png");
  imgFin = loadImage("data/fin.jpg");
  imgFondomedusa = loadImage("data/fondomedusa.jpg");
  imgFondodebikini = loadImage("data/fondodebikini.webp");
  imgGanar = loadImage("data/ganar.jpg");
  musica = loadSound("data/musica.mp3"); 
}

function setup() {
  createCanvas(600, 400);
  juego = new Juego();
}

function draw() {
  background(0, 150, 200);

  if (estado === 0) {
    pantallaInicio();
  } 
  else if (estado === 1) {
    image(imgFondomedusa, 0, 0, width, height);
    juego.actualizar();
    juego.mostrar();

    if (juego.perdio) {
      estado = 2;
    } 
    else if (juego.gano) {
      estado = 3;
    }
  }
  else if (estado === 2) {
    pantallaFin();
  }
  else if (estado === 3) {
    pantallaGanar();
  }
}

function pantallaInicio() {
  image(imgFondodebikini, 0, 0, width, height);
  fill(0);
  textAlign(CENTER);
  textSize(40);
  text("¡ESQUIVA LAS MEDUSAS!", width/2, height/2 -150);
  
  textSize(25);
  text("CLICK para comenzar", width/2, height/2 -20);
}

function pantallaFin() {
  image(imgFin, 0, 0, width, height);
  fill(255, 0, 0);
  textSize(40);
  textAlign(CENTER);
  text("PERDISTE!", width/2, height/2 - 40);

  textSize(20);
  text("CLICK para reiniciar", width/2, height/2 + 20);
}

function pantallaGanar() {
  image(imgGanar, 0, 0, width, height);
  fill(0, 255, 0);
  textSize(40);
  textAlign(CENTER);
  text("¡ATRAPASTE A PLANKTON!", width / 2, height / 2 - 140);

  textSize(20);
  text("CLICK para reiniciar", width / 2, height / 2 - 100);
  
  fill(0);
  textSize(20)
  text("Joaquin Parello", width / 2, height / 2 + 160);
}

function mousePressed() {
  if (estado === 0) {
    estado = 1;
    if (!musica.isPlaying()) { musica.play(); }
  } 
  else if (estado === 2 || estado === 3) {
    reiniciarJuego();
  }
}

function reiniciarJuego() {
  juego = new Juego();
  estado = 1;
  if (!musica.isPlaying()) {
    musica.play();
  }
}
