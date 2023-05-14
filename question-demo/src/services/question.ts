import http from './http'
import type { ResDataType } from './http'

// 获取单个问卷信息 GET
export async function getQuestionServices(id: string): Promise<ResDataType> {
  const url = `/api/question/${id}`
  const data = (await http.get(url)) as ResDataType
  return data
}

// 创建问卷调查 POST
export async function createQuestionServices(): Promise<ResDataType> {
  const url = `/api/question`
  const data = (await http.post(url)) as ResDataType
  return data
}

// 获取问卷列表 GET
export async function queryQuestionListServices(): Promise<ResDataType> {
  const url = `/api/question`
  const data = (await http.get(url)) as ResDataType
  return data
}
