import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, message } from 'antd'
import { useDispatch } from 'react-redux'
import { UserOutlined } from '@ant-design/icons'
import { LOGIN_PATHNAME } from '../router'
import { removeToken } from '../utils/rememberInfo'
import { userGetUserInfo } from '../hooks/userGetUserInfo' // 自定义hook 获取用户信息
import { logoutReducer } from '../store/userReducer'

const UserInfo: FC = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()

  // 使用自定义hook可全局管理用户信息
  const { nickname, username } = userGetUserInfo()

  // 退出
  const logout = () => {
    dispatch(logoutReducer()) // 退出登录时候清空redux user 数据
    removeToken() // 清除token
    message.success('退出成功')
    nav(LOGIN_PATHNAME)
  }

  const UserInfo = (
    <div>
      <span style={{ color: '#e8e8e8' }}>
        <UserOutlined />
        {nickname}
      </span>
      <Button type="link" onClick={logout}>
        退出
      </Button>
    </div>
  )

  const Login = <Link to={LOGIN_PATHNAME}>登录</Link>

  return <div>{username ? UserInfo : Login}</div>
}
export default UserInfo
