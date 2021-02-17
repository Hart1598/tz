import styled, {keyframes} from 'styled-components'

const Scrolling = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`

const StyledLoader = styled.div`
padding-top: 15%;
margin: 0 50%;

display: inline-block;
width: 500px;
height: 500px;

&::after{
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid black;
    border-color: black transparent black transparent;
    animation: ${Scrolling} 1.2s linear infinite;
}

`


const Loader = () => {
    return (
        <StyledLoader />
    )
}

export default Loader
