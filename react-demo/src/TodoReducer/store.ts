import { nanoid } from 'nanoid'
export type TodoType = {
  id: string
  title: string
}

export const initialState: TodoType[] = [
  {
    id: nanoid(3),
    title: '打游戏',
  },
  {
    id: nanoid(3),
    title: '敲代码',
  },
  {
    id: nanoid(3),
    title: '吃大餐',
  },
]
