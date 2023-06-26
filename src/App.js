import logo from './logo.svg';
import './App.css';
import { MiPrimerComponente } from "./componentes/MiPrimerComponente"
import { MiSegundoComponente } from './componentes/MiSegundoComponente.';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi primer proyecto con REACT
        </p>
        
        <MiPrimerComponente />
        
        <hr/>
        <MiSegundoComponente />
        

      </header>
    </div>
  );
}

export default App;
