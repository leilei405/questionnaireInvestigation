import { configureStore } from '@reduxjs/toolkit'
import undoable, { excludeAction, StateWithHistory } from 'redux-undo'
import countReducer from './count'
import todoListReducer, { TodoItemType } from './TodoList'

export type StateType = {
  count: number
  todoList: StateWithHistory<TodoItemType[]>
}

export default configureStore({
  reducer: {
    count: countReducer,

    // 没有undo redo
    // todoList: todoListReducer,

    // 加了undo
    todoList: undoable(todoListReducer, {
      limit: 20, // 限制只能撤销20步
      filter: excludeAction(['todoList/toggleCompleted']), // 屏蔽某些action 不进行undo
    }),
    // 可加载多个模块
  },
})
