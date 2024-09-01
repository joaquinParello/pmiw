//Joaquin parello com.4 45356365
//video: https://youtu.be/A5FaNUd1Mlg

let oscuro, claro;
let img;
let tamtotal = 133; // tamaño de círculos y cuadrados
let ultimoframe = 0;
let seg = 60; // equivale a un segundo
let automatico = false; // cambio automático
let tamanos = false; // cambio de tamaño

function preload(){
  img = loadImage('data/Optica.jpeg');
}

function setup() { 
  createCanvas(800, 400);
    
  oscuro = color(3, 15, 36);
  claro = color(34, 41, 155);
  
  frameRate(60);
}

function draw() {
  image(img, 0, 0);
  
  cuadrados(tamtotal);
  circulos(tamtotal);

  // Verifica si ha pasado 1 segundo para cambiar los colores automáticamente
  if (automatico && (frameCount - ultimoframe) >= seg) {
    coloresr();
    ultimoframe = frameCount; // POR LAS DUDAS DE EPILEPSIA NO BORRAR
  }
}

function keyPressed() {
  // TAMAÑO DE CÍRCULOS
  if (key === 'd' || key === 'D') {
    if (tamanos) {
      tamanos = false;
    } else {
      tamanos = true;
    }
  }
  
  // REINICIO
  if (key === 'r' || key === 'R') {
    oscuro = color(34, 41, 155);
    claro = color(3, 15, 36);
    automatico = false; // Detener el cambio automático
    ultimoframe = 0; // Reiniciar el contador
  }
  
  // CAMBIO AUTOMÁTICO
  if (key === 'a' || key === 'A') {
    coloresr();
    if (automatico) {
      automatico = false;
    } else {
      automatico = true;
      ultimoframe = frameCount; // Iniciar el conteo al activar el cambio automático
    }
  }
}

function mousePressed() {
  if (mouseButton === RIGHT) {
    // Intercambia los colores oscuro y claro
    let temporal = oscuro;
    oscuro = claro;
    claro = temporal;
  } else if (mouseButton === LEFT) {
    // Cambia los colores a colores aleatorios
    coloresr();
  }
}

function circulos(tamc) {
  let numcirculosX = 6;
  let numcirculosY = 3;

  for (let i = 0; i < numcirculosX; i++) {
    for (let j = 0; j < numcirculosY; j++) {

      let x = 467 + i * tamc;
      let y = 66 + j * tamc;     
      let distancia = dist(mouseX, mouseY, x, y);

      let tamc1 = tamc;
      if (tamanos) {
        tamc1 = tamc - tamc * (distancia / (width / 2));
      }

      // Alterna los colores
      let colorordenado = (i + j) % 2;

      // Determina el color para los círculos
      let color1;
      if (colorordenado === 0) {
        color1 = oscuro;
      } else {
        color1 = claro;
      }

      fill(color1);
      circle(x, y, tamc1);
    }
  }
}

function cuadrados(tamc) {
  let contador = 0;

  for (let x = width / 2; x < width; x += tamc) {
    for (let y = 0; y < height; y += tamc) {
      //ordena los colores 
      let coloresordenados1 = contador % 2;

      //color de la grilla
      let colororiginal;
      if (coloresordenados1 === 0) {
        colororiginal = claro;
      } else {
        colororiginal = oscuro;
      }

      fill(colororiginal);
      rect(x, y, tamc, tamc);
      contador++;
    }
    contador++;
  }
}

function coloresr() {
  // colores aleatorios
  oscuro = color(random(255), random(255), random(255));
  claro = color(random(255), random(255), random(255));
}
