let oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}
const ordenaArray = sortArray();

console.log(`Os números ${sortArray()} se encontram ordenados de forma crescente!`);


// BÔNUS
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
  const ordenaArray = array.sort((a, b) => a - b);
  return ordenaArray;
}

const ordenaArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${ordenaArrayBonus} se encontram ordenados de forma crescente !`);


// BÔNUS - outra forma
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);