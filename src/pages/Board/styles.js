import styled from 'styled-components'

export const BoardContainer = styled.div`
    margin: 2.5rem;

    @media(max-width: 750px){
        margin: 1rem;
    }
`

export const CardContainer = styled.div`
    margin-top: 3rem;

    display: flex;
    gap: 1rem;

    overflow-x: scroll;
    ::-webkit-scrollbar {
        width: 0;
    }
`

export const Card = styled.div`
    background: var(--light-blue);
    width: 350px;
    min-width: 300px;

    border-radius: var(--border-radius);
    padding: 1.5rem;

    @media(max-width: 420px){
        width: 95%;
    }
`

export const Span = styled.div`
    color: var(--primary);
    margin-top: 1rem;
    cursor: pointer;
`

export const AddTask = styled.div`
    width: 400px;

    @media(max-width: 420px){
        width: 95%;
    }

`

export const OpenEdit = styled.div`
    cursor: pointer;
    border: 0;
`
export const Task = styled.div`
    background: #fff;
    color: var(--primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    border-radius: var(--border-radius);
    margin-top: 0.8rem; 
`

export const EditTask = styled.div`
    background: var(--background);
    width: 550px;
    height: 550px;
    border-radius: var(--border-radius);
    padding: 1rem;

    @media(max-width: 600px){
        width: 95%;
        height: 95%;
    }
`