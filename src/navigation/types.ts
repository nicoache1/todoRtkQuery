import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

import { Routes } from './routes'

export type MainStackParamList = {
  [Routes.Home]: undefined
  [Routes.AddTodo]: undefined
  [Routes.TodoDetail]: {
    id: number
  }
}

type StringValueOf<T> = T[keyof T] & string

export type RouteType = MainStackParamList

export type ParamsType = NonNullable<StringValueOf<RouteType>> | undefined

export type NavigationPropType<
  R extends keyof MainStackParamList = keyof MainStackParamList,
> = NativeStackNavigationProp<MainStackParamList, R>

export type ScreenPropType<
  R extends keyof MainStackParamList = keyof MainStackParamList,
> = NativeStackScreenProps<MainStackParamList, R>
