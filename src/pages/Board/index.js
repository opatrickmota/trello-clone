import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';

import Header from '../../components/Header'
import ButtonsContainer from '../../components/ButtonsContainer';
import Button from '../../components/Button'

import {
    BoardContainer,
} from './styles'

export default function Board(props){
    const [board, setBoard] = useState('')
    
    const history = useHistory()

    useEffect(()=>{
        function loadBoards(){
            let savedBoard =  JSON.parse(localStorage.getItem('boards'))
            if(savedBoard)
                setBoard(savedBoard[props.match.params.id])
        }

        loadBoards()
    }, [props.match.params.id, board])

    function deleteBoard(){
        let id = props.match.params.id
        let savedBoard =  JSON.parse(localStorage.getItem('boards'))
        savedBoard.splice(id, 1)

        localStorage.setItem('boards', JSON.stringify(savedBoard))
        history.push("/")
    }

    return(
        <>
            <Header/>
            <BoardContainer>
                <ButtonsContainer>
                    <Button color="primary">{board}</Button>
                    <Button color="red" click={deleteBoard}>Deletar Quadro</Button>
                </ButtonsContainer>
            </BoardContainer>
        </>
    )
}