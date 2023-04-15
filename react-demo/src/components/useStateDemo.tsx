import React, { FC, useState } from 'react'

const UseStateDemo: FC = () => {
  const [count, setCount] = useState(0)
  // let count = 0
  const add = () => {
    // (5)每一次传入的值都是一样的值 并且会被合并
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    // 使用函数  state更新 则不会被合并
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
    console.log(count, 'count') // 为什么是更新之前的数据
  }
  return (
    <div>
      <>{count}</>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default UseStateDemo
