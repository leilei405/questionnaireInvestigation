import { useSelector } from 'react-redux'
import { StateType } from '../store'
import { UserStateType } from '../store/userReducer'

export const userGetUserInfo = () => {
  const { username, nickname } = useSelector<StateType>(state => state.user) as UserStateType
  return {
    username,
    nickname,
  }
}
