const assert = require('assert');

// escreva sum abaixo
const sum = (...args) => {
  return args.reduce((accumulator, current) => accumulator + current, 0);
}
console.log(sum(), 0);
assert.strictEqual(sum(), 0);

console.log(sum(1), 1);
assert.strictEqual(sum(1), 1);

console.log(sum(1, 2), 3);
assert.strictEqual(sum(1, 2), 3);

console.log(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3), 6);

console.log(sum(1, 2, 3, 4), 10);
assert.strictEqual(sum(1, 2, 3, 4), 10);