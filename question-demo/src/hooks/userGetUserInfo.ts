import { useSelector } from 'react-redux'
import { StateType } from '../store'
import { UserStateType } from '../store/userReducer'
// 直接从redux获取用户信息  避免多次请求
export const userGetUserInfo = () => {
  const { username, nickname } = useSelector<StateType>(state => state.user) as UserStateType
  return {
    username,
    nickname,
  }
}
