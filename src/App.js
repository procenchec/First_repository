// import logo from './logo.svg';
import './App.css';
import Rozhkova from './containers/Rozhkova'
import Kamleva from './containers/Kamleva'
import Turov from './containers/Turov'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <Rozhkova>
        
      </Rozhkova>
      <Kamleva>
        
      </Kamleva>
      <Turov>
        
      </Turov>
    </div>
  );
}

export default App;
