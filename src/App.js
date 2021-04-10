import "./App.css";
import Sheglova from "./containers/Sheglova";
import Procenko from "./containers/Protsenko";
import Artemyev from "./containers/Artemyev";
import Belyavskii from "./containers/Belyavskii";
import Lobanov from "./containers/Lobanov";
import Rozhkova from "./containers/Rozhkova";
import Kamleva from "./containers/Kamleva";
import Turov from "./containers/Turov";
import Mironov from "./containers/Mironov";
import Nikulin from "./containers/Nikulin";
import Korneev from "./containers/Korneev";
import Godonoga from "./containers/Godonoga";
import Mikalyuk from "./containers/Mikalyuk";
import List from "./containers/Common/List";
import UrlKamleva from "./containers/Kamleva/Url";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Lb7 from "./containers/Common/LB7";
import styled from "styled-components";

const Input = styled(Lb7)`
  
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  font-weight: 900;
`;

const Header = styled.div`
    background-color: rgb(21, 150, 205);
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  font-weight: 900;
  color: rgb(20, 19, 89);
  min-height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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
            <Header>
              <Input />
              <a href="https://protsenkoweb.herokuapp.com/">
                https://protsenkoweb.herokuapp.com/
              </a>
            </Header>

            <List />

            <Lobanov></Lobanov>
            <Rozhkova></Rozhkova>

            <Turov></Turov>
            <Korneev></Korneev>
            <Mironov></Mironov>
            <Mikalyuk></Mikalyuk>

            <Belyavskii></Belyavskii>

            <Nikulin></Nikulin>
            <Godonoga></Godonoga>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
