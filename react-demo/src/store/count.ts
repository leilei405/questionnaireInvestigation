import { createSlice } from '@reduxjs/toolkit'

const INIT_STATE = 100 // 初始值
const countSlice = createSlice({
  name: 'count', // 命名空间 唯一性
  initialState: INIT_STATE,
  reducers: {
    increase(state: number) {
      return state + 1
    },
    decrease(state: number) {
      return state - 1
    },
  },
})

// 导出所有的action
export const { increase, decrease } = countSlice.actions

// 导出reducer
export default countSlice.reducer
