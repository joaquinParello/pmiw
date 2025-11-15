class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.plankton = new Plankton(590);
    this.medusas = [];
    this.proximoDisparo = int(random(10, 25));
    this.tiempoDisparo = 0;
    this.perdio = false;
    this.tiempo = 0;   // contador de frames
    this.gano = false; 
  }

  actualizar() {
    if (this.perdio) return;

    // sumar tiempo 
    this.tiempo++;

    // si sobrevivió 20 segundos (60 fps * 20)
    if (this.tiempo > 60 * 20) {
      this.gano = true;
    }

    // actualizar bob y plankton
    this.jugador.actualizar();
    this.plankton.mover();

    // Disparo de medusas
    this.tiempoDisparo++;
    if (this.tiempoDisparo > this.proximoDisparo) {
      this.medusas.push(new Medusa(this.plankton.x - 20, this.plankton.y));
      this.tiempoDisparo = 0;
      this.proximoDisparo = int(random(10, 25));
    }

    // mover medusas
    for (let i = 0; i < this.medusas.length; i++) {
      this.medusas[i].mover();
    }

    // detectar colisión
    for (let i = 0; i < this.medusas.length; i++) {
      let d = dist(
        this.medusas[i].x,
        this.medusas[i].y,
        this.jugador.x,
        this.jugador.y
      );

      if (d < this.medusas[i].r + this.jugador.r) {
        this.perdio = true;
      }
    }

    // eliminar medusas que salen de pantalla
    for (let i = this.medusas.length - 1; i >= 0; i--) {
      if (this.medusas[i].fuera()) {
        this.medusas.splice(i, 1);
      }
    }
  }

  mostrar() {
    // solo dibuja las entidades, sin pantallas de fin ni victoria
    this.jugador.mostrar();
    this.plankton.mostrar();

    for (let i = 0; i < this.medusas.length; i++) {
      this.medusas[i].mostrar();
    }
  }
}
