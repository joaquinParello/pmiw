class Medusa {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 15;
    this.vel = 7; 
  }

  mover() {
    this.x -= this.vel;
  }

  fuera() {
    return this.x < -50;
  }

  mostrar() {
    image(imgMedusa, this.x - 25, this.y - 25, 40, 40);
  }
}
