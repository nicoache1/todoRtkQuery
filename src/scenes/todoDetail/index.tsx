import React from 'react'
import { Pressable, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledContainer } from 'src/components/StyledContainer'
import { StyledText } from 'src/components/StyledText'
import { useCompleteTodo } from 'src/hooks/useCompleteTodo'
import { Routes } from 'src/navigation/routes'
import { ScreenPropType } from 'src/navigation/types'
import { useGetTodoByIdQuery } from 'src/store/APIs/todoSlice'
import { useTheme } from 'src/styles/Theme'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { useSetNavigationOptions } from './hooks/useSetNavigationOptions'
import { strings } from './strings'
import { styles } from './styles'

interface TodoDetailProps extends ScreenPropType<Routes.TodoDetail> {}

export const TodoDetail: React.FC<TodoDetailProps> = ({
  route,
  navigation,
}) => {
  const id = route.params.id

  const { Theme } = useTheme()

  useSetNavigationOptions(
    navigation,
    Theme.colors.CLEAR_BLUE,
    Theme.colors.WHITE,
  )

  const { data } = useGetTodoByIdQuery(id)

  const headerLabel = data?.completed
    ? strings['LABEL.done']
    : strings['LABEL.notDone']

  const { onPress } = useCompleteTodo()

  return (
    <SceneContainer
      barStyle={'light-content'}
      style={[styles.container, { backgroundColor: Theme.colors.LIGHT_GREY }]}>
      {!data && <ActivityIndicator />}
      {data && (
        <StyledContainer
          style={[
            {
              borderBottomColor: Theme.colors.SEPARATOR,
            },
            styles.cardContainer,
          ]}
          color={ColorPalette.WHITE}>
          <View style={styles.infoContainer}>
            <View style={styles.separation}>
              <StyledText color={ColorPalette.STRONG_PINK}>
                {headerLabel}
              </StyledText>
            </View>
            <View style={styles.separation}>
              <StyledText typography={AppTypography.H0_HEADLINE}>
                {data.title}
              </StyledText>
            </View>
            <StyledText color={ColorPalette.STRONG_GREY}>
              {data.description}
            </StyledText>
          </View>
          <Pressable
            style={styles.button}
            onPress={onPress({ ...data, completed: true, id })}>
            <StyledText color={ColorPalette.STRONG_PINK}>
              {strings['BUTTON.markAsDone']}
            </StyledText>
          </Pressable>
        </StyledContainer>
      )}
    </SceneContainer>
  )
}
