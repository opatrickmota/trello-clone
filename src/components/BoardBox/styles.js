import styled from 'styled-components'

export const BoardContainer = styled.button`
    background: var(--background);
    color: var(--primary);
    font-size: 1rem;

    width: 16rem;
    height: 8rem;
    margin-top: 1.5rem;
    border: 0;
    border-radius: var(--border-radius);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.5s;

    &:hover{
        filter: brightness(0.9);
    }
    
    @media(max-width: 700px){
        margin: 0.5rem auto;
    }

    @media(max-width: 500px){
        width: 100%;
    }
`