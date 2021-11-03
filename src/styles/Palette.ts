import { ColorPalette, PaletteStyle } from './types'

export const Palette: PaletteStyle<string> = {
  BLACK: '#000000',
  CLEAR_BLUE: '#007AFF',
  LIGHT_GREY: '#f8f8f8',
  SEPARATOR: '#f0f0f0',
  STRONG_GREY: '#959595',
  STRONG_PINK: '#ff197b',
  TRANSPARENT: 'transparent',
  WHITE: '#FFFFFF',
}

function checkOpacityValue(opacity: number) {
  if (opacity < 0 || opacity > 1) {
    throw new Error(`opacity must between 0 and 1, got ${opacity}`)
  }
}

export const colorTranslucent = (color: ColorPalette, opacity: number) => {
  const colorToOpaque = Palette[color]
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorToOpaque)
  if (!result) {
    throw new Error(`Error in opacity`)
  }
  return `rgba(${parseInt(result[1], 16)}, ${parseInt(
    result[2],
    16,
  )}, ${parseInt(result[3], 16)},  ${opacity})`
}

export function blackTranslucent(opacity: number) {
  checkOpacityValue(opacity)
  return `rgba(0, 0, 0, ${opacity})`
}
