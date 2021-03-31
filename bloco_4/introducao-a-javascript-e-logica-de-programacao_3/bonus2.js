// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let numEntrada = 23;
let primo = 0;

for (let index = 1; index <= numEntrada; index += 1) {
  if (numEntrada % index == 0) {
    primo += 1;
  }
}

if ((numEntrada == 1) || (primo == 2)) {
  console.log('Número primo.');  
}
else {
  console.log('Número não é primo.')
}