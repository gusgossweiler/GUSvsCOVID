let imagemDaEstrada;
let imagemDoGus;
let imagemCovid;
let imagemCovid2;
let imagemCovid3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoGus = loadImage("imagens/gus-1.png");
  imagemCovid = loadImage("imagens/covid-1.gif");
  imagemCovid2 = loadImage("imagens/covid-2.gif");
  imagemCovid3 = loadImage("imagens/covid-3.gif");  
  imagemCovids = [imagemCovid, imagemCovid2, imagemCovid3, imagemCovid, imagemCovid2, imagemCovid3]
  
  somDaTrilha = loadSound("sons/BumBumTamTam.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}
