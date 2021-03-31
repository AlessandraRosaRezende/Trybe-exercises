const geraEmail = (nome) => {
  const email = nome.toLowerCase().split(' ').join('_');
  return {nome, email: `${email}@trybe.com`};
};

const newEmployees = (geraEmail) => {
  const employees = {
    id1: geraEmail('Pedro Guerra'),
    id2: geraEmail('Luiza Drumond'),
    id3: geraEmail('Carla Paiva')
  }
  return employees;
};

console.log(newEmployees(geraEmail))