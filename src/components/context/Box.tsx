import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Box = () => {
    const theme = useContext(ThemeContext)

  return (
    <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text}}>Box with useContext</div>
  )
}

export default Box