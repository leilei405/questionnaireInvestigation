import React, { FC } from 'react'
import { useRequest } from 'ahooks'
import { Link, useNavigate } from 'react-router-dom'
import { Button, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { LOGIN_PATHNAME } from '../router'
import { getQuestionServices } from '../services/user'
import { removeToken } from '../utils/rememberInfo'

const UserInfo: FC = () => {
  const nav = useNavigate()
  const { data } = useRequest(getQuestionServices)
  const { nickname, username } = data || {}

  // 退出
  const logout = () => {
    removeToken()
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
