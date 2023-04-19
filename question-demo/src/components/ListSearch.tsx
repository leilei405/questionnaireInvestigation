import React, { FC, useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { Input } from 'antd'
import { LIST_SEARCH_PARAM_KEY } from '../constant'
const { Search } = Input
const ListSearch: FC = () => {
  const [keyWords, setKeyWords] = useState('')
  const nav = useNavigate()
  const { pathname } = useLocation()
  // 获取url参数, 并且设置 input value
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const newValue = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setKeyWords(newValue)
  }, [searchParams])

  // change事件
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyWords(e.target.value)
  }

  // 搜索
  const handleSearch = (value: string) => {
    // 跳转页面参数
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    })
  }

  return (
    <div>
      <Search
        value={keyWords}
        allowClear
        onChange={handleChange}
        onSearch={handleSearch}
        style={{ width: '300px' }}
        placeholder="输入关键字"
      />
    </div>
  )
}

export default ListSearch
