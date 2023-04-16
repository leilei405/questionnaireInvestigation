import React, { FC, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTitle } from 'ahooks'
import styles from './List.module.scss'
import { QuestionCard } from '../../components/QuestionCard'

const dataList = [
  {
    _id: 'w1',
    title: '问卷1',
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: '4月15日 23:56',
  },
  {
    _id: 'w2',
    title: '问卷2',
    isPublished: false,
    isStar: true,
    answerCount: 3,
    createdAt: '4月16日 22:56',
  },
  {
    _id: 'w3',
    title: '问卷3',
    isPublished: true,
    isStar: false,
    answerCount: 7,
    createdAt: '4月17日 21:56',
  },
  {
    _id: 'w4',
    title: '问卷4',
    isPublished: false,
    isStar: true,
    answerCount: 1,
    createdAt: '4月18日 20:56',
  },
]
const List: FC = () => {
  useTitle('Amorous问卷 - 我的问卷')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [questionList, setQuestionList] = useState(dataList)
  // const [searchParams, setSearchParams] = useSearchParams()
  // console.log('keywords', searchParams.get('keyword')) // 字符串
  // console.log('keywordsAll', searchParams.getAll('keyword')) // 数组

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h1>我的问卷</h1>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {questionList.map(question => {
          const { _id } = question
          return <QuestionCard key={_id} {...question} />
        })}
      </div>
      <div className={styles.footer}>listStyle Footer 分页</div>
    </>
  )
}
export default List
