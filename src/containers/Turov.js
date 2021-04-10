import '../App.css';
import styled from 'styled-components';

function App() {
  return (
    <Turov>
      <img src={'https://ds05.infourok.ru/uploads/ex/0d3c/000f8a13-9f966f0a/hello_html_66207a58.png'} className="App-logo" alt="logo" />
      <TurovF>Туров СВ Б-ИСиТ41</TurovF>
      <TurovI>Институт инженерно-технологический</TurovI>
      <TurovG>"09.03.02 Информационные системы и технологии"</TurovG>
      <div>
        <TurovT>4 крус</TurovT>
      </div>
    </Turov>    
  );
}
const TurovI = styled.p`
  text-align: center;
  color: rgb(255, 127, 80);
  font-family: Arial, Helvetica, sans-serif;
  font-style: bold;
  font-weight: 550;
  display: inline;
`;

const TurovG = styled.p`
  text-align: center;
  font-family: Bahnschrift SemiBold, Helvetica, sans-serif;
  font-style: normal;
  color: rgb(165, 42, 42);
  text-indent: 2%;
  display: inline;
`;
    
const TurovT = styled.p`
  font-size: 12px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: oblique;
  color: rgb(220, 20, 60);
  font-weight: bold;
  display: inline
`;

const TurovF = styled.p`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  font-weight: 900;
  color: rgb(255, 102, 0);
  display: flex;
`;

const Turov = styled.div`
  background: linear-gradient(45deg, #c0fafa, #fdb9ce);
  text-align: center;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

export default App;




   
    








    