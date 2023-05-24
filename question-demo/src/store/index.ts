import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
export default configureStore({
  reducer: {
    user: userReducer,
    // 模块扩展
  },
})
