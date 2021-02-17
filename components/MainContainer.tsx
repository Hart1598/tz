import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar/Navbar'
import Container from './Container/Container'
import Main from './Main/Main'
import Flex from './Flex/Flex'
import Link from 'next/link'
import styled from 'styled-components'

const StyledA = styled.a`
font-size: 18px;
cursor: pointer;
color: #696969;

&:hover{
    color: #000;    
}
`

interface Props {
    title: string,
    children: React.ReactChild  
}

const MainContainer = (props:Props) => {
    return (
       <>
            <Head>
                <title>{props.title}</title>
            </Head>

            <Navbar>
                <Container>
                    <Flex align="center" justify="space-between">
                        <Link href="/">
                            <StyledA>Все посты</StyledA>
                        </Link>
                        <Link href="/posts/new">
                            <StyledA>Создать</StyledA>
                        </Link>
                    </Flex>
                </Container>
            </Navbar>
            
            <Main>
                <Container>
                    {props.children}
                </Container>
            </Main>    
       </>
    )
}

export default MainContainer

