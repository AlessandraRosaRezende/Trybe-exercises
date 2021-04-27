import logo from './logo.svg';
import './App.css';
import ArrayComp from './components/Array.js'

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        {task(100)}        
        <ArrayComp />
      </header>
    </div>
  );
}

export default App;
