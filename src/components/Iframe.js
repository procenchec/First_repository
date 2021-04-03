import styled from 'styled-components';
export default function Iframecomponent({src}) {
    return <Iframe src={src} height = "100%" />
}
const Iframe = styled.iframe`
 width: 50vw 

`