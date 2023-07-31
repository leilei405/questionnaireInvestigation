import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Space, Typography } from 'antd'
import { LeftOutlined, CheckOutlined } from '@ant-design/icons'
import styles from './EditHeader.module.scss'

const { Title } = Typography
const EditHeader: FC = () => {
  const nav = useNavigate()
  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button onClick={() => nav(-1)} type="link" icon={<LeftOutlined />}>
              返回
            </Button>
            <Title>标题</Title>
          </Space>
        </div>
        <div className={styles.main}>中间</div>
        <div className={styles.right}>
          <Space>
            <Button icon={<CheckOutlined />}>保存</Button>
            <Button type="primary">发布</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default EditHeader
