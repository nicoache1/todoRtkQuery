import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React, { useLayoutEffect } from 'react'
import { HeaderButton } from 'src/components/HeaderButton'
import { Icon } from 'src/components/Icon'
import { Routes } from 'src/navigation/routes'
import { NavigationPropType } from 'src/navigation/types'

import { strings } from '../strings'

export const useSetNavigationOptions = (
  navigation: NavigationPropType<Routes.Home>,
  backgroundColor: string,
  headerTintColor: string,
) => {
  useLayoutEffect(() => {
    const onPressAdd = () => navigation.navigate(Routes.AddTodo)
    const options: NativeStackNavigationOptions = {
      headerRight: () => (
        <HeaderButton onPress={onPressAdd}>
          <Icon materialIconName={'add'} materialIconColor={headerTintColor} />
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
  }, [backgroundColor, headerTintColor, navigation])
}
