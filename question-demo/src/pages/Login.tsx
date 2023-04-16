import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
export const Login: FC = () => {
  const nav = useNavigate()
  return (
    <div>
      <h1>Login</h1>
      <div>
        <Button type="primary" onClick={() => nav(-1)}>
          返回Home
        </Button>
      </div>
    </div>
  )
}
export default Login
