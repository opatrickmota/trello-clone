import React, { useEffect, useState } from 'react'

import Header from '../../components/Header'
import ModalBackground from '../../components/ModalBackground'
import Title from '../../components/Title'
import Button from '../../components/Button'
import Input from '../../components/Input'
import BoardBox from '../../components/BoardBox'

import {
    BoardContainer,
    CreateBoard,
    Buttons,
    BoardList
} from './styles'

export default function Boards(){
    const [isOpen, setIsOpen] = useState(false)
    const [inputText, setInputText] = useState('')
    const [boards, setBoards] = useState([])

    useEffect(()=>{
        function loadBoards(){
            let savedBoard =  JSON.parse(localStorage.getItem('boards'))
            if(savedBoard)
                setBoards(savedBoard)
        }

        loadBoards()
    }, [])

    function openModal(){
        setIsOpen(!isOpen)
    }

    function addNewBoard(){
        openModal()
        let updateBoards = [...boards, inputText]
        setBoards(updateBoards)
        localStorage.setItem('boards', JSON.stringify(updateBoards))
    }

    return(
        <>
            <Header/>
            <BoardContainer>
                <Title text="Quadros Pessoais"/>
                <BoardBox open={openModal}>
                    Crie um novo quadro...
                </BoardBox>
                {
                    isOpen && 
                    <ModalBackground>
                        <CreateBoard>
                            <Input placeholder="Título do quadro" onChange={(e) => setInputText(e.target.value)} />
                            <Buttons>
                                <Button color="green" click={addNewBoard}>Criar Quadro</Button>
                                <Button color="red" click={openModal}>Cancelar</Button>
                            </Buttons> 
                        </CreateBoard>
                    </ModalBackground>
                }

                <BoardList>
                    {
                        boards.length > 0
                        ? boards.map((board, i) => {
                            return(
                                <BoardBox key={i}>
                                    {board}
                                </BoardBox>
                            )
                            
                        })
                        :
                        <Title fontSize="1rem" marginTop="2rem" text="Você ainda não tem nenhum quadro!"/>
                    }
                    
                </BoardList>
                

            </BoardContainer>
        </>
    )
}