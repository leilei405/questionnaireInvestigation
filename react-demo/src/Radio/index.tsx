import React, { useState } from 'react'
import type { RadioChangeEvent } from 'antd'
import { Radio, Space } from 'antd'

const RadioDemo: React.FC = () => {
  const [value, setValue] = useState(1)

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Space>
    </Radio.Group>
  )
}

export default RadioDemo
