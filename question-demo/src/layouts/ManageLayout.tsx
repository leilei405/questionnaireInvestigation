import React, { FC } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Button, Space, Divider, message } from 'antd'
import { useRequest } from 'ahooks'
import { BarsOutlined, PlusOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'
import { createQuestionServices } from '../services/question'
import styles from './ManageLayout.module.scss'
const ManageLayout: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  // 创建问卷 Ajax 方式
  // const createQuestion = async () => {
  //   setLoading(true)
  //   const data = await createQuestionServices()
  //   const { id } = data || {}
  //   console.log(id)

  //   if (id) {
  //     nav(`/question/edit/${id}`) // 跳转到新建问卷的编辑页
  //     message.success('创建成功')
  //   }
  //   setLoading(false)
  // }

  // 使用useRequest重构
  const {
    loading,
    // error,
    run: createQuestion,
  } = useRequest(createQuestionServices, {
    manual: true, // 手动触发
    onSuccess(res) {
      // 成功之后的回调  onSuccess
      nav(`/question/edit/${res.id || res._id}`) // 跳转到新建问卷的编辑页
      message.success('创建成功')
    },
  })

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
