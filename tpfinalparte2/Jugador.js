class Jugador {
  constructor() {
    this.x = 100;
    this.y = 200;
    this.r = 30; // radio 
    this.ancho = 100; // ancho de la imagen
    this.alto = 100;  // alto de la imagen
  }

  actualizar() {
    // limitar movimiento 
    this.x = constrain(mouseX, this.ancho / 2, width - this.ancho / 2);
    this.y = constrain(mouseY, this.alto / 2, height - this.alto / 2);
  }

  mostrar() {
    image(imgBob, this.x - this.ancho / 2, this.y - this.alto / 2, this.ancho, this.alto);
  }
}
