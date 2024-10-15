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
 
