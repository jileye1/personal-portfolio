import * as React from 'react'
import { FooterStyled } from './Footer.styles'
import Socials from '../socials/Socials'

const Footer = () => {
    return (
        <FooterStyled>
            <div className='content'>
                <div className='name'>© Josie Leye 2025</div>
                <Socials />
            </div>
        </FooterStyled>
    )
}

export default Footer