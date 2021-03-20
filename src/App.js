// import logo from './logo.svg';
import './App.css';
import Sheglova from './containers/Sheglova'
import Procenko from './containers/Protsenko'
import Artemyev from './containers/Artemyev'
import Lobanov from './containers/Lobanov'
import Rozhkova from './containers/Rozhkova'
import Kamleva from './containers/Kamleva'
import Turov from './containers/Turov'
import Mironov from './containers/Mironov'
import List from './containers/Common/List'
import Nikulin from "./containers/Nikulin";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/Камлёва">
            <Kamleva />
          </Route>
          <Route path="/Проценко">
            <Procenko/>
          </Route>
          <Route path="/Артемьев">
            <Artemyev />
          </Route>
          <Route path="/">
            <List />
            <Sheglova>

            </Sheglova>
                    
            <Lobanov>

            </Lobanov>
            <Rozhkova>
            </Rozhkova>
           
            <Turov>

            </Turov>
            <Mironov>

            </Mironov>
            <Nikulin>

            </Nikulin>
          </Route>
        </Switch>

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

      </div>
    </BrowserRouter>
  );
}

export default App;
