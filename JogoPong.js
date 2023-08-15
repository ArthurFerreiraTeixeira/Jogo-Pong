//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bolinha
let velociXBolinha = 6;
let velociYBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let compriRaquete = 5;
let alturaRaquete = 90;

//variaveis do Oponete
let xRaqOponente = 590;
let yRaqOponente = 150;
let compriRaqOponente = 5;
let alturaRaqOponente = 90;
let velociYOponente;

//pontos
let meusPontos = 0;
let pontosOponente = 0;

//sons
let raquetada;
let ponto;
let trilha;

//erro
let chanceDeErrar = 0;

function preload(){
  //trilha = loadSound ("trilha.mp3");
  //ponto = loadSound ("ponto.mp3");
  //raquetada = loadSound ("raqueta.mp3");
}

function setup() {
  createCanvas(600, 400);
  //trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);  
  moviRaquete();
  verColisaoRaquete();
  mostraRaquete(xRaqOponente, yRaqOponente);
  moviRaqOponente();
  verColisaoRaqOponente();
  incluiPlacar();
  marcaPonto();
  //bolinhaNaoFicaPresa();
}

function mostraBolinha(){
  circle (xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velociXBolinha;
  yBolinha += velociYBolinha;
}

function verificaColisaoBorda(){
   if (xBolinha + raio > width || xBolinha - raio < 0){
    velociXBolinha *= -1
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velociYBolinha *= -1
  }
}

function mostraRaquete(x,y){
  rect(x, y, compriRaquete, alturaRaquete)
}

function moviRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verColisaoRaquete(){
  if (xBolinha - raio < xRaquete + compriRaquete 
     && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velociXBolinha *= -1;
    //raquetada.play();
    
  }
}
function verColisaoRaqOponente(){
  if (xBolinha - raio > xRaqOponente + compriRaqOponente 
     && yBolinha - raio > yRaqOponente + alturaRaqOponente && yBolinha + raio < yRaqOponente){
    velociXBolinha *= +1;
    //raquetada.play();
    
  }
}

function moviRaqOponente (){
  velociYOponente = yBolinha -yRaqOponente - compriRaquete / 2 - 30;
  yRaqOponente += velociYOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

//function moviRaqOponente(){
  //if(keyIsDown(87)){
    //yRaqOponente -= 10;
  //}
  //if(keyIsDown(83)){
   // yRaqOponente += 10;
 // }
//}

function incluiPlacar(){
  stroke (255);
  textAlign(CENTER);
  textSize(16);
  fill(color(139,0,139));
  rect ( 150, 10, 40, 20);
  fill(255);
  text (meusPontos, 170, 26)
  fill(color(139,0,139));
  rect ( 450, 10, 40, 20);
  fill(255);
  text (pontosOponente, 470, 26)
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    //ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    //ponto.play();
  }
}

function bolinhaNaoFicaPresa(){
  if (xBolinha - raio < 0){
  xBolinha = 23
  }
}