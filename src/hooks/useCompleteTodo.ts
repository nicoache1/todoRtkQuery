import { useUpdateTodoMutation } from 'src/store/APIs/todoSlice'
import { Todo } from 'src/types/todo'

export const useCompleteTodo = () => {
  const [triggerMutation] = useUpdateTodoMutation()

  const onPress = (item: Todo) => () => {
    const newItem = {
      ...item,
      completed: !item.completed,
    }
    triggerMutation(newItem)
  }

  return {
    onPress,
  }
}
