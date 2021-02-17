import React from 'react'
import styled from 'styled-components'

const StyledAlert = styled.div`
height: 30px;
width: 100%;

background-color: #696969;
color: white;

text-align: center;

border-radius: 20px;
`


interface Props {
    children: React.ReactNode
}

export const Alert = ({children}: Props) => {
    return (
        <StyledAlert>
            {children}
        </StyledAlert>
    )
}
