import { ComponentInfoType, ComponentsStateType } from './index'

// 获取下一个组件id 进行重新计算
export const getNextSelectedId = (fe_id: string, componentList: ComponentInfoType[]) => {
  // 过滤隐藏的组件
  const visibleComponentList = componentList.filter(c => !c.isHidden)
  // 获取当前id 的 index
  const index = visibleComponentList.findIndex(c => c.fe_id === fe_id)
  //   没找到  没选中 返回空
  if (index < 0) return ''

  // 重新计算
  let newSelectedId = ''
  const len = visibleComponentList.length
  if (len <= 1) {
    // 组件长度是一个,被删除,就没有组件
    newSelectedId = ''
  } else {
    // 组件长度 > 1
    if (index + 1 === len) {
      // 要删除最后一个,就要选中上一个
      newSelectedId = visibleComponentList[index - 1].fe_id
    } else {
      // 要删除的不是最后一个, 删除之后, 选中下一个
      newSelectedId = visibleComponentList[index + 1].fe_id
    }
  }
  return newSelectedId
}

// 粘贴与添加代码逻辑一样 进行封装
export const insertNewComponent = (draft: ComponentsStateType, newComponent: ComponentInfoType) => {
  //
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
