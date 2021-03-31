//EXERCICIO 1
function verificaPalindrome(string) {
  let contrario = string.split("").reverse().join("");
  if (contrario === string) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));


//EXERCICIO 2
let arrayTeste = [2, 3, 6, 7, 10, 1];

function verificaMaiorValor(array) {
  let maior = arrayTeste[0];
  for (let index = 0; index <= array.length; index += 1) {
    if (array[index] > maior) {
      maior = index;
    }
  }
  return maior;
}  
console.log(verificaMaiorValor(arrayTeste))


//EXERCICIO 3
let arrayTeste = [2, 4, 6, 7, 10, 0, -3, -5];

function verificaMenorValor(array) {
  let menor = arrayTeste[0];
  for (let index = 0; index <= array.length; index += 1) {
    if (array[index] < menor) {
      menor = index;
    }
  }
  return menor;
}  
console.log(verificaMenorValor(arrayTeste))


//EXERCICIO 4
let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorPalavra(array) {
  let maiorPalavra = arrayTeste[0];
  for (let indice in array) {
    if (maiorPalavra.length < array[indice].length) {
      maiorPalavra = array[indice];
    }
  }
  return maiorPalavra;
}
  console.log(maiorPalavra(arrayTeste))


//EXERCICIO 6
function somatorio(numero){
  let soma = 0;
  for (let index = 0; index <= numero; index +=1){
    soma = soma + index;
  }
  return soma;
}
console.log(somatorio(5))



//EXERCICIO 5
let arrayTeste = [2, 3, 2, 5, 8, 2, 3];

function maisRepetido(numeros) {
  let num = {};
  for (let i = 0; i < numeros.length; i += 1) {
    let valor = numeros[i];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }
  let contaRepetido = 0;
  let contaNumero = 0;
  for (let prop in num) {
    if (contaRepetido < num[prop]) {
      contaRepetido = num[prop];
      contaNumero = prop;
    }
  }
  return contaNumero;
}
console.log(maisRepetido(arrayTeste));


//EXERCICIO 7
function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split("").reverse().join("");
  let inversoFimPalavra = fimPalavra.split("").reverse().join("");
  for (let i = 0; i < inversoFimPalavra.length; i += 1) {
    if (inversoPalavra[i] != inversoFimPalavra[i]) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(verificaFimPalavra("trybe", "be")); 
console.log(verificaFimPalavra("joaofernando", "fernan")); 