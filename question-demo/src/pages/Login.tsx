import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
export const Login: FC = () => {
  const nav = useNavigate()
  return (
    <div>
      <h1>Login</h1>
      <div>
        <button onClick={() => nav(-1)}>返回Home</button>
      </div>
    </div>
  )
}
export default Login
