import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { MultilineInput } from 'src/components/MultilineInput'
import { SceneContainer } from 'src/components/SceneContainer'
import { Routes } from 'src/navigation/routes'
import { ScreenPropType } from 'src/navigation/types'
import { useAddTodoMutation } from 'src/store/APIs/todoSlice'
import { useTheme } from 'src/styles/Theme'
import { SpacingScale } from 'src/styles/types'

import { useSetNavigationOptions } from './hooks/useSetNavigationOptions'
import { styles } from './styles'

interface AddTodoProps extends ScreenPropType<Routes.AddTodo> {}

export const AddTodo: React.FC<AddTodoProps> = ({ navigation }) => {
  const { Theme } = useTheme()

  const [triggerMutation, { isSuccess }] = useAddTodoMutation()

  const [title, setTitle] = useState<string | undefined>(undefined)
  const [description, setDescription] = useState<string | undefined>(undefined)

  const onPressSave = () => {
    if (!!title && !!description) {
      triggerMutation({ description, title })
    }
  }

  useSetNavigationOptions(
    navigation,
    Theme.colors.CLEAR_BLUE,
    Theme.colors.WHITE,
    onPressSave,
  )

  useEffect(() => {
    if (isSuccess) {
      navigation.goBack()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  return (
    <SceneContainer
      style={[styles.container, { backgroundColor: Theme.colors.LIGHT_GREY }]}>
      <View style={{ backgroundColor: Theme.colors.WHITE }}>
        <View
          style={{
            paddingHorizontal:
              Theme.spacing[SpacingScale.HORIZONTAL_SCREEN_PADDING],
          }}>
          <TextInput
            value={title}
            label={'Task title'}
            style={[{ backgroundColor: Theme.colors.WHITE }, styles.title]}
            theme={{
              colors: {
                primary: Theme.colors.STRONG_PINK,
              },
            }}
            onChangeText={setTitle}
          />
        </View>
        <MultilineInput
          value={description}
          onChangeText={setDescription}
          placeholder={'Text description'}
        />
      </View>
    </SceneContainer>
  )
}
