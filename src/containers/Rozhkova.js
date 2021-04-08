// import logo from '../logo.svg';

import React, { useState } from 'react';
import styled from 'styled-components';
import image from '../assets/3.jpg';

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
    <Rozhkova>
      <Image src={'https://sun9-75.userapi.com/impf/TVsuS2vjlO4npDxpBsnCJdYejbsbbb9nOFSzmA/YjnBvN5UJJo.jpg?size=1280x1280&quality=96&sign=afef7913392596772899a30d726ba7d4&type=album'} />
      
      <br />
          Рожкова Валерия Анатольевна<br />
      <br />
          Студентка 4 курса инженерно-технологического института<br />
      <br />
      <Rozhok > Направление подготовки: информационные системы и технологии</Rozhok>
      <Example />
    </Rozhkova>
  );
}

const Image = styled.img`
    height: 40vmin;
    pointer-events: none;
`;

const Rozhok = styled.div`
    text-align: center;
    color: rgb(112, 49, 65);
    font-family: Bookman Old Style, Helvetica, sans-serif;
    font-style: oblique;
`;

const Rozhkova = styled.div`
    background: url(${image}); 
    text-align: center;
    color: rgb(23, 105, 67);
    font-family: Bookman Old Style, Helvetica, sans-serif;
    font-style: oblique;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
`;



export default App;
