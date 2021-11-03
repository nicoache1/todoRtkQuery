import { TextStyle } from 'react-native'

import { AppTypography, TypographyStyle } from './types'

export const Typography: TypographyStyle<TextStyle> = {
  [AppTypography.H0_HEADLINE]: {
    fontSize: 40,
  },
  [AppTypography.H1_HEADLINE]: {
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 0.24,
  },
  [AppTypography.H2_HEADLINE]: {
    fontSize: 24,
    fontWeight: '900',
  },
  [AppTypography.H3_HEADLINE]: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.15,
  },
  [AppTypography.SUBTITLE1]: {
    fontSize: 17,
    letterSpacing: 0.16,
    lineHeight: 24,
  },
  [AppTypography.SUBTITLE2]: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.11,
    lineHeight: 24,
  },
  [AppTypography.BODY1]: {
    fontSize: 17,
    letterSpacing: 0.47,
  },
  [AppTypography.BODY2]: {
    fontSize: 15,
    letterSpacing: 0.27,
  },
  [AppTypography.BUTTON]: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.35,
    textTransform: 'uppercase',
  },
  [AppTypography.CAPTION]: {
    fontSize: 13,
    letterSpacing: 0.43,
    lineHeight: 16,
  },
  [AppTypography.OVERLINE]: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
}
