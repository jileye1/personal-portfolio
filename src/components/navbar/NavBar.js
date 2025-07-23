import * as React from 'react'
import { LinkText } from '../LinkText'
import { NavBarStyled } from './NavBar.styles'
import icon from '../../images/icon.png'


const NavBar = ({ title }) => {
    return (
        <NavBarStyled>
            <div className='header-content'>
            <div className='logo-container'>
                <img src={icon} alt='matcha icon'/>
                <div className='title'>
                    <span>josie.dev</span>
                </div>
            </div>
            <div className='menu-container'>
                <nav>
                    <ul>
                        <li>
                            <LinkText to='/'>
                                about
                            </LinkText>
                        </li>
                        <li>
                            <LinkText to='/projects'>
                                projects
                            </LinkText>
                        </li>
                        <li>
                            <LinkText to='/now'>
                                now
                            </LinkText>
                        </li>
                    </ul>                    
                </nav>
            </div>
            </div>
        </NavBarStyled>
    )
}

export default NavBar