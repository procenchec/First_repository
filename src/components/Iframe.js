import styled from 'styled-components';

export default function Iframecomponent({ src, Lab }) {
    return <Dfg>
        {Lab && <Lab />}
        <Iframe src={src} height="100%" />
    </Dfg>
}

const Dfg = styled.div`
width: 50vw;
height: 100%;
`;

const Iframe = styled.iframe`
    width: 100%;
`;