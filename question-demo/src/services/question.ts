import http from './http'
import type { ResDataType } from './http'

// 获取单个问卷信息
export async function getQuestionServices(id: string): Promise<ResDataType> {
  const url = `/api/question/${id}`
  const data = (await http.get(url)) as ResDataType
  return data
}

// 创建问卷调查
export async function createQuestionServices(): Promise<ResDataType> {
  const url = `/api/question`
  const data = (await http.post(url)) as ResDataType
  return data
}
