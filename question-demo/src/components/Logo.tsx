import React, { FC, useEffect, useState } from 'react'
import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'
import { userGetUserInfo } from '../hooks/userGetUserInfo' // 自定义hook 获取用户信息
import { HOME_PATHNAME, MANAGE_INDEX_PATHNAME } from '../router'

const { Title } = Typography
const Logo: FC = () => {
  const { username } = userGetUserInfo()

  const [pathname, setPathName] = useState(HOME_PATHNAME)

  // 监听用户是否已经登录  通过username判断
  useEffect(() => {
    if (username) {
      setPathName(MANAGE_INDEX_PATHNAME)
    }
  }, [username])

  return (
    <div className={styles.container}>
      <Link to={pathname}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>Amorous 问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
