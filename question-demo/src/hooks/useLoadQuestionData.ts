// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { useDispatch } from 'react-redux'
import { getQuestionServices } from '../services/question'
import { resetComponents } from '../store/componentReducer'
export const useLoadQuestionData = () => {
  const { id = '' } = useParams()
  const dispatch = useDispatch()

  const { data, loading, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error('没有问卷 id')
      const data = await getQuestionServices(id)
      return data
    },
    {
      manual: true,
    }
  )

  useEffect(() => {
    if (!data) return
    const { title = '', componentList = [] } = data
    // 把 componentList 存储到Redux store 中
    dispatch(resetComponents(componentList))
  }, [])

  // 判断id 变化,执行 ajax 加载问卷数据
  useEffect(() => {
    run(id)
  }, [id])

  return {
    loading,
    error,
  }

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
  // const load = async () => {
  //   const data = await getQuestionServices(id)
  //   return data
  // }
  // const { data, error, loading } = useRequest(load)
  // return {
  //   loading,
  //   data,
  //   error,
  // }
}
