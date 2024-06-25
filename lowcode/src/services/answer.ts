import { post } from './ajax'

// 类型定义放底下吧
type AnswerProps = { [key: string]: any }

export async function postAnswer(answer: AnswerProps) {
  const url = '/api/answer'
  const data = await post(url, answer)
  return data
}
