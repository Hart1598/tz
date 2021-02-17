import styled from 'styled-components'

const StyledMain = styled.div`
padding-top: 80px;
margin-bottom: 20px;
`

interface Props {
    children: React.ReactNode
}

const Main = (props:Props) => {
    return (
        <StyledMain {...props}/>
    )
}

export default Main
