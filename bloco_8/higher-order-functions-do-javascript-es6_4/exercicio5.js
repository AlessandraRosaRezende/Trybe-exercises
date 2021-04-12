
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

// function containsA() {
//   // escreva seu código aqui
//   const separaNomes = names.reduce((acc, element) => acc + element.split('').reduce((acum, elem) => {
//     if (elem === 'a' || elem === 'A') {
//       acum += 1;
//     }
//     return acum;
//   }, 0), 0);
//   return separaNomes;
// }

function containsA() {
  return names.reduce((acumulador, elemento) => {
    return acumulador + elemento.match(/a/gi).length;
  }, 0)  
}
console.log(containsA());
//console.log(containsA());
//assert.deepStrictEqual(containsA(), 20);