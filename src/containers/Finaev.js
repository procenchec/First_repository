
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Example() {
  const state = useState(0);
  const [count, setCount] = state;

  useEffect(() => {
    if (count === 10) {
      alert('10');
    }
  }, [count]);

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
const App = () => (
  <AppContainer>
    <Image src={'https://i.imgur.com/Kxghvcb.gif'} />
     Финаев А.С. Б-ИСиТ 41
    <Example />
  </AppContainer>
)

export default App;


