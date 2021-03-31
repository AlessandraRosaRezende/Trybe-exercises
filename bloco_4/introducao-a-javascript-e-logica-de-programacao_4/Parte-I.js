//EXERCÍCIO 1
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log('Bem-vinda, ' + info.personagem + '.')
console.log('');


//EXERCÍCIO 2
info.recorrente = 'Sim';

console.log(info)
console.log('');


//EXERCÍCIO 3
for (let key in info) {
  console.log(key);
}
console.log('');


//EXERCÍCIO 4
for (let key in info) {
  console.log(info[key]);
}
console.log('');


//EXERCÍCIO 5
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'Sim'
};

for (let key in info) {
  if (info[key] === info.recorrente && info[key] === 'Sim' && info2[key] === 'Sim') {
    console.log('Ambos recorrentes');    
  }
  else if (info[key] === info.recorrente && info[key] === 'Não' && info2[key] === 'Não') {
    console.log('Ambos não recorrentes');    
  }
  else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}