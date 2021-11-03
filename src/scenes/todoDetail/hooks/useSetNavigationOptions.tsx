import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React, { useLayoutEffect } from 'react'
import { HeaderButton } from 'src/components/HeaderButton'
import { Icon } from 'src/components/Icon'
import { Routes } from 'src/navigation/routes'
import { NavigationPropType } from 'src/navigation/types'

import { strings } from '../strings'
import { styles } from '../styles'

export const useSetNavigationOptions = (
  navigation: NavigationPropType<Routes.TodoDetail>,
  backgroundColor: string,
  headerTintColor: string,
) => {
  useLayoutEffect(() => {
    const goBack = () => navigation.goBack()
    const options: NativeStackNavigationOptions = {
      headerLeft: () => (
        <HeaderButton onPress={goBack} buttonStyle={styles.buttonStyles}>
          <Icon
            materialIconName={'chevron-left'}
            size={40}
            materialIconColor={headerTintColor}
          />
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
