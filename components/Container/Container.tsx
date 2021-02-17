import styled from 'styled-components'

const StyledContainer = styled.div`
width: 1180px;
height: 100%;
margin: 0 auto;

font-weight: 400;
font-size: 1rem;

font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
@media (max-width: 1200px) {
    width: 900px;
}

@media (max-width: 950px) {
    width: 700px;
  }
`

interface Props {
    children: React.ReactNode
}

const Container = (props:Props) => {
    return (
        <StyledContainer {...props}/>
    )
}

export default Container
