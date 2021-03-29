import './App.css';
import Sheglova from './containers/Sheglova'
import Procenko from './containers/Protsenko'
import Artemyev from './containers/Artemyev'
import Lobanov from './containers/Lobanov'
import Rozhkova from './containers/Rozhkova'
import Turov from './containers/Turov'
import Mironov from './containers/Mironov'
import Korneev from './containers/Korneev'
import List from './containers/Common/List'
import Nikulin from "./containers/Nikulin";
import Godonoga from "./containers/Godonoga";
import Mikalyuk from "./containers/Mikalyuk";
import Leonova from "./containers/Leonova";
import Sadullaev from "./containers/Sadullaev";
import BykovOvsepyan from "./containers/BykovOvsepyan";
import UrlKamleva from "./containers/Kamleva/Url";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UrlKamleva />
        <Switch>
          <Route path="/Проценко">
            <Procenko />
          </Route>
          <Route path="/Артемьев">
            <Artemyev />
          </Route>
          <Route path="/Корнеев">
            <Korneev />
          </Route>
          <Route path="/Лобанов">
            <Lobanov />
          </Route>
          <Route path="/Щеглова">
            <Sheglova />
          </Route>

          <Route path="/">
            <List />
            <Lobanov>

            </Lobanov>
            <Rozhkova>
            </Rozhkova>

            <Turov>

            </Turov>
            <Korneev>

            </Korneev>
            <Mironov>

            </Mironov>
            <Mikalyuk>

            </Mikalyuk>
            <Nikulin>

            </Nikulin>
            <Godonoga>

            </Godonoga>
            <Leonova>
            </Leonova>
            <Sadullaev>
            </Sadullaev>
            <BykovOvsepyan>

            </BykovOvsepyan>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
