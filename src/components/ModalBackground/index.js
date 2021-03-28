import React from 'react'

import {
    ModalContainer
} from './styles'

function ModalBackground(props){

    return (
        <ModalContainer>
            {props.children}
        </ModalContainer>
    )
}

export default ModalBackground
