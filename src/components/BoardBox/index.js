import React from 'react'

import {
    BoardContainer
} from './styles'

function BoardBox(props){

    return (
        <BoardContainer onClick={props.open}>
            {props.children}
        </BoardContainer>
    )
}

export default BoardBox
