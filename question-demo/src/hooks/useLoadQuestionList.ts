import { useRequest } from 'ahooks'
import { useSearchParams } from 'react-router-dom'
import { queryQuestionListServices } from '../services/question'
import { LIST_SEARCH_PARAM_KEY } from '../constant'
export const useLoadQuestionList = () => {
  const [searchParams] = useSearchParams()

  // 关键字搜索
  const queryParams = async () => {
    const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    const data = await queryQuestionListServices({ keyword })
    return data
  }

  // useRequest  refreshDeps(配置项)
  const { data, loading, error } = useRequest(queryParams, {
    refreshDeps: [searchParams], // 刷新依赖项
  })

  return {
    data,
    loading,
    error,
  }
}
