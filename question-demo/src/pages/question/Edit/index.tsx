import React, { FC } from 'react'
import { useLoadQuestionData } from '../../../hooks/useLoadQuestionData'

const Edit: FC = () => {
  // 获取问卷详情
  const { loading, questionData } = useLoadQuestionData()
  return (
    <div>
      <h1>Edit</h1>
      <div>{loading ? '123' : JSON.stringify(questionData)}</div>
    </div>
  )
}
export default Edit
