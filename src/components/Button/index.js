import React from 'react'

import {
    ButtonContainer
} from './styles'

function Button(props){

    return (
        <ButtonContainer type={props.type} color={props.color} onClick={props.click}>
            {props.children}
        </ButtonContainer>
    )
}

export default Button
