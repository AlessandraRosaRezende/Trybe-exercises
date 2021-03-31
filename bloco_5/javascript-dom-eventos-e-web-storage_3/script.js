function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Escreva seu código abaixo.

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criaDiasMes() {
  let getDaysList = document.querySelector('#days');
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayItem = document.createElement('li');
    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day friday holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    }
  };
}
criaDiasMes();

let botaoFeriado = document.querySelector('.buttons-container');
let novoBotaoFeriado = document.createElement('button');
function criaBotaoFeriado(feriados) {
  novoBotaoFeriado.innerHTML = feriados;
  novoBotaoFeriado.id = 'btn-holiday'
  botaoFeriado.appendChild(novoBotaoFeriado);
};
criaBotaoFeriado('Feriados');

novoBotaoFeriado.addEventListener('click', function() {
  const holidays = document.querySelectorAll('.holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === 'white') {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidays[index].style.backgroundColor = 'white';
    }
  }
});

let botaoSexta = document.querySelector('.buttons-container');
let novoBotaoSexta = document.createElement('button');
function criaBotaoSexta(sexta) {
  novoBotaoSexta.innerHTML = sexta;
  novoBotaoSexta.id = 'btn-friday'
  botaoSexta.appendChild(novoBotaoSexta);
};
criaBotaoSexta('Sexta-feira');

const fridayDays = [4, 11, 18, 25];
novoBotaoSexta.addEventListener('click', function() {
  const friday = document.getElementsByClassName('friday');
  for (let index = 0; index < friday.length; index += 1) {
    if (friday[index].innerHTML !== "Sexta-feira!") {
      friday[index].innerHTML = "Sexta-feira!";
    } else {
      friday[index].innerHTML = fridayDays[index];
    }
  }
});

function dayZoom() {
  let zoom = document.querySelector('#days');
  zoom.addEventListener('mouseover', function(evento) {
    evento.target.style.fontSize = '40px';
    evento.target.style.fontWeight = '800';
  })
};

function dayNormal() {
  let normal = document.querySelector('#days');
  normal.addEventListener('mouseout', function(evento) {
    evento.target.style.fontWeight = '200';
    evento.target.style.fontSize = '20px';
  })
};
dayZoom();
dayNormal();

let tarefa = document.querySelector('.my-tasks');
let novaTarefa = document.createElement('span');
function adicionaTarefa(string) {  
  novaTarefa.innerHTML = string;
  tarefa.appendChild(novaTarefa);
}
adicionaTarefa('Tarefa:');

let legenda = document.querySelector('.my-tasks');
let novaLegenda = document.createElement('div');
function criaLegenda(cor) {
  novaLegenda.className = 'task';
  novaLegenda.style.backgroundColor = cor;
  legenda.appendChild(novaLegenda);
}
criaLegenda('pink');

let selecTask = document.getElementsByClassName('task-selected');
let myTask = document.querySelector('.task');
function selecionaTask() {
  myTask.addEventListener("click", function(event){
    if (selecTask.length === 0) {
      event.target.className = "task-selected";
    } else {
      event.target.className = "task";
    }
  });
}
selecionaTask();

function coloreDia() {
  let selectedTask = document.getElementsByClassName('task-selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};
coloreDia();

function adicionaTarefa() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else if (getInputField.value.length = 0) {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};
adicionaTarefa();