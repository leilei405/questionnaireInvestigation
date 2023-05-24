import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { useLoadUserData } from '../hooks/useLoadUserData' // 异步加载获取用户信息

const QuestionLayout: FC = () => {
  const { waitUserData } = useLoadUserData()

  return (
    <div>
      <div>QuestionLayout</div>
      <div>{!waitUserData && <Outlet />}</div>
    </div>
  )
}
export default QuestionLayout
