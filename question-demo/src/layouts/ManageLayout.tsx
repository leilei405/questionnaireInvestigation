import React, { FC, useEffect, useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Button, Space, Divider, message } from 'antd'
import { BarsOutlined, PlusOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'
import { createQuestionServices } from '../services/question'
import styles from './ManageLayout.module.scss'
const ManageLayout: FC = () => {
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()
  const { pathname } = useLocation()

  // 创建问卷
  const createQuestion = async () => {
    setLoading(true)
    const data = await createQuestionServices()
    const { id } = data || {}
    console.log(id)

    if (id) {
      nav(`/question/edit/${id}`) // 跳转到新建问卷的编辑页
      message.success('创建成功')
    }
    setLoading(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            disabled={loading}
            type="primary"
            size="large"
            onClick={createQuestion}
            icon={<PlusOutlined />}
          >
            新建问卷
          </Button>
          <Divider />
          <Button
            type={pathname.startsWith('/manage/list') ? 'primary' : 'text'}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => nav('/manage/list')}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/star') ? 'primary' : 'text'}
            size="large"
            icon={<StarOutlined />}
            onClick={() => nav('/manage/star')}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/trash') ? 'primary' : 'text'}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => nav('/manage/trash')}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}
export default ManageLayout
