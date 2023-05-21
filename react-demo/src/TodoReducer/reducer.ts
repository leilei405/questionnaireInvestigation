/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TodoType } from './store'
export type ActionType = {
  type: string
  payload?: any // 附加参数 增加的todo 删除的todoID
}

export const reducer = (state: TodoType[], action: ActionType) => {
  const { payload } = action
  switch (action.type) {
    case 'add':
      return state.concat(payload)
    case 'del':
      return state.filter(todo => todo.id !== payload)
    default:
      throw new Error()
  }
}
