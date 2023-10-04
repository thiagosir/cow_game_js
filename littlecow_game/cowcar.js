
// Função nativa do P5 (https://p5js.org/reference/) <---
function setup() {
  createCanvas(500, 400);
}

// Função nativa do P5 (https://p5js.org/reference/) <---
function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicao();
}
