import React, { createContext, useContext } from 'react'

import { Palette } from './Palette'
import { Spacing } from './Spacing'
import { ITheme } from './types'
import { Typography } from './Typography'

const Theme: ITheme = {
  colors: Palette,
  spacing: Spacing,
  typography: Typography,
}

const ThemeContext: React.Context<{ Theme: ITheme }> = createContext({
  Theme,
})

export const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeContext.Provider value={{ Theme }}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
