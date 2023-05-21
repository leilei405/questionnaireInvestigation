import React, { FC, createContext, useReducer } from 'react'
import { InputForm } from './inputForm'
import { List } from './List'
import { initialState } from './store'
import { reducer, ActionType } from './reducer'
export const TodoContext = createContext({
  state: initialState,
  dispatch: (action: ActionType) => {
    console.log(action)
  },
})
export const TodoListReducer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <p>TodoListUseReducer</p>
      <div>
        <List />
        <InputForm />
      </div>
    </TodoContext.Provider>
  )
}
