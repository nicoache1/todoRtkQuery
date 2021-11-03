import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Config from 'react-native-config'
import { Todo } from 'src/types/todo'
import { deserializeTodo, deserializeTodos } from 'src/types/todo'

import { providesList, updateTodoOptimistic } from '../helpers'

export const todosApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: Config.API_HOST }),
  endpoints: builder => ({
    addTodo: builder.mutation<Todo, { title: string; description: string }>({
      invalidatesTags: ['Todo'],
      query: body => ({
        body,
        method: 'POST',
        url: `todos`,
      }),
      transformResponse: (data: any) => deserializeTodo(data),
    }),
    deleteTodo: builder.mutation<null, number[]>({
      invalidatesTags: (_, __, arg) =>
        arg.map(itemId => ({ id: itemId, type: 'Todo' })),
      queryFn: async (todosId, _, __, baseQuery) => {
        await Promise.all(
          todosId.map(todoId =>
            baseQuery({
              method: 'DELETE',
              url: `todos/${todoId}`,
            }),
          ),
        )
        return { data: null }
      },
    }),
    getTodoById: builder.query<Todo, number>({
      providesTags: (_, __, id) => [{ id, type: 'Todo' }],
      query: (id: number) => ({ url: `todos/${id}` }),
      transformResponse: (data: any) => deserializeTodo(data),
    }),
    getTodos: builder.query<Todo[], void>({
      providesTags: result => providesList(result, 'Todo'),
      query: () => `todos`,
      transformResponse: (data: any[]) => deserializeTodos(data),
    }),
    updateTodo: builder.mutation<void, Todo>({
      invalidatesTags: (_, __, { id }) => [{ id, type: 'Todo' }],
      onQueryStarted: updateTodoOptimistic,
      query: item => ({
        body: item,
        method: 'PUT',
        url: `todos/${item.id}`,
      }),
    }),
  }),
  reducerPath: 'todosApi',
  tagTypes: ['Todo'],
})

export const {
  useGetTodoByIdQuery,
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useAddTodoMutation,
  reducer: todosReducer,
  reducerPath: todosReducerPath,
} = todosApi
