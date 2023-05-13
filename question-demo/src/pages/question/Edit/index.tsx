import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getQuestionServices } from '../../../services/question'

const Edit: FC = () => {
  const { id = '' } = useParams()
  useEffect(() => {
    getQuestion()
  }, [])
  const getQuestion = async () => {
    const data = await getQuestionServices(id)
    console.log(data)
  }
  return (
    <div>
      <h1>Edit</h1>
      <p>{id}</p>
    </div>
  )
}
export default Edit
