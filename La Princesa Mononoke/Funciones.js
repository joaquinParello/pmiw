function estado0() {
  textos();
  text("Estás tranquilamente en tu aldea", 300, 200);
}

function estado1() {
  circuloa(410, 410, 40); 
  circulob(260, 410, 40);
  textos();
  text("Un monstruo te pasó una maldición", 350, 50);
  text("Huir", 400, 390);
  text("Despedirse", 270, 390);
}

function estado2() {
  textos();
  text("Te vas sin despedirte de nadie\n con la esperanza de volver sano y salvo", 300, 100);
}

function estado3() {
  textos();
  text("Te despides muy tristemente de tu hermana", 350, 30);
}

function estado4() {
  textos();
  text("Estás sin ningún tipo de rumbo por el bosque", 300, 100);
}

function estado5() {
  circuloa(410, 410, 40); 
  circulob(260, 410, 40);
  textos();
  text("A lo lejos ves como una aldea está siendo atacada", 300, 50);
  text("Ayudar", 400, 390);
  text("Ignorar", 270, 390);
}

function estado6() {
  textos();
  text("Te enfrentas con varios enemigos", 300, 100);
}

function estado7() {
  textos();
  text("Rescatas a un hombre herido\n que te cuenta sobre una aldea cercana", 300, 400);
}

function estado8() {
  textos(); 
  text("En agradecimiento deciden enseñarte la aldea", 300, 100);
}

function estado9() {
  circuloa(410, 410, 40);
  circulob(260, 410, 40);
  textos();
  text("Conoces a su líder\n ella te cuenta que quiere matar\n a la princesa Mononoke.\n Ves a la lejanía como ella\n se intenta escabullir", 300, 40);  
  text("Callarse", 400, 390);
  text("Avisarle", 270, 390);
}

function estado10() {
  textos();
  text("La princesa se escabulle de la aldea sin ser vista", 300, 100);
}

function estado11() {
  textos(); 
  text("Le dices que está allí mismo\n rápidamente se ponen a combatir", 300, 440);
}

function estado12() {
  textos();
  text("Intentas separar la pelea", 300, 100);
}

function estado13() {
  textos();
  text("Recibes un disparo\n y la princesa Mononoke te lleva al bosque", 300, 50);
}

function estado14() {
  textos();
  text("El dios ciervo te salva la vida", 300, 50);
}

function estado15() {
  textos();
  text("Te escapas con ella rumbo al bosque", 300, 50);
}

function estado16() {
  textos();
  text("Te enseña al dios ciervo", 300, 50);
}

function estado17() {
  circuloa(410, 410, 40);  
  circulob(260, 410, 40);
  textos(); 
  text("Lady Eboshi, la líder del pueblo\n prepara una guerra contra el bosque\n con el objetivo de matar al dios ciervo", 300, 50); 
  text("Atacar", 400, 390);
  text("Defender", 270, 390);
}

function estado18() {
  textos();
  text("Vas a la aldea, pero cuando llegas\n otro pueblo la está atacando", 300, 50);
}

function estado19() {
  textos();
  text("Defiendes el bosque contra las tropas de Lady Eboshi", 300, 50);
}

function estado20() {
  textos();
  text("El jefe de los jabalíes resulta gravemente herido", 300, 440);
}

function estado21() {
  textos();
  text("Salvas a los pocos habitantes que quedan\n y deciden hacerte líder", 300, 440);
}

function estado22() {
  textos();
  text("", 300, 100);
}

function estado23() {
  textos();
  text("texto 17", 300, 100);
}

function estado24() {
  textos(); 
  text("texto 17", 300, 100);
}
function pasarClick0() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 1; // la foto 1 pasa a la foto 2
  }
}

function pasarClick1() {
  if (mouseEnCirculo(410, 410, 40)) {
    estado = 2; // la foto 2 pasa a la foto 3
  } else if (mouseEnCirculo(260, 410, 40)) {
    estado = 3; // la foto 2 pasa a la foto 4
  }
}

function pasarClick2() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 4; // la foto 3 pasa a la foto 5
  }
}

function pasarClick3() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 4; // la foto 4 pasa a la foto 5
  }
}

function pasarClick4() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 5; // Va al primer final
  }
}

function pasarClick5() {
  if (mouseEnCirculo(410, 410, 40)) {
    estado = 6; // sigue con la historia
  } else if (mouseEnCirculo(260, 410, 40)) {
    estado = 7; // Va al segundo final
  }
}

function pasarClick6() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 8; // último final y va a los créditos
  }
}

function pasarClick7() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 8; // último final y va a los créditos
  }
}

function pasarClick8() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 9; // último final y va a los créditos
  }
}

function pasarClick9() {
  if (mouseEnCirculo(410, 410, 40)) {
    estado = 10; // último final y va a los créditos
  } else if (mouseEnCirculo(260, 410, 40)) {
    estado = 11; // último final y va a los créditos
  }
}

function pasarClick10() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 15; // último final y va a los créditos
  }
}

function pasarClick11() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 12; // último final y va a los créditos
  }
}

function pasarClick12() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 13; // último final y va a los créditos
  }
}

function pasarClick13() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 14; // último final y va a los créditos
  }
}

function pasarClick14() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 17; // último final y va a los créditos
  }
}

function pasarClick15() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 16; // último final y va a los créditos
  }
}

function pasarClick16() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 17; // último final y va a los créditos
  }
}

function pasarClick17() {
  if (mouseEnCirculo(410, 410, 40)) {
    estado = 18; // último final y va a los créditos
  } else if (mouseEnCirculo(260, 410, 40)) {
    estado = 19; // último final y va a los créditos
  }
}

function pasarClick18() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 21; // último final y va a los créditos
  }
}

function pasarClick19() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 20; // último final y va a los créditos
  }
}

function pasarClick20() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 25; // último final y va a los créditos
  }
}

function pasarClick25() {
  if (mouseEnCirculo(90, 410, 40)) {
    estado = 22; // último final y va a los créditos
  } else if (mouseEnCirculo(410, 410, 40)) {
    estado = 23; // último final y va a los créditos
  } else if (mouseEnCirculo(580, 420, 40)) {
    estado = 24; // último final y va a los créditos
  }
}

function pasarClick22() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 0; // Regresa al inicio
  }
}

function pasarClick23() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 0; // Regresa al inicio
  }
}

function pasarClick24() {
  if (mouseEnCirculo(580, 420, 40)) {
    estado = 0; // Regresa al inicio
  }
}


function textos() {
  textSize(25);
  fill(225);
  stroke(0);
  strokeWeight(5);
}
function mouseEnCirculo(x, y, r) { //Evento de click 
  return dist(mouseX, mouseY, x, y) <= r;
}

function circulodecontinuar(h, i, j) {
  stroke(255);
  fill(227, 124, 124);
  circle(h, i, j);
}

function circuloa(h, i, j) {
  stroke(255);
  fill(224, 0, 245);
  circle(h, i, j);
}

function circulob(h, i, j) {
  stroke(255);
  fill(224, 0, 245); 
  circle(h, i, j);
}


function circuloc(h, i, j) {
  stroke(255);
  fill(224, 0, 245); 
  circle(h, i, j);
}
 
