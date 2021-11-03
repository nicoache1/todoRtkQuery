import { orderBy } from 'lodash'
import React from 'react'
import { FlatListProps, Pressable, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { ActivityIndicator } from 'react-native-paper'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { useCompleteTodo } from 'src/hooks/useCompleteTodo'
import { Routes } from 'src/navigation/routes'
import { ScreenPropType } from 'src/navigation/types'
import {
  useDeleteTodoMutation,
  useGetTodosQuery,
} from 'src/store/APIs/todoSlice'
import { useTheme } from 'src/styles/Theme'
import { ColorPalette } from 'src/styles/types'
import { Todo } from 'src/types/todo'

import { useSetNavigationOptions } from './hooks/useSetNavigationOptions'
import { strings } from './strings'
import { ITEM_HEIGHT, styles } from './styles'
import { TodoItem } from './TodoItem'

interface HomeProps extends ScreenPropType<Routes.Home> {}

const keyExtractor: FlatListProps<Todo>['keyExtractor'] = item => `${item.id}`

const getItemLayout: FlatListProps<Todo>['getItemLayout'] = (_, index) => ({
  index,
  length: ITEM_HEIGHT,
  offset: ITEM_HEIGHT * index,
})

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { Theme } = useTheme()

  const { data, isLoading } = useGetTodosQuery()

  const [triggerDeleteMutation] = useDeleteTodoMutation()
  const { onPress } = useCompleteTodo()

  useSetNavigationOptions(
    navigation,
    Theme.colors.CLEAR_BLUE,
    Theme.colors.WHITE,
  )

  const onPressItem = (id: number) => () =>
    navigation.navigate(Routes.TodoDetail, {
      id,
    })

  const onPressClear = () => {
    if (data) {
      const itemsToDelete = data
        .filter(item => item.completed)
        .map(item => item.id)

      triggerDeleteMutation(itemsToDelete)
    }
  }

  const renderItem: FlatListProps<Todo>['renderItem'] = ({ item }) => (
    <TodoItem
      item={item}
      onPress={onPressItem(item.id)}
      Theme={Theme}
      onPressCheckbox={onPress(item)}
    />
  )

  // console.log('here rerender', data?.length)

  const sortedData = orderBy(data ?? [], ['id'], 'asc')

  return (
    <SceneContainer
      style={[styles.container, { backgroundColor: Theme.colors.LIGHT_GREY }]}
      barStyle={'light-content'}>
      {!isLoading && (
        <FlatList
          data={sortedData}
          keyExtractor={keyExtractor}
          getItemLayout={getItemLayout}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={
            <Pressable onPress={onPressClear} style={styles.footer}>
              <StyledText color={ColorPalette.STRONG_PINK}>
                {strings['FOOTER.label']}
              </StyledText>
            </Pressable>
          }
        />
      )}
      {isLoading && <ActivityIndicator />}
    </SceneContainer>
  )
}
