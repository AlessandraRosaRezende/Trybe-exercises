// Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.filter((animal) => animal.age === age);
      if (animal.length !== 0) {
        return resolve(animal);
      };
      const messageError = 'Nenhum animal com essa idade!';
      return reject(messageError);      
    }, 100)
  })
);


const getAnimalByAge = (age) => {
  return findAnimalByAge(age).then(animal => animal);
};

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Verifique os animais com a idade informada', () => {
      expect.assertions(1);
      const animals = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
        return expect(getAnimalByAge(5)).resolves.toEqual(animals);
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(3)).rejects.toBe('Nenhum animal com essa idade!');      
    });
  });
});