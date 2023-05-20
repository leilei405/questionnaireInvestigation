/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect, useState, useRef, useMemo } from 'react'
import { useTitle, useDebounceFn, useRequest } from 'ahooks'
import { Typography, Spin, Empty } from 'antd'
import { useSearchParams } from 'react-router-dom'
import styles from './common.module.scss'
import ListSearch from '../../components/ListSearch'
import { QuestionCard } from '../../components/QuestionCard'
import { queryQuestionListServices } from '../../services/question'
import { LIST_PAGE_SIZE, LIST_SEARCH_PARAM_KEY } from '../../constant'
// import { useLoadQuestionList } from '../../hooks/useLoadQuestionList'
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
  // const { data = {}, loading } = useLoadQuestionList()
  // const { list = [], total = 0 } = data
  // useEffect(() => {
  //   queryQuestionList()
  // }, [])

  // 下滑加载更多
  const [started, setStarted] = useState(false) // 是否已经开始加载(防抖,有延迟时间)
  const [page, setPage] = useState(1) // List 内部的数据 不在URl 参数中体现
  const [list, setList] = useState([]) // 全部的列表数据,上划加载更多,累计
  const [total, setTotal] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  // const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams() // url参数, 虽然没有page - pageSize 但是有keyword

  // 判断上划之后还是否有数据
  const haveMoreData = total > list.length

  // 触发加载
  // const tryLoadMore = () => {
  //   console.log('LoadMore')
  // }

  // 监听keyword  重置信息
  const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
  useEffect(() => {
    setStarted(false)
    setPage(1)
    setList([])
    setTotal(0)
  }, [keyword])

  // 真正加载的数据
  const { run: loadData, loading } = useRequest(
    async () => {
      const data = await queryQuestionListServices({
        page,
        pageSize: LIST_PAGE_SIZE,
        keyword,
      })
      return data
    },
    {
      manual: true,
      onSuccess: result => {
        const { total = 0, list: listData = [] } = result
        setList(list.concat(listData)) // 累计
        setTotal(total)
        setPage(page + 1)
      },
    }
  )

  // 防抖 使用ahooks中的内置hooks useDebounceFn
  // 尝试去触发加载数据
  const { run: tryLoadMore } = useDebounceFn(
    () => {
      const elem = containerRef.current
      if (elem == null) return
      const domRect = elem.getBoundingClientRect()
      if (domRect == null) return
      const { bottom } = domRect
      if (bottom <= document.body.clientHeight) {
        loadData() // 真正加载数据
        setStarted(true)
      }
    },
    {
      wait: 1000,
    }
  )

  // 当页面加载或者URL参数(keyword)改变时候  触发加载
  useEffect(() => {
    tryLoadMore()
  }, [searchParams])

  // 页面滑动的时候加载
  useEffect(() => {
    if (haveMoreData) {
      window.addEventListener('scroll', tryLoadMore)
    }
    return () => {
      // searchParams 变化之前解绑事件
      window.removeEventListener('scroll', tryLoadMore) // 解绑事件
    }
  }, [searchParams, haveMoreData])

  // 使用useMemo缓存
  const LoadMoreContentElem = useMemo(() => {
    if (!started || loading) return <Spin />
    if (total === 0) return <Empty description="暂无数据" />
    if (!haveMoreData) return <span>....没有更多了</span>
    return <span>开始加载下一页</span>
  }, [started, loading, haveMoreData])

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
        {/* <div style={{ height: '2000px' }}></div> */}
        {/* {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )} */}
        {list.length > 0 &&
          list.map((question: any) => {
            const { _id } = question
            return <QuestionCard key={_id} {...question} />
          })}
      </div>
      <div className={styles.footer}>
        <div ref={containerRef}>
          {/* <LoadMoreContentElem /> */}
          {LoadMoreContentElem}
        </div>
      </div>
    </>
  )
}
export default List
