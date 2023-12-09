import http from './http'
import type { ResDataType } from './http'

export async function getQuestionStatListService(
  questionId: string,
  opt: { page: number; pageSize: number }
): Promise<ResDataType> {
  const url = `/api/stat/${questionId}`
  const data = (await http.get(url, { params: opt })) as ResDataType
  return data
}
