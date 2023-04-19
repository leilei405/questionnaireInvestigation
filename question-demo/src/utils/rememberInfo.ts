/**
 * @description 记住密码
 */
const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'
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
