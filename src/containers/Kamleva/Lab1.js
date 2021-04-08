
import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Kaml>
        <img src={'https://99px.ru/sstorage/86/2015/07/image_861007151003132215733.gif'} className="App-logo" alt="logo" />
            
        Камлёва Н.С. Б-ИСиТ-41

    </Kaml>
  );
}

const Kaml = styled.div`
  background-color: rgb(226, 243, 74);
  text-align: center;
  color: rgb(221, 44, 44);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


export default App;