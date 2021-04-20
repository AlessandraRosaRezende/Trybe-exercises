const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('testing uppercase function', () => {
  test('uppercase function', (done) => {
    return uppercase('trybe', (str) => {
      expect.assertions(1);
      expect(str).toBe('TRYBE');   
      done();   
    })
  });
});