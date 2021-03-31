let nota = 70;

if (nota >= 90 && nota <= 100){
  console.log("Conceito A")
}
else if (nota >= 80 && nota <= 89){
  console.log("Conceito B")
}
else if (nota >= 70 && nota <= 79){
  console.log("Conceito C")
}
else if (nota >= 60 && nota <= 69){
  console.log("Conceito D")
}
else if (nota >= 50 && nota <= 59){
  console.log("Conceito E")
}
else if (nota < 50 && nota >= 0){
  console.log("Conceito F")
}
else {
  console.log("Nota inválida")
}