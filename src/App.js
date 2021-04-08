import './App.css';
import Sheglova from './containers/Sheglova'
import Procenko from './containers/Protsenko'
import Artemyev from './containers/Artemyev'
import Belyavskii from './containers/Belyavskii'
import Lobanov from './containers/Lobanov'
import Rozhkova from './containers/Rozhkova'
import Kamleva from './containers/Kamleva'
import Turov from './containers/Turov'
import Mironov from './containers/Mironov'
import Nikulin from "./containers/Nikulin";
import Korneev from "./containers/Korneev";
import Godonoga from "./containers/Godonoga";
import Mikalyuk from "./containers/Mikalyuk";
import List from './containers/Common/List';
import UrlKamleva from './containers/Kamleva/Url';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <UrlKamleva />
                <Switch>
                    <Route path="/Камлёва">
                        <Kamleva />
                    </Route>
                    <Route path="/Проценко">
                        <Procenko />
                    </Route>
                    <Route path="/Артемьев">
                        <Artemyev />
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

                        <Belyavskii>
                        </Belyavskii>

                        <Nikulin>

                        </Nikulin>
                        <Godonoga>
                        </Godonoga>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
