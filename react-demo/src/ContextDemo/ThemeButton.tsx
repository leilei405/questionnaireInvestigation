import React, { FC, useContext } from 'react'
import { ThemeContext } from '.'
export const ThemeButton: FC = () => {
  const theme = useContext(ThemeContext)
  const style = { color: theme.fore, background: theme.background }
  return (
    <div>
      <button style={style}>切换</button>
    </div>
  )
}
