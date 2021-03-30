import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';
import {FaExternalLinkAlt, FaEdit} from 'react-icons/fa'

import ModalBackground from '../../components/ModalBackground'
import Header from '../../components/Header'
import ButtonsContainer from '../../components/SideBySide';
import Button from '../../components/Button'
import Title from '../../components/Title';
import Input from '../../components/Input';
import SideBySide from '../../components/SideBySide';

import {
    BoardContainer,
    CardContainer,
    Card,
    Span,
    AddTask,
    Edit,
    Task
} from './styles'

export default function Board(props){
    const [board, setBoard] = useState('')
    const [toggleTask, setToggleTask] = useState()
    const [inputText, setInputText] = useState('')
    const [tasks, setTasks] = useState([])
    
    const history = useHistory()

    useEffect(()=>{
        function loadBoards(){
            let savedBoard =  JSON.parse(localStorage.getItem('boards'))
            if(savedBoard)
                setBoard(savedBoard[props.match.params.id])
        }

        function loadTasks(){
            let savedTasks =  JSON.parse(localStorage.getItem('tasks'))
            if(savedTasks)
                setTasks(savedTasks)
        }

        loadBoards()
        loadTasks()
    }, [props.match.params.id, board])

    function deleteBoard(){
        let id = props.match.params.id
        let savedBoard =  JSON.parse(localStorage.getItem('boards'))
        savedBoard.splice(id, 1)

        localStorage.setItem('boards', JSON.stringify(savedBoard))
        history.push("/")
    }

    function addTask(id){
        setToggleTask(id)
    }

    function salvar(i){
        addTask()
        let updateTasks = [...tasks, [props.match.params.id, i, inputText]]
        setTasks(updateTasks)

        localStorage.setItem('tasks', JSON.stringify(updateTasks))
    }

    return(
        <>
            <Header/>
            <BoardContainer>
                <ButtonsContainer>
                    <Button color="primary">{board}</Button>
                    <Button color="red" click={deleteBoard}>Deletar Quadro</Button>
                </ButtonsContainer>

                <CardContainer>
                    <Card>
                        <Title text="Todo"/>
                        {
                            tasks && 
                            tasks.map((task, i) => {
                                if(props.match.params.id == task[0] && task[1] == 0)
                                    return(
                                        <Task key={i}>
                                            {task[2]}
                                            <FaEdit/>
                                        </Task>
                                    )
                                return false
                            })
                            
                        }
                        {
                            toggleTask == 0 &&
                            <ModalBackground>
                                <AddTask>
                                    <SideBySide>
                                        <Input placeholder="Adicione um título" onChange={(e) => setInputText(e.target.value)} />
                                        <Edit><FaExternalLinkAlt/> Abrir Tarefa</Edit>
                                    </SideBySide>
                                    <SideBySide>
                                        <Button color="green" click={()=>salvar(0)}>Salvar</Button>
                                        <Button color="red" click={()=>addTask(3)}>Cancelar</Button> 
                                    </SideBySide>
                                    
                                </AddTask> 
                            </ModalBackground>
                            
                        }

                        <Span onClick={()=>addTask(0)}>+ Adicionar um cartão</Span>
                    </Card>
                    <Card>
                        <Title text="Doing"/>
                        {
                            tasks && 
                            tasks.map((task, i) => {
                                if(props.match.params.id == task[0] && task[1] == 1)
                                    return(
                                        <Task key={i}>
                                            {task[2]}
                                            <FaEdit/>
                                        </Task>
                                    )
                                return false
                            })
                            
                        }
                        {
                            toggleTask == 1 &&
                            <ModalBackground>
                                <AddTask>
                                    <SideBySide>
                                        <Input placeholder="Adicione um título" onChange={(e) => setInputText(e.target.value)} />
                                        <Edit><FaExternalLinkAlt/> Abrir Tarefa</Edit>
                                    </SideBySide>
                                    <SideBySide>
                                        <Button color="green" click={()=>salvar(1)}>Salvar</Button>
                                        <Button color="red" click={()=>addTask(3)}>Cancelar</Button> 
                                    </SideBySide>
                                    
                                </AddTask> 
                            </ModalBackground>
                            
                        }

                        <Span onClick={()=>addTask(1)}>+ Adicionar um cartão</Span>
                    </Card>
                    <Card>
                        <Title text="Done"/>
                        {
                            tasks && 
                            tasks.map((task, i) => {
                                if(props.match.params.id == task[0] && task[1] == 2)
                                    return(
                                        <Task key={i}>
                                            {task[2]}
                                            <FaEdit/>
                                        </Task>
                                    )
                                return false
                            })
                            
                        }
                        {
                            toggleTask == 2 &&
                            <ModalBackground>
                                <AddTask>
                                    <SideBySide>
                                        <Input placeholder="Adicione um título" onChange={(e) => setInputText(e.target.value)} />
                                        <Edit><FaExternalLinkAlt/> Abrir Tarefa</Edit>
                                    </SideBySide>
                                    <SideBySide>
                                        <Button color="green" click={()=>salvar(2)}>Salvar</Button>
                                        <Button color="red" click={()=>addTask(3)}>Cancelar</Button> 
                                    </SideBySide>
                                    
                                </AddTask> 
                            </ModalBackground>
                            
                        }

                        <Span onClick={()=>addTask(2)}>+ Adicionar um cartão</Span>
                    </Card>
                </CardContainer>
                
            </BoardContainer>
        </>
    )
}