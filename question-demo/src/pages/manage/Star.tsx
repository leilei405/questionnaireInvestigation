/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react'
import { Empty, Spin, Typography } from 'antd'
import { useTitle } from 'ahooks'
import styles from './common.module.scss'
import { QuestionCard } from '../../components/QuestionCard'
import ListSearch from '../../components/ListSearch'
import { useLoadQuestionList } from '../../hooks/useLoadQuestionList'
const { Title } = Typography

const Star: FC = () => {
  useTitle('Amorous - 星标问卷')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [questionList, setQuestionList] = useState(dataList)
  const { data = {}, loading } = useLoadQuestionList({ isStar: true })
  const { list = [], total = 0 } = data
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {!loading && list.length === 0 && <Empty description="没有数据" />}
        {!loading &&
          list.length > 0 &&
          list.map((question: any) => {
            const { _id } = question
            return <QuestionCard key={_id} {...question} />
          })}
      </div>
      {!list.length && <div className={styles.footer}>分页</div>}
    </div>
  )
}
export default Star
