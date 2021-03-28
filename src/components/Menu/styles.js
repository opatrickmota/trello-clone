import styled from 'styled-components'

export const MenuContainer = styled.div`
    position: absolute;
    left: 0;

    height: 100%;
    color: var(--light-blue);
    padding-left: ${props => props.isActive ? '': '1rem'};
    padding-top: ${props => props.isActive ? '': '0.7rem'};
`

export const MenuContent = styled.div`
    color: var(--primary);
    background: var(--light-blue);

    width: 300px;
    height: 100%;

    padding: 1rem;

    header{
        text-align: right;
        margin-bottom: 2rem;
    }

    a{
        color: var(--primary);
        font-size: 1.5rem;
    }
`

export const Button = styled.div`
    cursor: pointer;
`