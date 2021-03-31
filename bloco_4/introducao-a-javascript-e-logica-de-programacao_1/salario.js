let salarioBruto = 3800;
let salarioSemINSS;
let salarioLiquido;

if (salarioBruto <= 1556.94){
  salarioSemINSS = salarioBruto - ((salarioBruto*8)/100)
}
else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92){
  salarioSemINSS = salarioBruto - ((salarioBruto*9)/100)
}
else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82){
  salarioSemINSS = salarioBruto - ((salarioBruto*11)/100)
}
else if (salarioBruto > 5189.83){
  salarioSemINSS = salarioBruto - 570.88
}

if (salarioSemINSS <= 1903.98){
  salarioLiquido = salarioSemINSS 
}
else if (salarioSemINSS > 1903.99 && salarioSemINSS <= 2826.65){
  salarioLiquido = salarioSemINSS - (((salarioSemINSS*7.5)/100) - 142.80)
}
else if (salarioSemINSS > 2826.66 && salarioSemINSS <= 3751.05){
  salarioLiquido = salarioSemINSS - (((salarioSemINSS*15)/100) - 354,80)
}
else if (salarioSemINSS > 3751.06 && salarioSemINSS <= 4664.68){
  salarioLiquido = salarioSemINSS - (((salarioSemINSS*22.5)/100) - 636,13)
}
else if (salarioSemINSS > 4664.69){
  salarioLiquido = salarioSemINSS - (((salarioSemINSS*27.5)/100) - 869,36)
}

console.log(salarioLiquido)