let dialogos;
let escenas = [];
let pantalla = 0;

function preload() {
  escenas[0] = loadImage('data/escena1.jpeg'); 
  escenas[1] = loadImage('data/escena2.jpeg'); 
  escenas[2] = loadImage('data/escena3.jpeg'); 
  escenas[3] = loadImage('data/escena4.jpeg'); 
  escenas[4] = loadImage('data/escena5.jpeg'); 
  escenas[5] = loadImage('data/escena6.jpeg'); 
  escenas[6] = loadImage('data/escena7.jpeg'); 
  dialogos = loadStrings('data/dialogos.txt');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  image(escenas[pantalla], 0, 0, width, height); 
    // ESCENA 1
  if (pantalla === 0) {
    textos();
    text(dialogos[0], 20, 360); 
    text(dialogos[1], 20, 400);
  
     // LUCHA CONTRA EL JABALI
} else if (pantalla === 1) {

    textos();
    text(dialogos[2], 20, 440); 
    text(dialogos[3], 200, 475); 
    
    //DECISION DE LA MALDICION
} else if (pantalla === 2) {
    textos();
    text(dialogos[4], 20, 360);
    text(dialogos[5], 20, 390);
    text(dialogos[6], 20, 420);
    text(dialogos[7], 20, 460); // DESPEDIRSE
    text(dialogos[8], 460, 460); // HUIR 
 
   // DESPEDIDA
} else if (pantalla === 3) {
    textos();
    text(dialogos[9], 20, 360);
    text(dialogos[10], 20, 400);
   
    // HUIDA
} else if (pantalla === 4) {
    textos();
    text(dialogos[11], 20, 360); 
    text(dialogos[12], 20, 390);
    text(dialogos[13], 20, 420);
    text(dialogos[14], 20, 460); // AYUDAR
    text(dialogos[15], 300, 460); // SEGUIR POR EL BOSQUE

 //AYUDAR 
} else if (pantalla === 5) {
    textos();

  // LLEGA A IRONTOWN
} else if (pantalla === 6) {
    textos();
      text(dialogos[16], 20, 380);
      text(dialogos[17], 20, 410);
      text(dialogos[18], 20, 440);
      text(dialogos[19], 20, 470);
  } 
}

function mousePressed() {
  if (pantalla === 0) {
    pantalla = 1; 
  } else if (pantalla === 1) {
    pantalla = 2; 
  } else if (pantalla === 2) {
    if (mouseX > 20 && mouseX < 200 && mouseY > 440 && mouseY < 480) {
      pantalla = 3; 
    } else if (mouseX > 460 && mouseX < 640 && mouseY > 440 && mouseY < 480) {
      pantalla = 4;   
    }
  } else if (pantalla === 3) {
    pantalla = 4; 
  } else if (pantalla === 4) {
   if (mouseX > 20 && mouseX < 200 && mouseY > 440 && mouseY < 480) {
      pantalla = 5; 
    } else if (mouseX > 300 && mouseX < 500 && mouseY > 440 && mouseY < 480) {
      pantalla = 6;
    }
  } else if (pantalla === 5) {
    pantalla = 6;
}}

function textos() {
  textSize(25);
  fill(225);
  stroke(0);
  strokeWeight(5);
}
