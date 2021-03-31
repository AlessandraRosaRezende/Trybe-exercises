const fatorial = numero => {
  let numFatora = 1;
  for (let index = 2; index <= numero; index += 1) {
    numFatora *= index;
  }  
  return numFatora;
}

console.log(fatorial(4));


// BÔNUS
const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5))
