import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { useDispatch } from 'react-redux'

import { todosApi } from './APIs/todoSlice'
import { rootReducer } from './rootReducer'

const middlewares = [todosApi.middleware]

// TODO: uncomment this to use the redux debugger on flipper
if (__DEV__) {
  const createDebugger = require('redux-flipper').default
  middlewares.push(createDebugger())
}

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
  reducer: rootReducer,
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export type ThunkExtra<T> = {
  dispatch: AppDispatch
  state: RootState
  extra: T
}

export { store }
