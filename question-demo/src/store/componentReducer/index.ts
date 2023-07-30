import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ComponentPropsType } from '../../components/questionComponents'

// 定义每个组件的类型
export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  props: ComponentPropsType
}

// 当前模块存储的列表
export type ComponentsStateType = {
  componentList: Array<ComponentInfoType>
}

// 初始化的数据结构
const INIT_STATE: ComponentsStateType = {
  componentList: [],
  // 其他扩展
}

export const componentsSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    // 重置所有组件
    resetComponents: (state: ComponentsStateType, action: PayloadAction<ComponentsStateType>) => {
      return action.payload
    },
  },
})

// 导出actions
export const { resetComponents } = componentsSlice.actions

// 导出reducer
export default componentsSlice.reducer
