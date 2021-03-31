// n = 5

//     *
//    **
//   ***
//  ****
// *****


let n = 5;
let symbol = '*';
let line = '';
let position = n;

for (let index = 0; index < n; index += 1) {
  for (let column = 0; column <= n; column += 1) {
    if (column < position) {
      line = line + ' ';      
    }
    else {
      line = line + symbol;  
    }
  }
  console.log(line);
  line = '';
  position -= 1;
}

