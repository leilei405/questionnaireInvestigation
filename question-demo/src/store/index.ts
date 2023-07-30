import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserStateType } from './userReducer'
import componentReducer, { ComponentsStateType } from './componentReducer'
export type StateType = {
  user: UserStateType
  components: ComponentsStateType
}

export default configureStore({
  reducer: {
    user: userReducer, // 用户信息
    components: componentReducer, // 组件列表
    // 模块扩展
  },
})
