import { ComponentInfoType } from './index'

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
