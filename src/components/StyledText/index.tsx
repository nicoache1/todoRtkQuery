import { concat } from 'lodash'
import React from 'react'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'
import { useTheme } from 'src/styles/Theme'
import { AppTypography, ColorPalette } from 'src/styles/types'

type TextCustomProps = {
  typography?: AppTypography
  color?: ColorPalette
  children: React.ReactNode
} & TextProps

export const StyledText: React.FC<TextCustomProps> = props => {
  const { Theme: ActualTheme } = useTheme()
  const {
    color = ColorPalette.BLACK,
    children,
    typography = AppTypography.BODY1,
    style,
  } = props

  const themedColor = color
    ? ActualTheme.colors[color]
    : ActualTheme.colors.BLACK

  const themedTypography = ActualTheme.typography[typography]

  const contextStyle: StyleProp<TextStyle> = {
    color: themedColor,
    ...themedTypography,
  }

  const mergedStyle: StyleProp<TextStyle> = style
    ? style instanceof Array
      ? concat([contextStyle], style)
      : { ...contextStyle, ...(style as any) }
    : contextStyle

  return (
    <Text {...props} style={mergedStyle} accessible={true}>
      {children}
    </Text>
  )
}
