function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraGus();
  mostraCovid();
  movimentaCovid();
  movimentaGus();
  voltaPosicaoInicialDoCovid();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
