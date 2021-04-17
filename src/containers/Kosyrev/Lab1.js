import styled from "styled-components";

const AppContainer = styled.div`
background-color:rgb(255, 102, 0);
text-align: center;s
color:rgb(77, 170, 182);
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Image = styled.img`
  height: 40vmin;
  pointer-events: none
`;

const App = () => (
    <AppContainer>
        <Image src={'https://i.gifer.com/2GU.gif'} />
        Коcырев М.А. Б-ИСиТ 41
    </AppContainer>
)

export default App;