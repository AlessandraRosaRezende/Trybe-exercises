function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

//implemente seus testes aqui
test('Remove elemento do array', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

const parametro = [5, 6, 7, 8];
test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
  expect(myRemove(parametro, 5)).toEqual([6, 7, 8]);
});

test('Retorna array esperado', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});