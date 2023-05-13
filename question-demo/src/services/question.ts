import http from './http'
import type { ResDataType } from './http'

export async function getQuestionServices(id: string): Promise<ResDataType> {
  const url = `/api/question/${id}`
  const data = (await http.get(url)) as ResDataType
  return data
}
