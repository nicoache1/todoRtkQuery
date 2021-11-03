import { concat } from 'lodash'
import React from 'react'
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native'
import { useTheme } from 'src/styles/Theme'
import { ColorPalette } from 'src/styles/types'

type CustomViewProps = {
  color?: ColorPalette
  children?: React.ReactNode
} & ViewProps

export const StyledContainer: React.FC<CustomViewProps> = (props) => {
  const { Theme: ActualTheme } = useTheme()

  const { color, style, children } = props
  const themedColor = color
    ? ActualTheme.colors[color]
    : ActualTheme.colors.TRANSPARENT

  const contextStyle: StyleProp<ViewStyle> = {
    backgroundColor: themedColor,
    paddingHorizontal: ActualTheme.spacing.HORIZONTAL_SCREEN_PADDING,
    paddingVertical: 10,
  }

  const mergedStyle: StyleProp<ViewStyle> = style
    ? style instanceof Array
      ? concat([contextStyle], style)
      : { ...contextStyle, ...(style as any) }
    : contextStyle

  return (
    <View {...props} style={mergedStyle}>
      {children}
    </View>
  )
}
