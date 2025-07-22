import * as React from 'react'
import { Link } from 'gatsby'
import { NavBarStyled } from './NavBar.styles'
import icon from '../../images/icon.png'


const NavBar = ({ title }) => {
    return (
        <NavBarStyled>
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
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='/projects'>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to='/now'>
                                Now
                            </Link>
                        </li>
                    </ul>                    
                </nav>
            </div>
        </NavBarStyled>
    )
}

export default NavBar