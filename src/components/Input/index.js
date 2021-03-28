import React from 'react'

import {
    InputContainer
} from './styles'

function Input(props){

    return (
        <InputContainer placeholder={props.placeholder} onChange={props.onChange} >

        </InputContainer>
    )
}

export default Input
