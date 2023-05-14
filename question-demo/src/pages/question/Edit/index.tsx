import React, { FC } from 'react'
import { useLoadQuestionData } from '../../../hooks/useLoadQuestionData'

const Edit: FC = () => {
  // 获取问卷详情
  const { loading, data } = useLoadQuestionData()
  return (
    <div>
      <h1>Edit</h1>
      <div>{loading ? '123' : JSON.stringify(data)}</div>
    </div>
  )
}
export default Edit
