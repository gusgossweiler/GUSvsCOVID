console.log("GUS.GOSSWEILER")

let xGus = 85;
let yGus = 366;
let colisao = false;
let meusPontos = 0;

function mostraGus(){
  image(imagemDoGus, xGus, yGus, 30, 30);
}

function movimentaGus(){
  if (keyIsDown(UP_ARROW)){
    yGus -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yGus += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCovids.length; i++){
    colisao = collideRectCircle(xCovids[i], yCovids[i], comprimentoCovid, alturaCovid, xGus, yGus, 15)
    if (colisao){
      voltaGusParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaGusParaPosicaoInicial(){
  yGus = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yGus < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaGusParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yGus < 366;
}
