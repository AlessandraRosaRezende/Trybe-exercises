const { encode, decode } = require('./encode');

describe('Testa a função encode e decode', () => {
  test('as funções encode/decode são definidas', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();
  });
  test('encode/decode são funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  test('converte a vogal "a" no número 1, e de volta para "a"', () => {
    expect(encode('ana')).toEqual('1n1');
    expect(decode('1n1')).toEqual('ana');
  });
  test('converte a vogal "e" no número 2, e de volta para "e"', () => {
    expect(encode('ele')).toEqual('2l2');
    expect(decode('2l2')).toEqual('ele');
  });
  test('converte a vogal "i" no número 3, e de volta para "i"', () => {
    expect(encode('lili')).toEqual('l3l3');
    expect(decode('l3l3')).toEqual('lili');
  });
  test('converte a vogal "o" no número 4, e de volta para "o"', () => {
    expect(encode('ovo')).toEqual('4v4');
    expect(decode('4v4')).toEqual('ovo');
  });
  test('converte a vogal "u" no número 5, e de volta para "u"', () => {
    expect(encode('chuchu')).toEqual('ch5ch5');
    expect(decode('ch5ch5')).toEqual('chuchu');
  });
  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('trybe')).toHaveLength(5);
    expect(decode('trybe').length).toEqual(5);
  });
})
