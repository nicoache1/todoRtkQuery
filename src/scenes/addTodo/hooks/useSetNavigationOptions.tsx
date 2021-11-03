import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React, { useLayoutEffect } from 'react'
import { HeaderButton } from 'src/components/HeaderButton'
import { StyledText } from 'src/components/StyledText'
import { Routes } from 'src/navigation/routes'
import { NavigationPropType } from 'src/navigation/types'
import { ColorPalette } from 'src/styles/types'

import { strings } from '../strings'

export const useSetNavigationOptions = (
  navigation: NavigationPropType<Routes.AddTodo>,
  backgroundColor: string,
  headerTintColor: string,
  onPressSave: () => void,
) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      headerRight: () => (
        <HeaderButton onPress={onPressSave}>
          <StyledText color={ColorPalette.WHITE}>Save</StyledText>
        </HeaderButton>
      ),
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor,
      },
      headerTintColor: headerTintColor,
      headerTitleAlign: 'center',
      title: strings['NAV_BAR.title'],
    }

    navigation.setOptions(options)
  }, [backgroundColor, headerTintColor, navigation, onPressSave])
}
