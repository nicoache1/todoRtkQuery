import React from 'react'
import { Pressable, View } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { StyledText } from 'src/components/StyledText'
import { AppTypography, ColorPalette, ITheme } from 'src/styles/types'
import { Todo } from 'src/types/todo'

import { styles } from './styles'

interface TodoItemProps {
  onPress: () => void
  Theme: ITheme
  item: Todo
  onPressCheckbox: () => void
}

export const TodoItem: React.FC<TodoItemProps> = ({
  onPress,
  Theme,
  item,
  onPressCheckbox,
}) => (
  <Pressable
    style={[styles.itemContainer, { backgroundColor: Theme.colors.WHITE }]}
    onPress={onPress}>
    <View style={styles.titleContainer}>
      <StyledText>{item.title}</StyledText>
      <StyledText
        color={ColorPalette.STRONG_GREY}
        typography={AppTypography.CAPTION}>
        {item.description}
      </StyledText>
    </View>
    <View style={styles.checkboxContainer}>
      <Checkbox.Android
        color={Theme.colors.STRONG_PINK}
        onPress={onPressCheckbox}
        status={item.completed ? 'checked' : 'unchecked'}
      />
    </View>
  </Pressable>
)
