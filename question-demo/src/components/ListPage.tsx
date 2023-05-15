import React, { FC, useEffect, useState } from 'react'
import { Pagination } from 'antd'
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom'
import { LIST_PAGE_PARAM_KEY, LIST_PAGE_SIZE, LIST_PAGE_SIZE_PARAM_KEY } from '../constant'
type PropsType = {
  total: number
}

export const ListPage: FC<PropsType> = (props: PropsType) => {
  const { total } = props
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(LIST_PAGE_SIZE)
  const [searchParams] = useSearchParams()

  // 从URL参数中获取pageSize的值 同步到组件中
  useEffect(() => {
    const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || '') || 1
    const pageSize = parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || '') || LIST_PAGE_SIZE
    setCurrent(page)
    setPageSize(pageSize)
  }, [searchParams])

  // pageSize page 改变的时候, 跳转页面(改变URL参数)
  const nav = useNavigate()
  const { pathname } = useLocation()
  const handleClick = (page: number, pageSize: number) => {
    // console.log(page, pageSize, '---page---')
    searchParams.set(LIST_PAGE_PARAM_KEY, page.toString())
    searchParams.set(LIST_PAGE_SIZE_PARAM_KEY, pageSize.toString())
    nav({
      pathname,
      search: searchParams.toString(),
    })
  }

  return <Pagination current={current} pageSize={pageSize} total={total} onChange={handleClick} />
}
