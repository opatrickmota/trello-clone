import React, { useEffect, useState } from 'react'

import {useHistory} from 'react-router-dom';

import Header from '../../components/Header'
import ModalBackground from '../../components/ModalBackground'
import Title from '../../components/Title'
import Button from '../../components/Button'
import Input from '../../components/Input'
import BoardBox from '../../components/BoardBox'
import SideBySide from '../../components/SideBySide';

import {
    BoardContainer,
    CreateBoard,
    BoardList
} from './styles'

export default function Boards(){
    const [isOpen, setIsOpen] = useState(false)
    const [inputText, setInputText] = useState('')
    const [boards, setBoards] = useState([])

    const history = useHistory()

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

    function specificBoard(id){
        history.push(`/board/${id}`)
    }

    return(
        <>
            <Header/>
            <BoardContainer>
                <Title text="Quadros Pessoais"/>
                <BoardBox click={openModal}>
                    Crie um novo quadro...
                </BoardBox>
                {
                    isOpen && 
                    <ModalBackground>
                        <CreateBoard>
                            <Input placeholder="Título do quadro" onChange={(e) => setInputText(e.target.value)} />
                            <SideBySide>
                                <Button color="green" click={addNewBoard}>Criar Quadro</Button>
                                <Button color="red" click={openModal}>Cancelar</Button>
                            </SideBySide> 
                        </CreateBoard>
                    </ModalBackground>
                }

                <BoardList>
                    {
                        boards.length > 0
                        ? boards.map((board, i) => {
                            return(
                                <BoardBox click={()=>specificBoard(i)} key={i}>
                                    {board}
                                </BoardBox>
                            )
                            
                        })
                        :
                        <Title fontSize="1rem" marginTop="2rem" text="Você não tem quadros!"/>
                    }
                    
                </BoardList>
                

            </BoardContainer>
        </>
    )
}