import React, { FC } from 'react'
// import React, { FC, useEffect } from 'react'

type ListTypeProps = {
  userId: string
  userName: string
  isSub: boolean
  remove?: (id: string) => void
  edit?: (id: string) => void
}

export const ChildrenList: FC<ListTypeProps> = props => {
  const { userId, userName, isSub, remove, edit: editUser } = props

  // useEffect(() => {
  //   console.log('----')
  //   return () => {
  //     console.log('销毁', userId, userName)
  //   }
  // }, [])

  // 删除
  const del = (id: string) => {
    remove && remove(id)
  }
  // 修改
  const edit = (id: string) => {
    editUser && editUser(id)
  }
  return (
    <div>
      <ul>
        <li key={userId}>
          {userId}------
          {userName}
          {isSub ? (
            <span style={{ color: 'green' }}>已发布</span>
          ) : (
            <span style={{ color: 'red' }}>未发布</span>
          )}
          &nbsp;&nbsp;&nbsp;<button onClick={() => edit(userId)}>编辑</button>
          &nbsp;&nbsp;&nbsp;<button onClick={() => del(userId)}>删除</button>
        </li>
      </ul>
    </div>
  )
}
