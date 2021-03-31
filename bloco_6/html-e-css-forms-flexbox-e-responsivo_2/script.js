const states = document.getElementById('input-state');
function createStateOptions() {
  const stateOptions = ['', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < stateOptions.length; index += 1) {
    const createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];        
  }    
}

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 10,
      maxLength: 40
    },
    email: {
      required: true,
      email: true      
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    adress: {
      required: true,
      maxLength: 100
    },
    city: {
      required: true,
      maxLength: 50
    },
    state: {
      required: true
    },
    resumo: {
      required: true,
      maxLength: 1000
    },
    last_cargo: {
      required: true,
      maxLength: 50
    },
    desc_cargo: {
      required: true,
      maxLength: 500
    },
    date: {
      required: true
    }
  },  
  messages: {
    name: {
      required: 'O campo de nome é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    email: {
      required: 'O campo de email é obrigatório.',
      email: 'O e-mail digitado não é válido.'      
    },
    cpf: {
      required: 'O campo de CPF é obrigatório.',
      maxLength: 'O limite é de 11 caracteres.'
    },
    adress: {
      required: 'O campo de endereço é obrigatório.',
      maxLength: 'O limite é de 100 carcateres.'
    },
    city: {
      required: 'O campo de cidade é obrigatório.',
      maxLength: 'O limite é de 50 caracteres.'
    },
    state: {
      required: 'O campo de estado é obrigatório.'
    },
    resumo: {
      required: 'O campo de resumo é obrigatório.',
      maxLength: 'O limite é de 1000 caracteres.'
    },
    last_cargo: {
      required: 'O campo referente ao último cargo é obrigatório.',
      maxLength: 'O limite é de 50 caracteres.'
    },
    desc_cargo: {
      required: 'O campo referente à descrição do cargo é obrigatório.',
      maxLength: 'O limite é de 500 caracteres.'      
    },
    date: {
      required: 'O campo data é obrigatório.'
    }
  },
  submitHandler: function (form, values) {
    console.log(form, values);    
    const formElements = document.querySelectorAll('input');
    for (let index = 0; index < formElements.length; index += 1) {
      if (formElements[index].type === 'radio' && !formElements[index].checked) {
        continue;
      } 
      const userInput = formElements[index].value;
      const dataUser = document.querySelector('.form-data');
      const div = document.createElement('div');
      div.id = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }    
  }  
});

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  const div = document.querySelectorAll('#div-curriculum');
  const data = document.getElementById('data-inicio');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
    data.value = '';
  }
}

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', clearFields);

window.onload = function (){
  createStateOptions();
}