import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { userGetUserInfo } from './userGetUserInfo'

import { MANAGE_INDEX_PATHNAME, isLoginOrRegister, LOGIN_PATHNAME, isNeedUserData } from '../router'

export const useNavPage = (waitUserData: boolean) => {
  const { username } = userGetUserInfo()
  const { pathname } = useLocation()
  const nav = useNavigate()

  useEffect(() => {
    if (waitUserData) return

    // 登录
    if (username) {
      if (isLoginOrRegister(pathname)) {
        nav(MANAGE_INDEX_PATHNAME)
      }
      return
    }

    // 未登录
    if (isNeedUserData(pathname)) {
      return
    } else {
      nav(LOGIN_PATHNAME)
    }
  }, [waitUserData, username, pathname])
}
