import React, { FC, useState, useReducer } from 'react'

type StateType = {
  num: number
}

type ActionType = {
  type: string
}

const initialState: StateType = {
  num: 0,
}

// 根据传入的action 返回新的 state (不可变数据)
function reducerCount(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'increment':
      return { num: state.num + 1 }
    case 'decrement':
      return { num: state.num - 1 }
    default:
      throw new Error()
  }
}

export const ReducerDemo: FC = () => {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducerCount, initialState)
  return (
    <div>
      <h1>Demo累加---useState</h1>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>加</button>
      <button onClick={() => setCount(count - 1)}>减</button>
      <p>----------------------------------------------------</p>
      <p>----------------------------------------------------</p>
      <h1>Demo累加---useReducer</h1>
      <div>num: {state.num}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>加</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>减</button>
    </div>
  )
}
