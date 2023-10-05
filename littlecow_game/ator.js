

// código do ator

let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }

  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    let distanciaX = xAtor - xCarros[i] - (50 / 2);
    let distanciaY = yAtor - yCarros[i] - (40 / 2);
    let distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
    
    if (distancia < 30) {
      colidiu()
    }
  }
}

function colidiu() {
  return yAtor = 366;
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    colidiu();
  }
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 8, 27);
}