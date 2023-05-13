import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQuestionServices } from '../services/question'

export const useLoadQuestionData = () => {
  const { id = '' } = useParams()
  const [loading, setLoading] = useState(true)
  const [questionData, setQuestionData] = useState({})
  const getData = async () => {
    const data = await getQuestionServices(id)
    setQuestionData(data)
    setLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])

  return {
    loading,
    questionData,
  }
}
