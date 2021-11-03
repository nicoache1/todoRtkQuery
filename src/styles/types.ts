import { TextStyle } from 'react-native'

export interface ITheme {
  colors: PaletteStyle<string>
  typography: TypographyStyle<TextStyle>
  spacing: SpacingStyle<number>
}

export enum AppTypography {
  H0_HEADLINE = 'H0_HEADLINE',
  H1_HEADLINE = 'H1_HEADLINE',
  H2_HEADLINE = 'H2_HEADLINE',
  H3_HEADLINE = 'H3_HEADLINE',
  SUBTITLE1 = 'SUBTITLE1',
  SUBTITLE2 = 'SUBTITLE2',
  BODY1 = 'BODY1',
  BODY2 = 'BODY2',
  BUTTON = 'BUTTON',
  CAPTION = 'CAPTION',
  OVERLINE = 'OVERLINE',
}

export interface TypographyStyle<T> {
  [AppTypography.H0_HEADLINE]: T
  [AppTypography.H1_HEADLINE]: T
  [AppTypography.H2_HEADLINE]: T
  [AppTypography.H3_HEADLINE]: T
  [AppTypography.SUBTITLE1]: T
  [AppTypography.SUBTITLE2]: T
  [AppTypography.BODY1]: T
  [AppTypography.BODY2]: T
  [AppTypography.BUTTON]: T
  [AppTypography.CAPTION]: T
  [AppTypography.OVERLINE]: T
}

export enum ColorPalette {
  'BLACK' = 'BLACK',
  'CLEAR_BLUE' = 'CLEAR_BLUE',
  'STRONG_PINK' = 'STRONG_PINK',
  'LIGHT_GREY' = 'LIGHT_GREY',
  'WHITE' = 'WHITE',
  'TRANSPARENT' = 'TRANSPARENT',
  'SEPARATOR' = 'SEPARATOR',
  'STRONG_GREY' = 'STRONG_GREY',
}

export interface PaletteStyle<T> {
  [ColorPalette.BLACK]: T
  [ColorPalette.LIGHT_GREY]: T
  [ColorPalette.WHITE]: T
  [ColorPalette.TRANSPARENT]: T
  [ColorPalette.CLEAR_BLUE]: T
  [ColorPalette.STRONG_PINK]: T
  [ColorPalette.SEPARATOR]: T
  [ColorPalette.STRONG_GREY]: T
}

export enum SpacingScale {
  HORIZONTAL_SCREEN_PADDING = 'HORIZONTAL_SCREEN_PADDING',
}

export interface SpacingStyle<T> {
  [SpacingScale.HORIZONTAL_SCREEN_PADDING]: T
}
