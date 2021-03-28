import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import { FaBars, FaTimes } from 'react-icons/fa'

import {
    MenuContainer,
    Button,
    MenuContent
} from './styles'

export default function Menu(){
    const [isActive, setIsActive] = useState(false)

    function toggleMenu(){
        setIsActive(!isActive)
        console.log('entrou')
    }

    return(
        <MenuContainer isActive={isActive}>
            {isActive ?
                <MenuContent>
                    <header>
                        <Button onClick={toggleMenu}>
                            <FaTimes />
                        </Button>
                    </header>

                    <Link to="/boards">Meus Quadros</Link>
                    
                </MenuContent>
                :
                <Button onClick={toggleMenu}>
                    <FaBars />
                </Button>
            }
            
        </MenuContainer>
    )
}