/**
 * @description 记住密码
 */
const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'
const TOKEN_KEY = 'USER_TOKEN'
export const rememberUser = (username: string, password: string) => {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}

export const deleteUserForm = () => {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

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
