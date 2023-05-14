/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import { useTitle } from 'ahooks'
import { Typography, Spin } from 'antd'
import styles from './common.module.scss'
import ListSearch from '../../components/ListSearch'
import { QuestionCard } from '../../components/QuestionCard'
// import { queryQuestionListServices } from '../../services/question'
import { useLoadQuestionList } from '../../hooks/useLoadQuestionList'
const { Title } = Typography

const List: FC = () => {
  useTitle('Amorous - 我的问卷')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [searchParams, setSearchParams] = useSearchParams()
  // console.log('keywords', searchParams.get('keyword')) // 字符串
  // console.log('keywordsAll', searchParams.getAll('keyword')) // 数组

  // 获取列表数据 普通版 Ajax
  // const [questionList, setQuestionList] = useState([])
  // const [total, setTotal] = useState(0)
  // const queryQuestionList = async () => {
  //   const data = await queryQuestionListServices()
  //   const { list = [], total = 0 } = data
  //   setQuestionList(list)
  //   setTotal(total)
  // }

  // 获取列表数据 useRequest版
  // const { data = {}, loading } = useRequest(queryQuestionListServices)

  // 自定义hook 版本
  const { data = {}, loading } = useLoadQuestionList()
  const { list = [], total = 0 } = data
  // useEffect(() => {
  //   queryQuestionList()
  // }, [])
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
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
        {!loading &&
          list.length > 0 &&
          list.map((question: any) => {
            const { _id } = question
            return <QuestionCard key={_id} {...question} />
          })}
      </div>
      <div className={styles.footer}>加载更多</div>
    </>
  )
}
export default List
