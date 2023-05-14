import { useRequest } from 'ahooks'
import { useSearchParams } from 'react-router-dom'
import { queryQuestionListServices } from '../services/question'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

// 定义关键词类型
type OptionType = {
  isStar: boolean
  isDeleted: boolean
}
export const useLoadQuestionList = (option: Partial<OptionType> = {}) => {
  const { isStar, isDeleted } = option
  const [searchParams] = useSearchParams()

  // 关键字搜索
  const queryParams = async () => {
    const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    const data = await queryQuestionListServices({
      keyword,
      isStar,
      isDeleted,
    })
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
