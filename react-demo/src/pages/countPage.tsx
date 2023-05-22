import React, { FC } from 'react'
// useSelector 查询  useDispatch 派发
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../store/count'
import type { StateType } from '../store'
const CountPage: FC = () => {
  const count = useSelector<StateType>(state => state.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Redux Count Demo</h2>
      <>count: {count}</>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </div>
  )
}

export default CountPage
