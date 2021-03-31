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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons)

const totalEstudante = objeto => {
  let total = 0;
  const numero = Object.keys(objeto);  
  for (index in numero) {
    if (objeto[numero[index]].materia === 'Matemática') {
      total += objeto[numero[index]].numeroEstudantes;
    }
  }
  return total
}
console.log(totalEstudante(allLessons));



const relatorio = (objeto, nome) => {
  let retorno = {
    professor: nome,
    aulas: '',
    estudantes: 0
  }
  Object.values(objeto).filter((index) => index.professor === nome).forEach(element => {
    retorno.aulas += `${element.materia} `;
    retorno.estudantes += element.numeroEstudantes;
  })
  return retorno
}
console.log(relatorio(allLessons, 'Maria Clara'))

const informa = (objeto, nome) => {
  const allLessons = [];
  let allStudent = 0;
  const numero = Object.values(objeto);
  for (index in numero) {
    if (numero[index].professor === nome) {
      allLessons.push(numero[index].materia)
      allStudent += numero[index].numeroEstudantes;
    }
  }
  return {lessons: allLessons, estudantes: allStudent};
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, informa(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));