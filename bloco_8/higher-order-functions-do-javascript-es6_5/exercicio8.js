const assert = require('assert');

// escreva greet abaixo
const greet = (user, message = 'Hi') => {
  return `${message} ${user}`;
};
console.log(greet('John'));
assert.strictEqual(greet('John'), 'Hi John');

console.log(greet('John', 'Good morning'));
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');

console.log(greet('Isabela', 'Oi'));
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');