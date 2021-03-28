import React from 'react'

import {
    Buttons
} from './styles'

function ButtonsContainer(props){
    return (
        <Buttons>
            {props.children}
        </Buttons>
    )
}

export default ButtonsContainer
