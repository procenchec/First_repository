
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Example({ lab3 }) {
  const state = useState(0);
  const [count, setCount] = state;

  useEffect(() => {
    if (!lab3) {
      if (count === 10) {
        alert('10');
      }
    }

  }, [lab3,count]);

  return (
    <div>

      {count === 5 && <div>Ура, пять</div>}

      <p> {state[0]} </p>
      <button class="button" onClick={() => state[1](count - 1)}>
        -1
      </button> &nbsp;

      <button class="button" onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  background-color: rgb(205, 74, 76);
  text-align: center;
  color: rgb(0, 0, 0);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`
const Image = styled.img`
  height: 40vmin;
  pointer-events: none;
  
`
const App = ({ lab2, lab3 }) => {



  return (
    <AppContainer>
      <Image src={'https://i.imgur.com/Kxghvcb.gif'} />
     Финаев А.С. Б-ИСиТ 41
      {lab2 !== true && <Example lab3={lab3} />}
    </AppContainer>
  )
}

export default App;


