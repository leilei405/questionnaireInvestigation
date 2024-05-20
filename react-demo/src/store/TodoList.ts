import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export type TodoItemType = {
  id: string
  title: string
  computed: boolean
}

const INIT_STATE: TodoItemType[] = [
  { id: nanoid(3), title: 'Todo', computed: true },
  { id: nanoid(3), title: 'LIST', computed: false },
  { id: nanoid(3), title: 'REDUX', computed: true },
]

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: INIT_STATE,
  reducers: {
    // 添加
    addTodo(state: TodoItemType[], action: PayloadAction<TodoItemType>) {
      // return state.concat(action.payload)
      return [action.payload, ...state]
    },
    // 删除
    removeTodo(state: TodoItemType[], action: PayloadAction<{ id: string }>) {
      const { id: removeId } = action.payload
      return state.filter(v => v.id !== removeId)
    },
    // 切换
    toggleCompleted(state: TodoItemType[], action: PayloadAction<{ id: string }>) {
      const { id: toggleId } = action.payload
      return state.map(v => {
        const { id, computed } = v
        if (id !== toggleId) return v
        return { ...v, computed: !computed }
      })
    },
  },
})

export const { addTodo, removeTodo, toggleCompleted } = todoListSlice.actions

export default todoListSlice.reducer
