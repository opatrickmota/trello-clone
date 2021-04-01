import styled from 'styled-components'

export const InputContainer = styled.input`
    color: var(--primary);
    font-weight: bold;
    border: 0;
    border-radius: var(--border-radius);
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    width: 100%;
    background: var(--${props => props.backgroundColor? props.backgroundColor: '#fff'});
    font-size: ${props => props.fontSize && props.fontSize};

    &:focus{
        background: #ffffff;
    }
`