/**
 * @description  登录注册类型支持
 */
export interface LoginType {
  username: string
  password: string
  remember: boolean
}

// userINfoType 用户信息类型
export type UserType = {
  username: string
  password: string
  nickname?: string // TODO: ?  可选
}
