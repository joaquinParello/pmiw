class Plankton {
  constructor(x) {
    this.x = x;
    this.y = height / 2;
    this.vel = 3;
  }

  mover() {
    this.y += this.vel;

    if (this.y > height - 10 || this.y < -10) {
      this.vel *= -1;
    }
  }

  mostrar() {
    image(imgPlankton, this.x - 30, this.y - 30, 100, 100);
  }
}
