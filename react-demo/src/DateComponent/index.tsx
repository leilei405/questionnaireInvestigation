import React from 'react'
import { DatePicker } from 'antd'

const DateComponent = () => {
  // 禁用选择之前的日期的函数
  const disabledDate = (current: object) => {
    console.log(current)

    // 获取当前日期
    const today = new Date()
    today.setHours(0, 0, 0, 0) // 将时间设置为午夜

    // 禁用当前日期之前的所有日期
    return current && current < today
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Select a Date</h1>
      <DatePicker disabledDate={disabledDate} />
    </div>
  )
}

export default DateComponent
