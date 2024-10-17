let imagenes = [];
let sonido;
let nombredefilas = [];
let estado = 0;

function preload() {
 sonido = loadSound('data/sonido.mp3');
  for (let i = 0; i <= 25; i++) {
  nombredefilas[i] = "data/img-" + i + ".jpg";
}
  for (let i = 0; i < nombredefilas.length; i++) {
    imagenes[i] = loadImage(nombredefilas[i]); // cargar imÃ¡genes
  }
}


function setup() {
 createCanvas(640, 480); //X es horizontal (640) Y es vertical (600) 
  textAlign(CENTER);
}


function draw() {
  background(0); // Limpiar el fondo
  image(imagenes[estado], 0, 0, 640, 480); // mostrar imagen actual
  circulodecontinuar(580, 420, 40);
    
  
if (estado === 0) {
  estado0();
} else if (estado === 1) {
  estado1();
} else if (estado === 2) {
  estado2();
} else if (estado === 3) {
  estado3();
} else if (estado === 4) {
  estado4();
} else if (estado === 5) {
  estado5();
} else if (estado === 6) {
  estado6();
} else if (estado === 7) {
  estado7();
} else if (estado === 8) {
  estado8();
} else if (estado === 9) {
  estado9();
} else if (estado === 10) {
  estado10();
} else if (estado === 11) {
  estado11();
} else if (estado === 12) {
  estado12();
} else if (estado === 13) {
  estado13();
} else if (estado === 14) {
  estado14();
} else if (estado === 15) {
  estado15();
} else if (estado === 16) {
  estado16();
} else if (estado === 17) {
  estado17();
} else if (estado === 18) {
  estado18();
} else if (estado === 19) {
  estado19();
} else if (estado === 20) {
  estado20();
} else if (estado === 21) {
  estado21();
} else if (estado === 22) {
  estado22();
} else if (estado === 23) {
  estado23();
} else if (estado === 24) {
  estado24();
} else if (estado === 25) {
  estado25();
}}

function mousePressed() {
 sonido.play();
  if (estado === 0) {
    pasarClick0();
  } else if (estado === 1) {
    pasarClick1();
  } else if (estado === 2) {
    pasarClick2();
  } else if (estado === 3) {
    pasarClick3();
  } else if (estado === 4) {
    pasarClick4();
  } else if (estado === 5) {
    pasarClick5();
  } else if (estado === 6) {
    pasarClick6();
  } else if (estado === 7) {
    pasarClick7();
  } else if (estado === 8) {
    pasarClick8();
  } else if (estado === 9) {
    pasarClick9();
  } else if (estado === 10) {
    pasarClick10();
  } else if (estado === 11) {
    pasarClick11();
  } else if (estado === 12) {
    pasarClick12();
  } else if (estado === 13) {
    pasarClick13();
  } else if (estado === 14) {
    pasarClick14();
  } else if (estado === 15) {
    pasarClick15();
  } else if (estado === 16) {
    pasarClick16();
  } else if (estado === 17) {
    pasarClick17();
  } else if (estado === 18) {
    pasarClick18();
  } else if (estado === 19) {
    pasarClick19();
  } else if (estado === 20) {
    pasarClick20();
  } else if (estado === 25) {
    pasarClick25();
  } else if (estado === 22) {
    pasarClick22();
  } else if (estado === 23) {
    pasarClick23();
  } else if (estado === 24) {
    pasarClick24();
  }
}

   
  
    





 
