import styled from 'styled-components'

const StyledFlex = styled.div`
height: 100%;
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
margin: ${({margin}) => margin || '0'};
`


interface FlexProp{
    direction?: string;
    align?: string; 
    justify?: string;
    margin?:string,
    children: React.ReactNode
}


const Flex = (props:FlexProp) => {
    return <StyledFlex {...props}/>
}

export default Flex