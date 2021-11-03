import React from 'react'
import { Pressable } from 'react-native'

import { LayoutProps } from './types'

export const HeaderButton: React.FC<LayoutProps> = ({
  onPress,
  children,
  buttonStyle,
}) => {
  return (
    <Pressable
      style={buttonStyle}
      onPress={onPress}
      hitSlop={{ bottom: 15, left: 15, right: 15, top: 15 }}>
      {children}
    </Pressable>
  )
}
