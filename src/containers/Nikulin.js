// import logo from '../logo.svg';
import '../App.css';
import styled from "styled-components";

// function App() {
//     return (
//         <div className="Nikulin">
//             <img
//                 src={'https://steamuserimages-a.akamaihd.net/ugc/785232635610262393/78EC9906854B1C8C8EFBDC6DE0EE5DB073FCA35F/'}
//                 className="App-logo" alt="logo"/>
//             <img
//                 src={'https://media1.tenor.com/images/8ea91a8d7e4310051cbec63ae81be95a/tenor.gif?itemid=15029133'}
//                 className="App-logo" alt="logo"/>
//
//             Никулин ВВ Б-ИСиТ 41
//         </div>
//     );
// }

export default App;

function App() {
    return (
        <NiKulin>
            <iframe width="1280" height="720" src="https://www.youtube.com/embed/kIaqZh_gGz4" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
            <NikulIN>Никулин ВВ ИСиТ-41</NikulIN>
            <NIkulin >Факультет/институт, направление подготовки(специальность): Институт инженерно-технологический 09.03.02 Информационные системы и технологии</NIkulin>

            <div>
                <NIKulin>Курс, группа: 4 курс, </NIKulin>
                <Title>Б-ИСиТ 41</Title>
            </div>
        </NiKulin>
    );
}

const Title = styled.p`
  text-align: center; 
  text-indent: 5%;
  color:red;
  display: inline;
`;

const NIKulin = styled.p`
   text-align: center; 
   font-style: italic; 
   text-indent: 5%;
   display: inline;
`;

const NIkulin = styled.p`
   text-align: center; 
   font-style: italic; 
   text-indent: 5%;
   letter-spacing: 0.1px;
`;

const NikulIN = styled.p`
   margin-top: 40px;
   font-size: 20px;
   font-style: italic;
   font-weight: 800;
   width: 50vw;
`;

const NiKulin = styled.div`
    background-color: rgb(219, 251, 255);
    text-align: center;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
