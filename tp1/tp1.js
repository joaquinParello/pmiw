//https://youtu.be/-__zgorykwc
//Joaquin Parello
//TECLAS:
//A cambio automatico de los colores
//ambos click izq(modo manual de cambio de color) der(intercambia colores)
//D cambia el tamaño de los circulos segun la posicion del mouse
let oscuro, claro;
let img;
let tamtotal = 133; // tamaño de círculos y cuadrados
let ultimoframe = 0;
let seg = 60; // equivale a un segundo
let automatico = false; // cambio automático
let tamanos = false; // cambio de tamaño

function preload() {
  img = loadImage("data/Optica.jpeg");//TECLAS:
//A cambio automatico de los colores
//ambos click izq(modo manual de cambio de color) der(intercambia colores)
//D cambia el tamaño de los circulos segun la posicion del mouse
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

  // Verificar si pasó 1 seg para cambiar los colores automáticamente
  if (automatico && frameCount - ultimoframe >= seg) {
    coloresr();
    ultimoframe = frameCount; // POR LAS DUDAS DE EPILEPSIA NO BORRAR
  }
}

function keyPressed() {
  // TAMAÑO DE CÍRCULOS
  if (key === 'd' || key === 'D') {
    tamanos = !tamanos;
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
    automatico = !automatico;
    if (automatico) {
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
  let numcirculosX = 3;
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

      // Obtener el color del círculo
      let color1 = colorParaCirculo(i, j);

// retorna el color para el círculo
function colorParaCirculo(i, j) {
  let colorordenado = (i + j) % 2;
  if (colorordenado === 0) {
    return oscuro;
  } else {
    return claro;
  }
}

      fill(color1);
      circle(x, y, tamc1);
    }
  }
}

function cuadrados(tamc) {
  let numCuadradoX = 3;
  let numCuadradoY = 3;

  for (let i = 0; i < numCuadradoX; i++) {
    for (let j = 0; j < numCuadradoY; j++) {
      let x = width / 2 + i * tamc;
      let y = j * tamc;

      // Obtener el color del cuadrado
      let colorOriginal = colorParaCuadrado(i, j);

// retorna el color para el cuadrado
function colorParaCuadrado(i, j) {
  let colorordenado = (i + j) % 2;
  if (colorordenado === 0) {
    return claro;
  } else {
    return oscuro;
  }
}
      fill(colorOriginal);
      rect(x, y, tamc, tamc);
    }
  }
}

function coloresr() {
  oscuro = color(random(255), random(255), random(255));
  claro = color(random(255), random(255), random(255));
}
