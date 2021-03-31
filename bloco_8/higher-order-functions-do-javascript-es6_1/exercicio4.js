//  Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
//  Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

// const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const verificaResposta = (rightAnswers, studentAnswers, checkAnswers) => {
//   let contador = 0;
//   rightAnswers.forEach((elemento, index) => {
//     if (elemento === studentAnswers[index]) {
//       contador += 1;      
//     } else if (studentAnswers[index] === 'N.A') {
//       contador += 0;
//     } else {
//       contador -= 0.5;
//     } 
//   });
//   return contador;
// }
// console.log(verificaResposta(rightAnswers, studentAnswers));

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaResposta = (rightAnswers, studentAnswers, checkAnswers) => {
  let contador = 0;
  rightAnswers.forEach((elemento, index) => contador += checkAnswers(elemento, studentAnswers[index]));
  return contador;
}

const gabarito = verificaResposta(rightAnswers, studentAnswers, (elemento1, elemento2) => {
  if (elemento1 === elemento2) return 1;
  if (elemento2 === 'N.A') return 0;
  return -0.5;  
})

console.log(gabarito);