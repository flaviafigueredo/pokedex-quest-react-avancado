import React, { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-context"
import themeIcon from '../../../images/theme-icon.png'
import { ThemeImg, StyledThemeButton } from './styles'

export const ThemeTogglerButton = () => {
    const { toggleTheme } = useContext(ThemeContext)

    return (
        <StyledThemeButton onClick={toggleTheme}>
            <ThemeImg src={themeIcon} alt='light theme icon' />
        </StyledThemeButton>
    )
}