import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { useLoadUserData } from '../hooks/useLoadUserData' // 异步加载获取用户信息
import { useNavPage } from '../hooks/useNavPage' // 用户是否登录自定义hook
import { Spin } from 'antd'
const QuestionLayout: FC = () => {
  // 加载用户信息
  const { waitUserData } = useLoadUserData()

  // 用户没有登录时候 跳转到登录页
  useNavPage(waitUserData)

  return (
    <div style={{ height: '100vh' }}>
      {waitUserData ? (
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Spin />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  )
}
export default QuestionLayout
