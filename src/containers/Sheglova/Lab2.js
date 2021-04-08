import styled from 'styled-components';

function App() {
  return (
    <Sheglova>
      <img src={'https://drasler.ru/wp-content/uploads/2019/05/%D0%9E%D0%B1%D0%BE%D0%B8-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D1%81%D1%82%D0%BE%D0%BB-%D1%81-%D0%B1%D0%BE%D0%B6%D1%8C%D0%B8%D0%BC%D0%B8-%D0%BA%D0%BE%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%D0%BC%D0%B8-12.jpg'} className="App-logo" alt="logo" />
      <SheglovaP>Щеглова АА ИСиТ-41</SheglovaP>
      <SheglovaS >Факультет/институт, направление подготовки(специальность): Институт инженерно-технологический 09.03.02 Информационные системы и технологии</SheglovaS>

      <div>
        <SheglovaM>Курс, группа: 4 курс, </SheglovaM>
        <Title>Б-ИСиТ 41</Title>
      </div>
    </Sheglova>
  );
}
const Title = styled.p`
  text-align: center; 
  text-indent: 5%;
  color:red;
  display: inline;
`;

const SheglovaM = styled.p`
   text-align: center; 
   font-style: italic; 
   text-indent: 5%;
   display: inline;
`;

const SheglovaS = styled.p`
   text-align: center; 
   font-style: italic; 
   text-indent: 5%;
   letter-spacing: 0.1px;
`;

const SheglovaP = styled.p`
   margin-top: 40px;
   font-size: 20px;
   font-style: italic;
   font-weight: 800;
`;

const Sheglova = styled.div`
    background-color: rgb(219, 251, 255);
    text-align: center;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


export default App;