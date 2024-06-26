import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import produce from 'immer'
import { nanoid } from 'nanoid'
import { cloneDeep } from 'lodash'
import { arrayMove } from '@dnd-kit/sortable'

import { ComponentPropsType } from '../../components/questionComponents'
import { getNextSelectedId, insertNewComponent } from './utils'

// 定义每个组件的类型
export type ComponentInfoType = {
  fe_id: string // 前端组件ID
  type: string // 组件类型
  title: string // 组件标题
  isHidden?: boolean // 是否隐藏组件
  isLocked?: boolean // 是否锁定组件
  props: ComponentPropsType // 组件属性
}

// 当前模块存储的列表
export type ComponentsStateType = {
  // 记录选中组件的ID
  selectedId: string
  componentList: Array<ComponentInfoType>
  copiedComponent: ComponentInfoType | null // null表示没有拷贝信息
}

// 初始化的数据结构
const INIT_STATE: ComponentsStateType = {
  selectedId: '',
  componentList: [],
  copiedComponent: null, // 存储复制的组件
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
        insertNewComponent(draft, newComponent)
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

    // 删除选中组件
    removeSelectedComponent: produce((draft: ComponentsStateType) => {
      const { componentList = [], selectedId: removeId } = draft

      // 重新计算 selectedId
      const newSelectedId = getNextSelectedId(removeId, componentList)
      draft.selectedId = newSelectedId

      const index = componentList.findIndex(c => c.fe_id === removeId)
      componentList.splice(index, 1)
    }),

    // 隐藏显示组件
    changeComponentHidden: produce(
      (draft: ComponentsStateType, action: PayloadAction<{ fe_id: string; isHidden: boolean }>) => {
        const { componentList = [] } = draft
        const { fe_id, isHidden } = action.payload

        // 重新计算 selectedId
        // 如果组件为显示状态  true
        let newSelectedId = ''
        if (isHidden) {
          // 要隐藏
          newSelectedId = getNextSelectedId(fe_id, componentList)
        } else {
          newSelectedId = fe_id
        }
        // const newSelectedId = getNextSelectedId(fe_id, componentList)
        draft.selectedId = newSelectedId

        const curComp = componentList.find(c => c.fe_id === fe_id)
        if (curComp) {
          curComp.isHidden = isHidden
        }
      }
    ),

    // 是否锁定组件
    toggleComponentLocked: produce(
      (draft: ComponentsStateType, action: PayloadAction<{ fe_id: string }>) => {
        const { fe_id } = action.payload
        const curComp = draft.componentList.find(c => c.fe_id === fe_id)
        if (curComp) {
          curComp.isLocked = !curComp.isLocked
        }
      }
    ),

    // 拷贝当前选中的组件
    copySelectedIdComponent: produce((draft: ComponentsStateType) => {
      // draft 找到当前选中的ID
      const { selectedId, componentList = [] } = draft
      const selectedComponent = componentList.find(c => c.fe_id === selectedId)
      if (selectedComponent == null) return
      draft.copiedComponent = cloneDeep(selectedComponent)
    }),

    // 粘贴复制的组件
    pasteCopiedComponent: produce((draft: ComponentsStateType) => {
      const { copiedComponent } = draft
      if (copiedComponent == null) return

      // 需要修改fe_id
      copiedComponent.fe_id = nanoid()

      // 插入copiedComponent
      insertNewComponent(draft, copiedComponent)
    }),

    // 选中上一个组件
    selectPrevComponent: produce((draft: ComponentsStateType) => {
      //
      const { selectedId, componentList } = draft
      const selectedIndex = componentList.findIndex(c => c.fe_id === selectedId)
      if (selectedIndex < 0) return
      //   message.warning('没有选中组件') // 未选中组件
      // }
      if (selectedIndex <= 0) return
      //   message.warning('已经是第一个组件了') // 已经选中了第一个,无法在向上选中
      // }

      // componentList[selectedIndex - 1].fe_id 选中当前组件的上一个组件
      draft.selectedId = componentList[selectedIndex - 1]?.fe_id
    }),

    // 选中下一个组件
    selectNextComponent: produce((draft: ComponentsStateType) => {
      const { selectedId, componentList } = draft
      const selectedIndex = componentList.findIndex(c => c.fe_id === selectedId)
      if (selectedIndex < 0) return
      if (selectedIndex + 1 === componentList.length) return
      draft.selectedId = componentList[selectedIndex + 1]?.fe_id
    }),

    // 修改组件标题
    changeComponentTitle: produce(
      (draft: ComponentsStateType, action: PayloadAction<{ fe_id: string; title: string }>) => {
        const { title, fe_id } = action.payload
        const curComp = draft.componentList.find(c => c.fe_id === fe_id)
        if (curComp) curComp.title = title
      }
    ),

    // 移动组件
    moveComponent: produce(
      (
        draft: ComponentsStateType,
        action: PayloadAction<{ oldIndex: number; newIndex: number }>
      ) => {
        const { componentList: curComponentList } = draft
        const { oldIndex, newIndex } = action.payload
        draft.componentList = arrayMove(curComponentList, oldIndex, newIndex)
      }
    ),
  },
})

// 导出actions
export const {
  resetComponents,
  changeSelectId,
  addComponent,
  changeComponentProps,
  removeSelectedComponent,
  changeComponentHidden,
  toggleComponentLocked,
  copySelectedIdComponent,
  pasteCopiedComponent,
  selectPrevComponent,
  selectNextComponent,
  changeComponentTitle,
  moveComponent,
} = componentsSlice.actions

// 导出reducer
export default componentsSlice.reducer
