// import logo from '../logo.svg';
import { useState } from 'react';
import styled from 'styled-components';
import '../App.css';

function App() {
  return (
    <OvsT>
      <OvsI src={'https://i.gifer.com/SZN1.gif'} />
    Овсепян АМ Быков ЕИ Б-ИСиТ 41

      <Clicker />
    </OvsT>)
}

const Clicker = () => {
  const [count, setCount] = useState(0);


  return <div>
    <p>Вы заказали {count} чудес </p>
      <button onClick={() => setCount(count + 1)}>
        Нажми чтобы заказать 
      </button>

      <button onClick={() => setCount(count - 1)}>
        Нажми чтобы отказаться 
      </button>
  </div>
}

export default App;

const OvsT = styled.div`
background-color: rgb(21, 150, 205);
text-align: center;
font-family: Arial, Helvetica, sans-serif;
font-style: italic;
font-weight: 900;
color: rgb(20, 19, 89);
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const OvsI = styled.img`
text-align: center; 
  text-indent: 5%;
  color:red;
  display: inline;
`;

