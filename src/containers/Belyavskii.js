// import logo from '../logo.svg';
import '../App.css';
import React, {useState} from "react";

function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p> {count} </p>
            <button class="buttonR" onClick={() => setCount(count - 1)}>
                Назад
            </button> &nbsp;

            <button class="buttonR" onClick={() => setCount(count + 1)}>
                Вперед
            </button>
        </div>

    );
}

function App() {
  return (
    <div className="Belyavskii">
        <img src={'https://pa1.narvii.com/7296/5d4fadefa8f988f3da8a8f8e61fb28881d10f4ecr1-540-303_hq.gif'} className="App-logo" alt="logo" />
            
        Белявский В.В. Б-ИСиТ 41

    </div>
  );
}

export default App;