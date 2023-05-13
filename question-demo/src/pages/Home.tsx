import React, { FC, useEffect } from 'react'
import styles from './Home.module.scss'
import { Button, Typography } from 'antd'
import { useNavigate, Link } from 'react-router-dom'
import { MANAGE_INDEX_PATHNAME } from '../router'
const { Title, Paragraph } = Typography
// import '../_mock/index'
// import axios from 'axios'
const Home: FC = () => {
  const nav = useNavigate()

  // react18 开发环境会执行俩次
  // useEffect(() => {
  // mock.js 只能劫持 XMLHttpRequest, 不能劫持fetch
  // axios 内部使用 XMLHttpRequest API, 没用fetch
  // axios.get('/api/test').then(res => {
  //   console.log(res.data)
  // })
  // fetch('/api/test')
  //   .then(res => {
  //     res.json()
  //   })
  //   .then(data => {
  //     console.log(data)
  //   })
  // }, [])

  useEffect(() => {
    // http://localhost:3001/api/question   服务端
    // http://localhost:3000  前端
    // 跨域 mock
    // create-react-app webpack devServer 代理
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>已累计创建 1000份, 发布问卷1000份, 收到答卷10000</Paragraph>
        <div>
          <Button type="primary" onClick={() => nav(MANAGE_INDEX_PATHNAME)}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Home
