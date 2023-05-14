/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { message } from 'antd'
const instance = axios.create({
  timeout: 10 * 1000,
})

// 请求拦截器  统一处理errno msg
instance.interceptors.response.use(res => {
  const resData = (res.data || {}) as ResType
  const { errno, data, msg } = resData
  if (errno !== 0) {
    if (msg) {
      message.error(msg)
    }
    throw new Error(msg)
  }
  return data as any
})
// 响应拦截器

export default instance

// 使用TS定义返回格式
export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}

export type ResDataType = {
  // key 是string  值为any类型  可索引签名
  [key: string]: any
}
