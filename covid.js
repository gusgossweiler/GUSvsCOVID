let xCovids = [600, 600, 600, 600, 600, 600];
let yCovids = [40, 96, 150, 210, 270, 318];
let velocidadeCovids = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCovid = 50;
let alturaCovid = 40;

function mostraCovid(){
  for (let i = 0; i < imagemCovids.length; i++){
    image(imagemCovids[i], xCovids[i], yCovids[i], comprimentoCovid, alturaCovid);
  }
}

function movimentaCovid(){
  for (let i = 0; i < imagemCovids.length; i++){
    xCovids[i] -= velocidadeCovids[i];
  }
}

function voltaPosicaoInicialDoCovid(){
  for (let i = 0; i < imagemCovids.length; i++){
    if (passouTodaATela(xCovids[i])){
      xCovids[i] = 600;
    }
  }
}

function passouTodaATela(xCovid){
  return xCovid < - 50;
}
