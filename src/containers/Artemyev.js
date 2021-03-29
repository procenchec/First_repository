// import logo from '../logo.svg';
import '../App.css'
import React from 'react'
import styled from 'styled-components';





const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  background-color: rgb(77, 93, 182);
  text-align: center;
  color: rgb(206, 168, 65);
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
     <Image src={'https://lastfm.freetls.fastly.net/i/u/770x0/e8fc2fbe2e5911016960c3302554d8eb.gif'}/>

     Артемьев Б.О. Б-ИСиТ 41
  </AppContainer>
)



export default App;