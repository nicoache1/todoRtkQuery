import React from 'react'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

export interface IconProps {
  materialIconName: string
  size?: number
  materialIconColor?: string
}

export const Icon: React.FC<IconProps> = ({
  materialIconName,
  size = 22,
  materialIconColor = 'black',
}) => (
  <>
    {MaterialIcon.hasIcon(materialIconName) ? (
      <MaterialIcon
        name={materialIconName}
        size={size}
        color={materialIconColor}
      />
    ) : (
      <MaterialCommunityIcon
        name={materialIconName}
        size={size}
        color={materialIconColor}
      />
    )}
  </>
)
