import logo from './logo.svg';
import './App.css';
import Logo from './findPhone/Logo';
import Findphone from './findPhone/Findphone';
import Input from './findPhone/Input';
import Results from './findPhone/Results';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

          <Logo/>
          <Findphone/>
          <Input/>
          <Results/>
        


        
      </header>
    </div>
  );
}

export default App;
