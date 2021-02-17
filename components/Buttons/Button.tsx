import React from 'react';
import styled, {css, keyframes} from 'styled-components'

const backgroundAnim = keyframes`
0% {
    background-color: white;
}
100% {
    background-color: #acaaaa;
    color: white;
}
`

const StyledButton = styled.button.attrs(props => ({
    outlined: true,
}))`
border: none;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;   
padding: 10px 15px;
font-size: 18px;
cursor: pointer;
&:focus {
    outline: none;
}

&:hover{
    animation: ${backgroundAnim} 1s linear 1s infinite alternate;
}


align-self: ${props => props.align || 'stretch'};
${props => props.primary && css`
    color: ${props => props.color || 'white'};
    background: ${props => props.background || 'white'};
`}
${props => props.outlined && css`
    color: ${props => props.color || 'white'};
    border: 1px solid ${props => props.border || "white"};

    border-radius: 20px;
    background: transparent;
`}
`

interface ButtonProps{
    color?: string;
    background?: string,
    border?: string,
    outlined?: boolean,
    primary?: boolean,
    align?: string,
    type?: string,
    children: React.ReactNode
}



const Button = (props:ButtonProps) => {
    return <StyledButton {...props}/>
};

export default Button;