// n = 5

//   *
//  ***
// *****

let n = 5;
let lineIndex;
let lineColumn;
let lineInput = '';
let symbol = '*';

let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;

for (lineIndex = 0; lineIndex <= middle; lineIndex += 1) {
  for (lineColumn = 1; lineColumn <= n; lineColumn += 1) {
    if (lineColumn > controlRight && lineColumn < controlLeft) {
      lineInput = lineInput + symbol;
    } else {
      lineInput = lineInput + ' ';
    }
  }
  console.log(lineInput);
  lineInput = '';
  controlRight -= 1;
  controlLeft += 1;
};
