// import logo from '../logo.svg';
import React, { useState } from 'react';
import styled from 'styled-components';
import image from '../assets/Sadullaev/9.jpg';


function App() {
  return (
        <Sadullaev>
        <Image src={'https://i.gifer.com/fxkD.gif'} />
        
        <br />
            Садуллаев Амирбек Улугбекович<br />
        <br />
            Студент 4 курса инженерно-технологического института<br />
        <br />
        <Sad> Направление подготовки: информационные системы и технологии</Sad>
      </Sadullaev>
  );
}
const Image = styled.img`
height: 40vmin;
pointer-events: none;
`;

const Sad = styled.div`
text-align: center;
color: #00FF00;
font-family: Bookman Old Style, Helvetica, sans-serif;
font-style: oblique;
`;

const Sadullaev = styled.div`
background: url(${image});
text-align: center;
color: #FF0000;
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