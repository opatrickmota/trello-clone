import React from 'react'

import {
    TitleComponent
} from './styles'

export default function Title(props){
    return(
        <TitleComponent fontSize={props.fontSize} marginTop={props.marginTop}>
            {props.text}
        </TitleComponent>
    )
}