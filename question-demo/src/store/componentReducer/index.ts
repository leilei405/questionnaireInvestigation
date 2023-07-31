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

    // 添加新组件到画布
    addComponent: produce(
      (draft: ComponentsStateType, action: PayloadAction<ComponentInfoType>) => {
        const newComponent = action.payload
        const { selectedId, componentList } = draft
        // 找到当前选中组件的index
        const index = componentList.findIndex(component => component.fe_id === selectedId)
        // 未选中任何组件
        if (index < 0) {
          draft.componentList.push(newComponent)
        } else {
          // 选中组件插入到index后面splice(开始位置,结束位置,插入的元素)
          draft.componentList.splice(index + 1, 0, newComponent)
        }
        // 重新设置selectedId
        draft.selectedId = newComponent.fe_id
      }
    ),

    // 修改组件属性
    changeComponentProps: produce(
      (
        draft: ComponentsStateType,
        action: PayloadAction<{ fe_id: string; newProps: ComponentPropsType }>
      ) => {
        // action 中获取fe_id newProps
        const { fe_id, newProps } = action.payload

        // 当前要修改属性的组件
        const curComp = draft.componentList.find(c => c.fe_id === fe_id)
        if (curComp) {
          curComp.props = {
            ...curComp.props,
            ...newProps,
          }
        }
      }
    ),
  },
})

// 导出actions
export const { resetComponents, changeSelectId, addComponent, changeComponentProps } =
  componentsSlice.actions

// 导出reducer
export default componentsSlice.reducer
