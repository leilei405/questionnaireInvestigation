import React, { FC, createContext, useState } from 'react'
import { Toolbar } from './Toolbar'

const themes = {
  light: {
    fore: 'aqua',
    background: '#eee',
  },
  dark: {
    fore: 'aqua',
    background: 'green',
  },
}

// 定义ThemeContext
export const ThemeContext = createContext(themes.light)

export const Demo: FC = () => {
  const [theme, setTheme] = useState(themes.light)

  const toDark = () => {
    setTheme(themes.dark)
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <span>Context Demo</span>
        <button onClick={toDark}>切换</button>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  )
}
