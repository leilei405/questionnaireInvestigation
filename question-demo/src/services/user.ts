/* eslint-disable @typescript-eslint/no-explicit-any */
import http from './http'
import type { ResDataType } from './http'

// 定义查询参数类型
type UserType = {
  username: string
  password: string
  nickname?: string // TODO: ?  可选
}

// 获取用户信息
export const getQuestionServices = async (): Promise<ResDataType> => {
  const url = `/api/user/info`
  const data = (await http.get(url)) as ResDataType
  return data
}

// 登录
export const loginServices = async ({ username, password }: UserType): Promise<ResDataType> => {
  const url = `/api/user/login`
  const body = { username, password }
  const data = (await http.post(url, { body })) as ResDataType
  return data
}

// 注册
export const registerServices = async ({
  username,
  password,
  nickname,
}: UserType): Promise<ResDataType> => {
  const url = `/api/user/register`
  const body = { username, password, nickname: nickname || username }
  const data = (await http.post(url, { body })) as ResDataType
  return data
}
