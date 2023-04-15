import React, { FC, useState } from 'react'
import produce from 'immer'
import { ChildrenList } from './childrenList'

const UseStateList: FC = () => {
  const [list, setList] = useState([
    { id: '1', name: '张三', isSub: true },
    { id: '2', name: '李四', isSub: false },
    { id: '3', name: '王五', isSub: true },
    { id: '4', name: '小明', isSub: false },
    { id: '5', name: '小李', isSub: true },
  ])

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
