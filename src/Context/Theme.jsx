import React from 'react'
import { useState, createContext } from 'react'

const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState({})
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext