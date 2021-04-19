function encode(string) {
  let trocaCaracter = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      trocaCaracter += '1';
    } else if (string[i] === 'e') {
      trocaCaracter += '2';
    } else if (string[i] === 'i') {
      trocaCaracter += '3';
    } else if (string[i] === 'o') {
      trocaCaracter += '4';
    } else if (string[i] === 'u') {
      trocaCaracter += '5';
    } else {
      trocaCaracter += string[i];
    }
  }
  return trocaCaracter;
}
function decode(string) {
  let trocaCaracter = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      trocaCaracter += 'a';
    } else if (string[i] === '2') {
      trocaCaracter += 'e';
    } else if (string[i] === '3') {
      trocaCaracter += 'i';
    } else if (string[i] === '4') {
      trocaCaracter += 'o';
    } else if (string[i] === '5') {
      trocaCaracter += 'u';
    } else {
      trocaCaracter += string[i];
    }
  }
  return trocaCaracter;
}

function techList(tech, name) {
  let novaArray = tech.sort();
  let objeto = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < novaArray.length; i += 1) {
    objeto[i] = {
      tech: novaArray[i],
      name,
    };
  }
  return objeto;
}

function hydrate(string) {
  let regex = /\d+/g;
  let numeros = string.match(regex);
  let copoAgua = 0;
  let resultado;
  for (let i = 0; i < numeros.length; i += 1) {
    copoAgua += parseInt(numeros[i], 10);
  }
  if (copoAgua === 1) {
    resultado = '1 copo de água';
  } else {
    resultado = `${copoAgua} copos de água`;
  }
  return resultado;
}

module.exports = {
  decode,
  encode,
  techList,
  hydrate,
};
