import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export interface LayoutProps {
  onPress?: () => void
  children: ReactNode
  buttonStyle?: StyleProp<ViewStyle>
}
