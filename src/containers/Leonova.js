// import logo from '../logo.svg';
import '../App.css';
import styled from 'styled-components';

function App() {
  return (
    <Leonova>
      <img src={'https://cdn.fishki.net/upload/post/2021/01/07/3540499/4-17.gif'} className="App-logo" alt="logo" />
      <LeonovaP>Леонова В.Д. ИСиТ-41</LeonovaP>
      <LeonovaI>Институт инженерно-технологический</LeonovaI>
      <LeonovaB>09.03.02 Информационные системы и технологии</LeonovaB>
      <div>
        <LeonovaT>4 курс</LeonovaT>
      </div>
    </Leonova>  
  );
}
const LeonovaI = styled.p`
  text-align: center;
  color: rgb(255, 127, 80);
  font-family: Arial, Helvetica, sans-serif;
  font-style: bold;
  font-weight: 550;
  display: inline;
`;

const LeonovaB = styled.p`
  text-align: center;
  font-family: Bahnschrift SemiBold, Helvetica, sans-serif;
  font-style: normal;
  color: rgb(144, 255, 0);
  text-indent: 2%;
  display: inline;
`;
    
const LeonovaT = styled.p`
  font-size: 12px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: oblique;
  color: rgb(0, 132, 255);
  font-weight: bold;
  display: inline
`;

const LeonovaP = styled.p`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  font-weight: 900;
  color: rgb(255, 229, 0);
  display: flex;
`;

const Leonova = styled.div`
  background: black;
  text-align: center;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;


export default App;
