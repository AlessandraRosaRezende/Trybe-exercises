import React, { Component } from 'react'

const tarefas = ['Acordar crianças', 'Fazer café da manhã', 'Estudar', 'Fazer almoço', 'Assistir às aulas', 'Fazer os exercícios', 'Fazer o lanche', 'Colocar crianças na cama', 'Tentar dormir'];

class ArrayComp extends Component {
  render() {
    return (      
      <ul>
        { tarefas.map(compromisso => <li>{ compromisso }</li>) }        
      </ul>
    )
  }
}

export default ArrayComp;