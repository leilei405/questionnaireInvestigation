import React, { FC, useState } from 'react'
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
    setList(
      list.concat({
        id: 'x' + r,
        name: '未知' + r,
        isSub: false,
      })
    )
  }

  // 删除
  const remove = (id: string) => {
    setList(
      list.filter(u => {
        if (u.id === id) return false
        else return true
      })
    )
  }

  // 编辑
  const edit = (id: string) => {
    setList(
      list.map(item => {
        if (item.id !== id) return item
        return {
          ...item,
          isSub: true,
        }
      })
    )
  }

  return (
    <div>
      <h1>信息列表页展示</h1>
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
      <button onClick={addUser}>增加</button>
    </div>
  )
}

export default UseStateList
