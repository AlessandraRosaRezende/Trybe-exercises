// n = 5

//   *
//  ***
// *****

let base = 5; //base
let middle = (base + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';

for ( let lineIndex = 0; lineIndex <= middle; lineIndex += 1) {
  let lineInput = '';
  for (let lineColumn = 1; lineColumn <= base; lineColumn += 1) {
    if (lineColumn > controlRight && lineColumn < controlLeft) {
      lineInput = lineInput + symbol;
    } 
    else {
      lineInput = lineInput + ' ';
    }
  }
  console.log(lineInput);
  controlRight -= 1;
  controlLeft += 1;
};

