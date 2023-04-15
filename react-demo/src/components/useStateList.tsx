import React, { FC, useEffect, useState } from 'react'
import produce from 'immer'
import { ChildrenList } from './childrenList'

// 组件是一个函数  执行返回 JSX片段, 组件初次渲染执行这个函数
// 任何Sate 更新 都会触发组件的更新(重新执行函数)
const UseStateList: FC = () => {
  const [list, setList] = useState([
    { id: '1', name: '张三', isSub: true },
    { id: '2', name: '李四', isSub: false },
    { id: '3', name: '王五', isSub: true },
    { id: '4', name: '小明', isSub: false },
    { id: '5', name: '小李', isSub: true },
  ])

  // useEffect(() => {
  //   console.log('加载http请求')
  // }, []) // 数组里边是依赖项  根据依赖项的改变而触发, 没有依赖 组件第一次触发时更新

  // useEffect(() => {
  //   console.log('list 发生改变触发的')
  // }, [list])

  // 增加
  const addUser = () => {
    const r = Math.random().toString().slice(-2)
    // 未使用immer
    // setList(
    //   list.concat({
    //     id: 'x' + r,
    //     name: '未知' + r,
    //     isSub: false,
    //   })
    // )

    // 使用immer
    setList(
      produce(draft => {
        draft.push({
          id: 'x' + r,
          name: '未知' + r,
          isSub: false,
        })
      })
    )
  }

  // 删除
  const remove = (id: string) => {
    // 未使用immer
    // setList(
    //   list.filter(u => {
    //     if (u.id === id) return false
    //     else return true
    //   })
    // )

    // 使用immer
    setList(
      produce(draft => {
        const idx = draft.findIndex(v => v.id === id)
        draft.splice(idx, 1)
      })
    )
  }

  // 编辑
  const edit = (id: string) => {
    // 未使用immer
    // setList(
    //   list.map(item => {
    //     if (item.id !== id) return item
    //     return {
    //       ...item,
    //       isSub: true,
    //     }
    //   })
    // )

    // 使用immer
    setList(
      produce(draft => {
        const ids = draft.find(item => item.id === id)
        if (ids) ids.isSub = true
      })
    )
  }

  return (
    <div>
      <h1>信息列表页展示</h1>
      <button onClick={addUser}>增加</button>
      <div>
        {list.map(item => {
          const { id, name, isSub } = item
          return (
            <ChildrenList
              key={id}
              userId={id}
              userName={name}
              isSub={isSub}
              edit={edit}
              remove={remove}
            />
          )
        })}
      </div>
    </div>
  )
}

export default UseStateList
