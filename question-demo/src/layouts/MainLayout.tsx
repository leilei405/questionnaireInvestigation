import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import styles from './MainLayout.module.scss'
import Logo from '../components/Logo'
import UserInfo from '../components/UserInfo'
import { useLoadUserData } from '../hooks/useLoadUserData' // 异步加载获取用户信息
import { useNavPage } from '../hooks/useNavPage' // 用户是否登录自定义hook
const { Header, Footer, Content } = Layout
const MainLayout: FC = () => {
  const { waitUserData } = useLoadUserData()
  useNavPage(waitUserData)
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.main}>
        {waitUserData ? (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Spin />
          </div>
        ) : (
          <Outlet />
        )}
      </Content>
      <Footer className={styles.footer}>
        Amorous 问卷调查 在线问卷 &copy;2023 - author Amorous
      </Footer>
    </Layout>
  )
}
export default MainLayout
