import "./App.css";
import { useState } from "react";
import Sheglova from "./containers/Sheglova";
import Procenko from "./containers/Protsenko";
import Artemyev from "./containers/Artemyev";
import Belyavskii from "./containers/Belyavskii";
import Lobanov from "./containers/Lobanov";
import Rozhkova from "./containers/Rozhkova";
import Kamleva from "./containers/Kamleva";
import Turov from "./containers/Turov";
import Mironov from "./containers/Mironov";
import Finaev from "./containers/Finaev";
import Nikulin from "./containers/Nikulin";
import Korneev from "./containers/Korneev";
import Godonoga from "./containers/Godonoga";
import Mikalyuk from "./containers/Mikalyuk";
import List from "./containers/Common/List";
import UrlKamleva from "./containers/Kamleva/Url";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LB8 from "./containers/Common/LB8";
import styled from "styled-components";
import list from './constants/common';
import imgo from "./assets/Ovsepyan/img.jpg";
import Header from "./components/Header";


function App() {
    const [value, setValue] = useState();
    const [removedPeople, setRemovedPeople] = useState([{ name: 'Белявский' }]);

    
    const [students, setStudents] = useState(list);

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
                        <Header removedaPeople={removedPeople} SetRemovedPeople={setRemovedPeople} SetValue={setValue} value={value}/>

                        <List list={students} removedPeople={removedPeople}/>

                        <Lobanov></Lobanov>
                        <Rozhkova></Rozhkova>

                        <Turov></Turov>
                        <Korneev></Korneev>
                        <Mironov></Mironov>
                        <Mikalyuk></Mikalyuk>

                        <Belyavskii></Belyavskii>

                        <Nikulin></Nikulin>
                        <Finaev></Finaev>
                        <Godonoga></Godonoga>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
