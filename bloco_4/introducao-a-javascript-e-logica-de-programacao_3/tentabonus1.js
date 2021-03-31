// n = 7

//    *
//   * *
//  *   *
// *******

let base = 5;
let middle = (base + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';

for (let lineIndex = 1; lineIndex <= middle; lineIndex += 1) {
  let lineInput = '';
  for (let lineColumn = 1; lineColumn <= base; lineColumn += 1) {
    if (lineColumn == controlLeft || lineColumn == controlRight || lineIndex == middle) {
      lineInput += symbol;
    } 
    else {
      lineInput += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(lineInput);
}