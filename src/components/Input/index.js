import React from 'react'

import {
    InputContainer
} from './styles'

function Input(props){

    return (
        <InputContainer 
            fontSize={props.fontSize} 
            value={props.value} 
            backgroundColor={props.backgroundColor} 
            placeholder={props.placeholder} 
            onChange={props.onChange} 
            onClick={props.click} >

        </InputContainer>
    )
}

export default Input
