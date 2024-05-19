/**
 * @description 记住密码
 */
const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'
const TOKEN_KEY = 'USER_TOKEN'

/**
 * 记住用户信息
 * @param username 用户名
 * @param password 密码
 */
export const rememberUser = (username: string, password: string) => {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}

/**
 * 删除用户表单信息
 * 从localStorage中移除用户名和密码的存储项
 */
export const deleteUserForm = () => {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

/**
 * 从本地存储中获取用户信息
 * @returns 包含用户名和密码的对象
 */
export const getUserInfoFormStorage = () => {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  }
}

// 设置 获取 删除token
export const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token)
export const getToken = () => localStorage.getItem(TOKEN_KEY) || ''
export const removeToken = () => localStorage.removeItem(TOKEN_KEY)
