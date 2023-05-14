// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionServices } from '../services/question'

export const useLoadQuestionData = () => {
  const { id = '' } = useParams()

  // 原Ajax 请求
  // const [loading, setLoading] = useState(true)
  // const [questionData, setQuestionData] = useState({})
  // const getData = async () => {
  //   const data = await getQuestionServices(id)
  //   setQuestionData(data)
  //   setLoading(false)
  // }
  // useEffect(() => {
  //   getData()
  // }, [])

  // 使用  useRequest 重构
  const load = async () => {
    const data = await getQuestionServices(id)
    return data
  }
  const { data, error, loading } = useRequest(load)
  return {
    loading,
    data,
    error,
  }
}
