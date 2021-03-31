const longestWord = "Alessandra foi no banheiro e não sabemos o que aconteceu" 

const maiorPalavra = string => {
  let arrayStr = string.split(" ");
  let maior = 0;
  let palavra = null;

  for (const word of arrayStr) {
    if (word.length > maior) {
      maior = word.length;
      palavra = word;
    }
  }  
  return palavra;
}
console.log(maiorPalavra(longestWord));