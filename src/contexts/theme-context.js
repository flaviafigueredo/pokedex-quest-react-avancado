import React, { createContext, useState } from "react"
import backgroundLight from '../images/background-light.jpg'
import backgroundDark  from '../images/background-dark.jpg'

export const themes = {
    light: {
        color: '#14213D',
        image: `url(${backgroundLight})`,
        background: '#e0e1dd'
    },
    dark: {
        color: '#f5f5f5',
        image: `url(${backgroundDark})`,
        background: '#212121'
    }
}

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.light)

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}