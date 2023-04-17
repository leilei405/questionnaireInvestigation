import React, { FC, useState } from 'react'
import type { ChangeEvent } from 'react'
import { Input } from 'antd'
const { Search } = Input
const ListSearch: FC = () => {
  const [keyWords, setKeyWords] = useState('')
  const handleSearch = (value: string) => {
    console.log(value, '---value--')
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyWords(e.target.value)
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
