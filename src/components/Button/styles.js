import styled from 'styled-components'

export const ButtonContainer = styled.button`
    background: var(--${props => props.color ? props.color: '#bbb'});
    color: #FFF;
    font-weight: bold;
    border: 0;
    border-radius: var(--border-radius);
    padding: 0.5rem 1rem;
`