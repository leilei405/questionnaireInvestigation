import React, { FC, useState } from 'react'
import produce from 'immer'
export const Immer: FC = () => {
  const [userInfo, setUserInfo] = useState({ name: '雷雷', age: 20 })
  const [arr, setArr] = useState(['a', 'b', 'c'])

  const changeUserInfo = () => {
    // 不可变数据
    // setUserInfo({
    //   ...userInfo, // 解构赋值
    //   age: 18,
    // })

    // immer 方式
    setUserInfo(
      produce(draft => {
        draft.age = 18
      })
    )
  }

  const changeArrAdd = () => {
    // setArr(arr.concat('eqw')) // concat返回一个新数组
    // // setArr(arr.push('eqw')) // push 返回长度
    // setArr([...arr, 'eqw'])

    // Immer 修改不可变数据
    setArr(
      produce(draft => {
        draft.push('李四')
      })
    )
  }

  return (
    <div>
      <span>不可变数据 不去修改state的值,而是要传入一个新的值 </span>
      <h3>对象</h3>
      <h2>{userInfo.name}</h2>
      <h2>{userInfo.age}</h2>
      <button onClick={changeUserInfo}>改变用户信息</button>
      &nbsp;&nbsp;
      <br />
      <h2>{arr.map(item => item + '   ')}</h2>
      <button onClick={changeArrAdd}>改变数组</button>
    </div>
  )
}
