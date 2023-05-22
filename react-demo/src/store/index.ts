import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'
import todoListReducer, { TodoItemType } from './TodoList'

export type StateType = {
  count: number
  todoList: TodoItemType[]
}

export default configureStore({
  reducer: {
    count: countReducer,

    todoList: todoListReducer
    // 可加载多个模块
  },
})
