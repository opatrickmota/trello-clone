import styled from 'styled-components'

export const TitleComponent = styled.div`
    color: var(--primary);
    font-size: ${props => props.fontSize ? props.fontSize : '1.5rem'};
    font-weight: bold;
    margin-top: ${props => props.marginTop ? props.marginTop : ''};
`