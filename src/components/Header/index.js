import React from 'react'

import Menu from '../Menu'

import {
    HeaderContainer
} from './styles'

export default function Header(){
    return(
        <>
            <Menu/>
            <HeaderContainer>
                <h1>Trello</h1>
            </HeaderContainer>
        </>
    )
}