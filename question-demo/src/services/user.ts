/* eslint-disable @typescript-eslint/no-explicit-any */
import http from './http'
import type { ResDataType } from './http'
import { UserType } from '../types/LoginRegister'

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
