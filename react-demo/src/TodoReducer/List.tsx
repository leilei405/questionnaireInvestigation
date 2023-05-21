import React, { FC, useContext } from 'react'
// import { initialState } from './store'
// import { reducer } from './reducer'
import { TodoContext } from './index'
export const List: FC = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  // const [state, dispatch] = useContext(reducer, initialState)
  // console.log(state, 'state')

  const { state, dispatch } = useContext(TodoContext)
  const del = (id: string) => {
    dispatch({ type: 'del', payload: id })
  }

  return (
    <div>
      <p>List数据</p>
      <ul>
        {state.map(item => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => del(item.id)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
