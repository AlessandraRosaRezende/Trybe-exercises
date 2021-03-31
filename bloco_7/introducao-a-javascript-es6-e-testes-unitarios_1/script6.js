let arraySkills = ['JavaScript', 'CSS', 'HTML', 'GitHub', 'Python'];

const trocaString = (string, parametro) => {
  let novaString = string.replace('x', parametro);
  return novaString;
}

let stringSemX = trocaString("Tryber x aqui!", "Bebeto")

arraySkills = arraySkills.sort();

const stringSkills = (stringSemX, arraySkills) => `${stringSemX} Minhas cinco principais habilidades são:
${arraySkills}
#goTrybe`;

console.log(stringSkills(stringSemX, arraySkills));
