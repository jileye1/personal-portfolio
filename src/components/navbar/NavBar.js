import * as React from 'react'
import { Link } from 'gatsby'
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
                            <Link to='/'>
                                about
                            </Link>
                        </li>
                        <li>
                            <Link to='/projects'>
                                projects
                            </Link>
                        </li>
                        <li>
                            <Link to='/now'>
                                now
                            </Link>
                        </li>
                    </ul>                    
                </nav>
            </div>
            </div>
        </NavBarStyled>
    )
}

export default NavBar