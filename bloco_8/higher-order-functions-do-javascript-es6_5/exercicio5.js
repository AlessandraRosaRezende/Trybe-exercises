const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([a, b, c]) => [c, b, a];

const swappedList = swap(myList);

console.log(swappedList);

console.log(swappedList[0]);
assert.strictEqual(swappedList[0], 3);

console.log(swappedList[1]);
assert.strictEqual(swappedList[1], 2);

console.log(swappedList[2]);
assert.strictEqual(swappedList[2], 1);