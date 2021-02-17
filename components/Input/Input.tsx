import React from 'react'
import styled from 'styled-components'


const StyledBlock = styled.div`

position: relative;

`

const StyledInput = styled.input`
font-size: 18px;
padding: 10px;
margin: 10px;

margin-left: 100px;
background: #eaeaea;
border: none;
border-radius: 3px;
::placeholder {
    color: #696969;
}
`

const StyledLabel = styled.label`
position: absolute;
top: 50%;
margin-top: -0.625em;
font-size: 18px;
`

interface Props {
    type?: string,
    placeholder: string,
    label: string,
    onChange: React.EventHandler<any>,
}

const Input = ({type = 'text', placeholder = '', label, onChange}: Props) => {
    return (
        <StyledBlock>
            <StyledLabel htmlFor={label}>{label}:</StyledLabel>
            <StyledInput onChange={onChange} type={type} placeholder={placeholder} id={label}/>
        </StyledBlock>  
    )
}

export default Input
