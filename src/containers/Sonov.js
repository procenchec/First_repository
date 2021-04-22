import styled from 'styled-components';

function Sonov() {
  return (
    <GoldenKnights>
      <img src={'https://besthqwallpapers.com/Uploads/7-10-2017/23139/vegas-golden-knights-hockey-club-nhl-emblem-logo.jpg'} className="App-logo" />
      <GoldenKnights3>GoldenKnights АА ИСиТ-41</GoldenKnights3>
      <GoldenKnights2 >Факультет/институт, направление подготовки(специальность): Институт инженерно-технологический 09.03.02 Информационные системы и технологии</GoldenKnights2>

      <div>
        <GoldenKnights1>Курс, группа: 4 курс, </GoldenKnights1>
        <Title>Б-ИСиТ 41</Title>
      </div>
    </GoldenKnights>
  );
}


const Title = styled.p`
  text-align: center; 
  text-indent: 5%;
  color:#B8860B;
  display: inline;
`;

const GoldenKnights1 = styled.p`
   text-align: center; 
   font-style: italic; 
   text-indent: 5%;
   display: inline;
   color:#FFFFFF;
`;

const GoldenKnights2 = styled.p`
   text-align: center; 
   font-style: italic; 
   text-indent: 5%;
   letter-spacing: 0.1px;
   color:#DAA520;
`;

const GoldenKnights3 = styled.p`
   margin-top: 40px;
   font-size: 20px;
   font-style: italic;
   font-weight: 800;
   width: 50vw;
   color:#FFFFFF;
`;

const GoldenKnights = styled.div`
    background-color: #000000;
    text-align: center;
    height: 100%;
    width: 50vw;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


export default Sonov;