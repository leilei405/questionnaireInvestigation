import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
const { Header, Footer, Content } = Layout
import styles from './MainLayout.module.scss'
import Logo from '../components/Logo'
const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>登录</div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>
        Amorous 问卷调查 在线问卷 &copy;2023 - author Amorous
      </Footer>
    </Layout>
  )
}
export default MainLayout
