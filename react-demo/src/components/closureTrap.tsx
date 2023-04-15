import React, { FC, useState, useRef, useEffect } from 'react'

export const ClosureTrap: FC = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  // useEffect(() => {
  //   countRef.current = count
  // }, [count])

  const add = () => {
    setCount(count + 1)
  }

  // 闭包
  const alertFn = () => {
    setTimeout(() => {
      alert(count) // 值类型
      // alert(countRef.current) // 引用类型
    }, 3000)
  }

  return (
    <div>
      <h1>闭包陷阱</h1>
      <div>{count}</div>
      <button onClick={add}>增加</button>
      <button onClick={alertFn}>Alert</button>
    </div>
  )
}
