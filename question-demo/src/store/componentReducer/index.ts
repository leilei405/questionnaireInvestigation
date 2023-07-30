import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import produce from 'immer'
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
  // 记录选中组件的ID
  selectedId: string
  componentList: Array<ComponentInfoType>
}

// 初始化的数据结构
const INIT_STATE: ComponentsStateType = {
  selectedId: '',
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

    // 修改 选中组件 selectId
    changeSelectId: produce((draft: ComponentsStateType, action: PayloadAction<string>) => {
      draft.selectedId = action.payload
      // immer 改变的react 不可变数据的写法  不需要再返回新的state
    }),
  },
})

// 导出actions
export const { resetComponents, changeSelectId } = componentsSlice.actions

// 导出reducer
export default componentsSlice.reducer
