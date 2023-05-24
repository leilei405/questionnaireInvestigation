import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type UserStateType = {
  username: string
  nickname: string
}

const INIT_STATE: UserStateType = {
  username: '',
  nickname: '',
}

export const userSlice = createSlice({
  name: 'user1', // 模块名称
  initialState: INIT_STATE,
  reducers: {
    loginReducer: (state: UserStateType, action: PayloadAction<UserStateType>) => {
      return action.payload // 设置username nickname 到redux store  // 用不到immer
    },
    logoutReducer: () => INIT_STATE,
  },
})

export const { loginReducer, logoutReducer } = userSlice.actions

export default userSlice.reducer
