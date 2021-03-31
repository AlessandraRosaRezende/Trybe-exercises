let pecaxadrez = "cavalo";
let maiuscula = pecaxadrez.toUpperCase();

switch(maiuscula){
  case "PEAO":
    console.log("Peão > uma casa à frente");
    break;
  case "BISPO":
    console.log("Bispo > linha reta diagonal");
    break;
  case "TORRE":
    console.log("Torre > linha reta horizontal e vertical");
    break;
  case "CAVALO":
    console.log("Cavalo > movimento em L");
    break;
  case "RAINHA":
    console.log("Rainha > linha reta vertical, horizontal ou diagonal");
    break;
  case "REI":
    console.log("Rei > uma casa em qualquer direção: horizontal, vertical ou diagonal");
    break;
    
  default:
    console.log("Peça não existe");
}