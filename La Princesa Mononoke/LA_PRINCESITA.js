let imagenes = [];

let nombredefilas = ["data/img-0.jpg", "data/img-1.jpg", "data/img-2.jpg", " data/img-3.jpg", " data/img-4.jpg", " data/img-5.jpg", " data/img-6.jpg", " data/img-7.jpg", " data/img-8.jpg", " data/img-9.jpg", " data/img-10.jpg", " data/img-11.jpg"," data/img-12.jpg", " data/img-13.jpg", " data/img-14.jpg", " data/img-15.jpg", " data/img-16.jpg", " data/img-17.jpg", "data/img-18.jpg", "data/img-19.jpg","data/img-20.jpg", "data/img-21.jpg", "data/img-22.jpg", "data/img-23.jpg", "data/img-24.jpg","data/img-25.jpg",];

let estado = 0;

function preload() {
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
    
  
if ( estado === 0) {
  textos()
  //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
  text("estas tranquilamente en tu aldea", 300, 200); 
    
    
  } else if  ( estado === 1) {
    circuloa(410, 410, 40); // botÃ³n A 1. posiciÃ³n de X (550) 2. PosiciÃ³n de Y (350) 3. TamaÃ±o del circulo (40)  // los botones acomodalos como creas que quede mejor
    circulob(260, 410, 40);
   textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Un moustruo te paso una maldicion", 350, 50);
    text("Huir", 400, 390);
    text("Despedirse", 270, 390);


  } else if ( estado === 2) {  
     textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Te vas sin despedirte de nadie\n con la esperanza de volver sano y salvo", 300, 100); 
    
    
  } else if  ( estado === 3){ 
     textSize(25);
    fill(4, 5, 90); 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Te despides muy tristemente de tu hermana", 350, 30);
    
    
  } else if  ( estado === 4) { 
        textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Estas sin ningun tipo de rumbo por el bosque", 300, 100);
    
    
  } else if  (estado === 5) { 
    circuloa(410, 410, 40); // botÃ³n A 1. posiciÃ³n de X (550) 2. PosiciÃ³n de Y (350) 3. TamaÃ±o del circulo (40) 
    circulob(260, 410, 40)
        textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("A lo lejos ves como una aldea esta siendo atacada", 300, 50);
    text("Ayudar",400, 390);
    text("Ignorar", 270, 390);
    
  } else if ( estado === 6){ 
    textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Te enfrentas con varios enemigos", 300, 100);
    
    
  } else if  ( estado === 7 ){
    textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Rescatas a un hombre herido\n que te cuenta sobre una aldea cercana", 300, 400);
    
    
  } else if  ( estado === 8){ 
     textos() 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("en agradecimento deciden enseñarte la aldea", 300, 100); 
    
    
  } else if  ( estado === 9) { 
    circuloa(410, 410, 40); // botÃ³n A 1. posiciÃ³n de X (550) 2. PosiciÃ³n de Y (350) 3. TamaÃ±o del circulo (40) 
    circulob(260, 410, 40);
    textos()
   // rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Conoces a su lider\n ella te cuenta que quiere matar\n a la princesa mononoke.\n ves a la lejania como ella\n se intenta escabullir", 300, 40);  
     text("Callarse",400, 390);
    text("Avisarle", 270, 390);
    
  } else if  ( estado === 10 ) {
    textos() 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("La princesa se escabulle de la aldea sin ser vista", 300, 100); 
    
    
  } else if  ( estado === 11) { 
  textos() 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Le dices que esta alli mismo\nrapidamente se ponen a combatir", 300, 440); 
    
    
  } else if  ( estado === 12) { 
 textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Intentas separar la pelea", 300, 100); 
    
    
  } else if  ( estado === 13) { 
textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Recibes un disparo\n y la princesa mononoke te lleva al bosque", 300, 50); 
    
    
  } else if  ( estado === 14) { 
   textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("El dios ciervo te salva la vida", 300, 50); 
    
    
  } else if  ( estado === 15 ){
  textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Te escapas con ella rumbo al bosque ", 300, 50); 
    
    
  } else if  ( estado === 16) { 
    textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Te enseña al dios ciervo", 300, 50);     
 
 
 
  } else if  ( estado === 17) {
    circuloa(410, 410, 40); // botÃ³n A 1. posiciÃ³n de X (550) 2. PosiciÃ³n de Y (350) 3. TamaÃ±o del circulo (40) 
    circulob(260, 410, 40);
 textos() 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Lady Eboshi la lider del pueblo\n prepara una guerra contra el bosque \ncon el objetivo de matar la dios ciervo", 300, 50); 
    text("Atacar",400, 390);
    text("Defender", 270, 390);
  } else if  ( estado === 18) { 
    textos() 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Vas la aldea, pero cuando llegas\n otro pueblo la esta atacando ", 300, 50); 
    
    
     } else if  ( estado === 19) { 
    textos() 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Defiendes el bosque contra las tropas de Lady Eboshi", 300, 50); 
    
    
     } else if  ( estado === 20) { 
    textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("El jefe de los jabali resulta gravemente herido", 300, 440);  
    
    
     } else if  ( estado === 21) { 
    textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("Salvas a los pocos habitantes que quedan\n  y deciden hacerte lider", 300, 440); 
    
    
     } else if  ( estado === 22) { 
textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("", 300, 100); 
    
    
     } else if  ( estado === 23) { 
     textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 17", 300, 100); 
    
    
     } else if  ( estado === 24) { 
   textos() 
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 17", 300, 100); 
    
    
     } else if  ( estado === 25) { 
    circuloa(410, 410, 40); // botÃ³n A 1. posiciÃ³n de X (550) 2. PosiciÃ³n de Y (350) 3. TamaÃ±o del circulo (40) 
    circulob(260, 410, 40);
    circuloc(90, 410, 40);
     textos()
    //rect(225, 75, 350, 100); //el tamaÃ±o y posiciÃ³n del rectangulo del texto
    text("texto 17", 300, 100); 
    
    
    
  }

}


function mousePressed() {

  if (estado == 0 && mouseEnCirculo(580, 420, 40)) {
    estado = 1;  // la foto 1 pasa a la foto 2
    
    
    } else if (estado == 1 && mouseEnCirculo(410, 410, 40)) {
    estado = 2; // la foto 2 pasa a la foto 3 
  
    
  } else if (estado == 1 && mouseEnCirculo(260, 410, 40)) {
    estado = 3; //la foto 2 pasa a la foto 4
    
    
  } else if (estado == 2 && mouseEnCirculo(580, 420, 40)) {
    estado = 4; // la foto 3 pasa a la foto 5
    
    
  } else if (estado == 3 && mouseEnCirculo(580, 420, 40)) {
    estado = 4; // la foto 4 pasa a la foto 5
    
    
  } else if (estado == 4 && mouseEnCirculo(580, 420, 40)) {
    estado = 5; // Va al primer final (modificar segun tu boton) 
    
    
  } else if (estado == 5 && mouseEnCirculo(410, 410, 40)) {
    estado = 6; //sigue con la historia 
    
    
  } else if (estado == 5 && mouseEnCirculo(260, 410, 40)) {
    estado = 7; //Va al segundo final 
    
    
  } else if (estado == 6 && mouseEnCirculo(580, 420, 40)) {
    estado = 8; //ultimo final y va a los creditos 
    
    
     } else if (estado == 7 && mouseEnCirculo(580, 420, 40)) {
    estado = 8; //ultimo final y va a los creditos 
    
    
     } else if (estado == 8 && mouseEnCirculo(580, 420, 40)) {
    estado = 9; //ultimo final y va a los creditos 
    
    
     } else if (estado == 9 && mouseEnCirculo(410, 410, 40)) {
    estado = 10; //ultimo final y va a los creditos 
    
    
     } else if (estado == 9 && mouseEnCirculo(260, 410, 40)) {
    estado = 11; //ultimo final y va a los creditos 
    
    
     } else if (estado == 10 && mouseEnCirculo(580, 420, 40)) {
    estado = 15; //ultimo final y va a los creditos 
    
    
     } else if (estado == 11 && mouseEnCirculo(580, 420, 40)) {
    estado = 12; //ultimo final y va a los creditos 
    
    
    
     } else if (estado == 12 && mouseEnCirculo(580, 420, 40)) {
    estado = 13 ; //ultimo final y va a los creditos 
    
    
     } else if (estado == 13 && mouseEnCirculo(580, 420, 40)) {
    estado = 14; //ultimo final y va a los creditos 
    
    
    
       } else if (estado == 14 && mouseEnCirculo(580, 420, 40)) {
    estado = 17; //ultimo final y va a los creditos 
    
      } else if (estado == 15 && mouseEnCirculo(580, 420, 40)) {
    estado = 16; //ultimo final y va a los creditos 
    
       } else if (estado == 16 && mouseEnCirculo(580, 420, 40)) {
    estado = 17; //ultimo final y va a los creditos 
    
    
    
        } else if (estado == 17 && mouseEnCirculo(410, 410, 40)) {
    estado = 18 ; //ultimo final y va a los creditos 
    
    
       } else if (estado == 17 && mouseEnCirculo( 260,410,40 )) {
    estado = 19 ; //ultimo final y va a los creditos 
    
    
      } else if (estado == 18 && mouseEnCirculo( 580, 420, 40)) {
    estado = 21 ; //ultimo final y va a los creditos 
     
     
       } else if (estado == 19 && mouseEnCirculo( 580, 420, 40)) {
    estado = 20 ; //ultimo final y va a los creditos 
    
    
     
      
       } else if (estado == 20 && mouseEnCirculo( 580, 420, 40)) {
    estado = 25 ; //ultimo final y va a los creditos 
    
    
      } else if (estado == 25 && mouseEnCirculo( 90, 410, 40)) {
    estado = 22 ; //ultimo final y va a los creditos 
    
      } else if (estado == 25 && mouseEnCirculo( 410, 410, 40)) {
    estado = 23 ; //ultimo final y va a los creditos 
    
    
      } else if (estado == 25 && mouseEnCirculo( 580, 420, 40)) {
    estado = 24 ; //ultimo final y va a los creditos 
    
    
      } else if (estado == 22 && mouseEnCirculo( 580, 420, 40)) {
    estado = 0 ; //ultimo final y va a los creditos 
      
      
      } else if (estado == 23 && mouseEnCirculo( 580, 420, 40)) {
    estado = 0 ; //ultimo final y va a los creditos 
    
    
      } else if (estado == 24 && mouseEnCirculo( 580, 420, 40)) {
    estado = 0 ; //ultimo final y va a los creditos 
}}
   
  
    





 
