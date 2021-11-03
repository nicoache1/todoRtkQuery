export interface Todo {
  id: number
  title: string
  description: string
  completed: boolean
}

export const deserializeTodos = (data: any[]) =>
  data.map(dataItem => deserializeTodo(dataItem))

export const deserializeTodo = (data: any): Todo => ({
  completed: data.completed,
  description: data.description,
  id: data.id,
  title: data.title,
})
