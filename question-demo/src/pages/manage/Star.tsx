import React, { FC, useState } from 'react'
import { Empty, Typography } from 'antd'
import { useTitle } from 'ahooks'
import styles from './common.module.scss'
import { QuestionCard } from '../../components/QuestionCard'
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
const Star: FC = () => {
  useTitle('Amorous - 星标问卷')
  const [questionList, setQuestionList] = useState(dataList)
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="没有数据" />}
        {questionList.length > 0 &&
          questionList.map(question => {
            const { _id } = question
            return <QuestionCard key={_id} {...question} />
          })}
      </div>
      {!dataList.length && <div className={styles.footer}>分页</div>}
    </div>
  )
}
export default Star
