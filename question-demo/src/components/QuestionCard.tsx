import React, { FC } from 'react'
import { Button, Space, Divider, Tag } from 'antd'
import { useNavigate, Link } from 'react-router-dom'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import styles from './QuestionCard.module.scss'

type PropsType = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createdAt: string
}

export const QuestionCard: FC<PropsType> = props => {
  const { _id, title, createdAt, answerCount, isPublished, isStar } = props
  const nav = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? <Tag color="cyan">已发布</Tag> : <Tag color="red">未发布</Tag>}
            <span>答卷: {answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider type="horizontal" style={{ margin: '12px 0' }} />

      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/stat/${_id}`)}
              disabled={!isPublished}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button type="text" icon={<StarOutlined />} size="small">
              {isStar ? '取消标星' : '标星'}
            </Button>
            <Button type="text" icon={<CopyOutlined />} size="small">
              复制
            </Button>
            <Button type="text" icon={<DeleteOutlined />} size="small">
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
