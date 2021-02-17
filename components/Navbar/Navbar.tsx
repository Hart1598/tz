import styled from 'styled-components'

const StyledNavbar = styled.div`
position: fixed;
width: 100vw;
height: 80px;
border-bottom: 1px solid #eaeaea;
background-color: white;
`

interface Props {
    children: React.ReactNode
}


const Navbar = (props:Props) => {
    return <StyledNavbar {...props}/>
}

export default Navbar
