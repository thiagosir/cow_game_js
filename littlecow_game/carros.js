// Código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 262, 318];
let velocidadeCarros = [2, 3, 7, 5, 4, 2];

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro() {
  for (let i = 0; i < xCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicao() {
  for (let i = 0; i < xCarros.length; i++) {
    if (xCarros[i] <= -50) {
      xCarros[i] = 600
    }
  }
}