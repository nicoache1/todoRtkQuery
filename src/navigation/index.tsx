import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { AddTodo } from 'src/scenes/addTodo'
import { Home } from 'src/scenes/home'
import { TodoDetail } from 'src/scenes/todoDetail'

import { Routes } from './routes'
import { MainStackParamList } from './types'

const Stack = createNativeStackNavigator<MainStackParamList>()

export const AppContainer: React.FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Home} name={Routes.Home} />
      <Stack.Screen component={TodoDetail} name={Routes.TodoDetail} />
      <Stack.Screen component={AddTodo} name={Routes.AddTodo} />
    </Stack.Navigator>
  )
}
