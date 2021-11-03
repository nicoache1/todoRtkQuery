import { combineReducers } from 'redux'

import { todosReducer, todosReducerPath } from './APIs/todoSlice'

export const rootReducer = combineReducers({
  [todosReducerPath]: todosReducer,
})

export type ReduxState = ReturnType<typeof rootReducer>
