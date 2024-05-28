import React, { FC, useEffect } from 'react'
import styles from './Home.module.scss'
import { Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MANAGE_INDEX_PATHNAME } from '../router'
const { Title, Paragraph } = Typography
// import '../_mock/index'
import axios from 'axios'
const Home: FC = () => {
  const nav = useNavigate()

  useEffect(() => {
    axios.get('/api/test').then(res => {
      console.log(res.data)
    })
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
