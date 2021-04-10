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
import Nikulin from "./containers/Nikulin";
import Korneev from "./containers/Korneev";
import Godonoga from "./containers/Godonoga";
import Mikalyuk from "./containers/Mikalyuk";
import List from "./containers/Common/List";
import UrlKamleva from "./containers/Kamleva/Url";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Lb7 from "./containers/Common/LB7";
import LB8 from "./containers/Common/LB8";
import styled from "styled-components";
import list from './constants/common';
import imgo from "./assets/Ovsepyan/img.jpg";


const Input = styled(Lb7)`
  font-family: Arial, Helvetica, sans-serif;
  font-style: bolder;
  color: rgb(255, 255, 255);
`;

const Header = styled.div`
background-image: url(${imgo});
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  font-weight: 900;
  color: rgb(255, 255, 255);
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  font-stretch: ultra-expanded;
  align-items: center;
`;


function App() {
    const [value, setValue] = useState();
    const [removedPeople, setRemovedPeople] = useState([{ name: 'Белявский' }]);

    
    const [students, setStudents] = useState(list);


    const handleClick = () => {
        const newPeople = [...removedPeople, { name: value }];
        setRemovedPeople(newPeople);
    }

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
                            <Input value={value} setValue={setValue} />
                            <LB8 handleClick={handleClick} />
                            <a href="https://protsenkoweb.herokuapp.com/">https://protsenkoweb.herokuapp.com/</a>
                        </Header>

                        <List list={students} removedPeople={removedPeople} />

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
