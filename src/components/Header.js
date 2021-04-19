import LB8 from "../containers/Common/LB8";
import styled from "styled-components";
import imgo from "../assets/Ovsepyan/img.jpg";
import Lb7 from "../containers/Common/LB7";


export default ({removedaPeople, SetRemovedPeople, SetValue, value}) => {
    const handleClick = () => {
        const newPeople = [...removedaPeople, {name: value}];
        SetRemovedPeople(newPeople);
    }
    return <Header>
       <Container>
           <Input value={value} setValue={SetValue}/>
           <LB8 handleClick={handleClick}/>
       </Container>
        <a href="https://protsenkoweb.herokuapp.com/">GO TO WEB</a>
    </Header>
}

const Container = styled.div`
  width: 100%;
  button {
    margin-left: 10px;
    color: black ;
    font-style: normal;
    background-color: gold;
  }
`;

const Header = styled.div`
  font-size: 230%;
  color: white;
  a {
    color: white;
  }

  background-image: url(${imgo});
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  font-stretch: ultra-expanded;
  align-items: center;
`;

const Input = styled(Lb7)`
  width: 15%;

  > div {
    ::after {
      border-bottom: 2px solid white !important;
    }

    ::before {
      border-bottom: 1px solid white !important;
    }
  }
`;

