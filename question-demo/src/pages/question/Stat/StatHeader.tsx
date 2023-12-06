import React from 'react'
import { Button, Space, Typography } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './StatHeader.module.scss'
import { LeftOutlined } from '@ant-design/icons'
import useGetPageInfo from '../../../hooks/useGetPageInfo'

const { Title } = Typography
const StatHeader = () => {
  const nav = useNavigate()
  const { id } = useParams()
  const { title } = useGetPageInfo()
  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space align="baseline">
            <Button icon={<LeftOutlined />} onClick={() => nav(-1)} type="link">
              返回
            </Button>
            <Title level={5}>{title}</Title>
          </Space>
        </div>
        <div className={styles.main}>main</div>
        <div className={styles.right}>
          <Button type="primary" onClick={() => nav(`/question/edit/${id}`)}>
            编辑
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StatHeader
