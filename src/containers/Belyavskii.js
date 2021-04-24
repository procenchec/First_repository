// import logo from '../logo.svg';
import '../App.css';
import React, {useState} from "react";
import  styled from "styled-components";

function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p> Счетчик Ошибок <dr>
                {count}</dr> </p>
            <button class="button" onClick={() => setCount(count - 1)}>
                Назад
            </button> &nbsp;

            <button class="button" onClick={() => setCount(count + 1)}>
                Вперед
            </button>
        </div>
    );
}
function App() {
  return (
    <Belyavskiiv>
        <img src={'https://pa1.narvii.com/7296/5d4fadefa8f988f3da8a8f8e61fb28881d10f4ecr1-540-303_hq.gif'} className="App-logo" alt="logo" />
            
        Белявский В.В. Б-ИСиТ 41
    <Example/>
    </Belyavskiiv>
  );
}
const Belyavskiiv = styled.div`
 background: linear-gradient(5deg, blueviolet, pink, white);
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-weight: 900;
    color: rgb(255, 102, 0);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default App;