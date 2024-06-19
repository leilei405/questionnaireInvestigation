import React, { useState, useEffect } from 'react'
import { Cascader } from 'antd-mobile'

// 假设有一个函数来获取数据，这里使用setTimeout模拟异步操作
const fetchData = parentId => {
  return new Promise(resolve => {
    setTimeout(() => {
      // 这里应该是从后端API获取数据
      resolve([
        { value: `1-${parentId}`, label: `选项1-${parentId}` },
        { value: `2-${parentId}`, label: `选项2-${parentId}` },
        // ...更多数据
      ])
    }, 1000)
  })
}

const CascaderWithPagination = () => {
  const [options, setOptions] = useState([
    {
      value: '0',
      label: '请选择',
      children: [],
    },
  ])

  // 加载数据的函数
  const loadData = async selectedOptions => {
    const targetOption = selectedOptions[selectedOptions.length - 1]
    targetOption.loading = true
    const newData = await fetchData(targetOption.value)
    targetOption.children = newData
    targetOption.loading = false
    setOptions([...options])
  }

  // 渲染级联选择器
  return <Cascader options={options} loadData={loadData} changeOnSelect />
}

export default CascaderWithPagination
