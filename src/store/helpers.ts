import { BaseQueryFn } from '@reduxjs/toolkit/dist/query'
import { MutationExtraOptions } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { Todo } from 'src/types/todo'

import { todosApi } from './APIs/todoSlice'

export const providesList = <
  R extends { id: string | number }[],
  T extends string,
>(
  resultsWithIds: R | undefined,
  tagType: T,
) => {
  return resultsWithIds
    ? [
        { id: 'LIST', type: tagType },
        ...resultsWithIds.map(({ id }) => ({ id, type: tagType })),
      ]
    : [{ id: 'LIST', type: tagType }]
}

export const updateTodoOptimistic: MutationExtraOptions<
  'Todo',
  void,
  Todo,
  BaseQueryFn
>['onQueryStarted'] = async (
  { id, ...patch },
  { dispatch, queryFulfilled },
) => {
  const patchResult = dispatch(
    todosApi.util.updateQueryData('getTodos', undefined, (draft: Todo[]) => {
      const index = draft.findIndex(item => item.id === id)
      if (index !== -1) {
        draft[index] = {
          id,
          ...patch,
        }
      }
      // console.log('here optimistic')
    }),
  )

  try {
    await queryFulfilled
    // console.log('here fulfilled')
  } catch (error) {
    // console.log('here error', error)
    patchResult.undo()
  }
}
