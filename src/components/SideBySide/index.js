import React from 'react'

import {
    Side
} from './styles'

function SideBySide(props){
    return (
        <Side>
            {props.children}
        </Side>
    )
}

export default SideBySide
