const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const novaChave = (objeto, param1, param2) => objeto[param1] = param2;     
novaChave(lesson2, 'turno', 'manhã')
console.log(lesson2)

const listaKey = objeto => Object.keys(objeto);
console.log(listaKey(lesson1))

const tamObjeto = objeto => Object.keys(objeto).length;
console.log(tamObjeto(lesson1))

const valObjeto = objeto => Object.values(objeto);
console.log(valObjeto(lesson1))

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons)

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalEstudante = objeto => {
  let total = 0;
  const numero = Object.keys(objeto);
  for (index in numero) {
    total += objeto[numero[index]].numeroEstudantes;
  }
  return total
}
console.log(totalEstudante(allLessons));

const posObjeto = (objeto, chave) => Object.values(objeto)[chave];
console.log(posObjeto(lesson1, 0));

const verifyPair = (objeto, chave, valor) => {
  const verifica = Object.entries(objeto);
  let trueFalse = false;
  for (let index in verifica) {
    if (verifica[index][0] === chave && verifica[index][1] === valor) {
      trueFalse = true;
    }
  }
  return trueFalse;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false