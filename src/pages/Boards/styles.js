import styled from 'styled-components'

export const BoardContainer = styled.div`
    margin: 2.5rem;

    @media(max-width: 750px){
        margin: 1rem;
    }
`

export const CreateBoard = styled.div`
    width: 350px;

    @media(max-width: 370px){
        width: 300px;
    }
    @media(max-width: 370px){
        width: auto;
    }
`

export const BoardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
`