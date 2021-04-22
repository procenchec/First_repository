import {OBJModel} from 'react-3d-viewer'
import model from './TwoMonkey_AirLines.obj';
import model1 from './Снеговик.obj';
import styled from 'styled-components';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const a = (getRandomInt(2));
console.log(a)

const render = () => {
    if (a === 1) {
        return (
            <Container>
                <OBJModel src={model} rotation={{x: 0.5, y: -5, z: 0}} texPath="Two Monkey Airlines"/>
            </Container>

        )
    } else {
        return (
            <Container>
                <OBJModel src={model1} position={{x:0, y:-2, z:-8}} texPath="Snowman"/>
            </Container>
        )
    }
}

const Container = styled.div`
  background-color: #61dafb;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default render;