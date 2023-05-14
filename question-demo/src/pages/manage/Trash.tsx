import React, { FC, useState } from 'react'
import { Table, Empty, Typography, Tag } from 'antd'
import { useTitle } from 'ahooks'
import styles from './common.module.scss'
// import { QuestionCard } from '../../components/QuestionCard'
import ListSearch from '../../components/ListSearch'
const { Title } = Typography
const dataList = [
  {
    _id: 'w1',
    title: '问卷1',
    isPublished: true,
    isStar: true,
    answerCount: 5,
    createdAt: '4月15日 23:56',
  },
  {
    _id: 'w2',
    title: '问卷2',
    isPublished: true,
    isStar: true,
    answerCount: 3,
    createdAt: '4月16日 22:56',
  },
  {
    _id: 'w3',
    title: '问卷3',
    isPublished: true,
    isStar: true,
    answerCount: 7,
    createdAt: '4月17日 21:56',
  },
]
const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '发布状态',
    dataIndex: 'isPublished',
    render: (isSub: boolean) => {
      return isSub ? <Tag color="cyan">已发布</Tag> : <Tag color="red">未发布</Tag>
    },
  },
  {
    title: '问卷数量',
    dataIndex: 'answerCount',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
  },
]
const Trash: FC = () => {
  useTitle('Amorous - 回收站')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [questionList, setQuestionList] = useState(dataList)
  return (
    <div>
      {/* header */}
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      {/* Table */}
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="没有数据" />}
        {questionList.length > 0 && (
          <Table pagination={false} columns={columns} dataSource={dataList} rowKey="_id" />
        )}
      </div>
    </div>
  )
}
export default Trash
