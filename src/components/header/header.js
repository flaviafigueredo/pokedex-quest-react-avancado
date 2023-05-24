import { StyledHeader, Logo, HeaderContent } from './styles'
import logo from '../../images/logo.png'
import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import { ThemeTogglerButton } from '../buttons/theme-toggler-button/theme-toggler-button'

export const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <StyledHeader>
            <HeaderContent>
                <a href='/'>
                    <Logo src={logo} alt='logo' />
                </a>
                
                <ThemeTogglerButton theme={theme} toggleTheme={toggleTheme} />
            </HeaderContent>
        </StyledHeader>
    )
}