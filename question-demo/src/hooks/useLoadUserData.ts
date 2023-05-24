import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRequest } from 'ahooks'
import { getQuestionServices } from '../services/user'
import { userGetUserInfo } from './userGetUserInfo'
import { loginReducer } from '../store/userReducer'

export const useLoadUserData = () => {
  const dispatch = useDispatch()
  const [waitUserData, setWaitUserData] = useState(true)
  const { username } = userGetUserInfo()

  // 如果没有 加载username  使用ajax useRequest
  const { run } = useRequest(getQuestionServices, {
    manual: true,
    onSuccess: userInfo => {
      const { username, nickname } = userInfo
      // 存储到 redux store 中
      dispatch(loginReducer({ username, nickname }))
    },
    // 不管成功还是失败 都会执行
    onFinally: () => {
      setWaitUserData(false)
    },
  })

  // 判断当前redux store 是否存在用户信息 如果有 那么给它设置为false
  useEffect(() => {
    if (username) {
      setWaitUserData(false)
      return
    }
    run()
  }, [username])
  // ajax 加载完用户信息之后  放在redux中, 不用返回
  return {
    waitUserData,
  }
}
