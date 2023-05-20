/* eslint-disable @typescript-eslint/no-explicit-any */
import http from './http'
import type { ResDataType } from './http'

// 定义查询参数类型
type SearchOption = {
  keyword: string
  isStar: boolean
  isDeleted: boolean
  page: number
  pageSize: number
}

// 获取单个问卷信息 GET
export const getQuestionServices = async (id: string): Promise<ResDataType> => {
  const url = `/api/question/${id}`
  const data = (await http.get(url)) as ResDataType
  return data
}

// 创建问卷调查 POST
export const createQuestionServices = async (): Promise<ResDataType> => {
  const url = `/api/question`
  const data = (await http.post(url)) as ResDataType
  return data
}

// 获取问卷列表 GET
export const queryQuestionListServices = async (
  option: Partial<SearchOption> = {}
): Promise<ResDataType> => {
  const url = `/api/question`
  const data = (await http.get(url, {
    params: option,
  })) as ResDataType
  return data
}

// 更新标星问卷
export const updateQuestionServices = async (
  id: string,
  option: { [key: string]: any }
): Promise<ResDataType> => {
  const url = `/api/question/${id}`
  const data = (await http.patch(url, option)) as ResDataType
  return data
}

// 复制问卷
export const copyQuestionServices = async (id: string): Promise<ResDataType> => {
  const url = `/api/question/duplicate/${id}`
  const data = (await http.post(url)) as ResDataType
  return data
}
