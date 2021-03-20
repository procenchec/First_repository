// import logo from './logo.svg';
import './App.css';
import Sheglova from './containers/Sheglova'
import Lobanov from './containers/Lobanov'
import Rozhkova from './containers/Rozhkova'
import Kamleva from './containers/Kamleva'
import Turov from './containers/Turov'
import Mironov from './containers/Mironov'
import List from './containers/Common/List'
import Nikulin from "./containers/Nikulin";
import Korneev from "./containers/Korneev"

function App() {
  return (
    <div className="App">
      <List />
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
      <Sheglova>

      </Sheglova>
      <Lobanov>
        
      </Lobanov>
      <Rozhkova>
        
      </Rozhkova>
      <Kamleva>
        
      </Kamleva>
      <Turov>
        
      </Turov>

      <Korneev>
      </Korneev>

      <Mironov>

      </Mironov>
      <Nikulin>

      </Nikulin>
    </div>

  );
}

export default App;
