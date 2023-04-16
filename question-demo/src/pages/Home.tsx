import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Home: FC = () => {
  const nav = useNavigate()
  const clickHandler = () => {
    nav('/login')
  }
  return (
    <div>
      <h1>Home</h1>
      <div>
        <button onClick={clickHandler}>登录跳转Login</button>
        <Link to="/register">链接跳转注册页</Link>
      </div>
    </div>
  )
}
export default Home
