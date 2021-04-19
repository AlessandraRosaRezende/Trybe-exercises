function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
test('FizzBuzz', () => {  
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  expect(myFizzBuzz(6)).toBe('fizz');
  expect(myFizzBuzz(10)).toBe('buzz');
  expect(myFizzBuzz(14)).toBe(14);
  expect(myFizzBuzz('string')).toFalsy;
});