import React, { FC, useState } from 'react'
import { Button, Space, Divider, Tag, Popconfirm, message } from 'antd'
import { useNavigate, Link } from 'react-router-dom'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { updateQuestionServices } from '../services/question'
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
  const [isStarted, setIsStarted] = useState(isStar)

  const nav = useNavigate()
  const copyHandler = () => {
    message.success('复制成功')
  }
  const deleteQuestion = () => {
    message.success('删除成功')
  }

  // 点击修改标星
  const { run: updateQuestionIsStart, loading: changeStartLoading } = useRequest(
    async () => {
      const data = await updateQuestionServices(_id, { isStar: !isStarted })
      return data
    },
    {
      manual: true, // 手动模式
      onSuccess: () => {
        setIsStarted(!isStarted) // 更新完成
        if (!isStarted) return message.success('标星成功')
        return message.warning('取消标星')
      },
    }
  )
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
            <Space>
              {isStarted && <StarOutlined style={{ color: 'red' }} />}
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
            <Button
              type="text"
              icon={<StarOutlined style={isStarted ? { color: 'yellowgreen' } : {}} />}
              size="small"
              onClick={updateQuestionIsStart}
              disabled={changeStartLoading}
            >
              {isStarted ? '取消标星' : '标星'}
            </Button>
            <Popconfirm
              title="确定复制该问卷吗?"
              okText="确定"
              cancelText="取消"
              onConfirm={copyHandler}
            >
              <Button type="text" icon={<CopyOutlined />} size="small">
                复制
              </Button>
            </Popconfirm>
            <Popconfirm
              title="确定删除该问卷吗?"
              okText="确定"
              cancelText="取消"
              onConfirm={deleteQuestion}
            >
              <Button type="text" icon={<DeleteOutlined />} size="small">
                删除
              </Button>
            </Popconfirm>
          </Space>
        </div>
      </div>
    </div>
  )
}
