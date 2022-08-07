let imagemDaEstrada;
let imagemDoGus;
let imagemCovid;
let imagemCovid2;
let imagemCovid3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("estrada.png");
  imagemDoGus = loadImage("gus-1.png");
  imagemCovid = loadImage("covid-1.gif");
  imagemCovid2 = loadImage("covid-2.gif");
  imagemCovid3 = loadImage("covid-3.gif");  
  imagemCovids = [imagemCovid, imagemCovid2, imagemCovid3, imagemCovid, imagemCovid2, imagemCovid3]
  
  somDaTrilha = loadSound("BumBumTamTam.mp3");
  somDaColisao = loadSound("colidiu.mp3");
  somDoPonto = loadSound("pontos.wav");
}
