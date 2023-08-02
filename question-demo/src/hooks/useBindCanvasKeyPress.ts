import { useKeyPress } from 'ahooks'
import { useDispatch } from 'react-redux'
import {
  copySelectedIdComponent,
  pasteCopiedComponent,
  removeSelectedComponent,
  selectPrevComponent,
  selectNextComponent,
} from '../store/componentReducer'

// 判断
const isActiveElementValid = () => {
  const activeElem = document.activeElement

  // 等于document.body 说明在画布上  不在其他地方1
  if (activeElem === document.body) return true

  return false
}
const useBindCanvasKeyPress = () => {
  const dispatch = useDispatch()
  // 删除
  useKeyPress(['backspace', 'delete'], () => {
    if (!isActiveElementValid()) return
    dispatch(removeSelectedComponent())
  })

  // 复制 meta.c 表示mac下的复制
  useKeyPress(['ctrl.c', 'meta.c'], () => {
    if (!isActiveElementValid()) return
    dispatch(copySelectedIdComponent())
  })

  // 粘贴
  useKeyPress(['ctrl.v', 'meta.v'], () => {
    if (!isActiveElementValid()) return
    dispatch(pasteCopiedComponent())
  })

  // 选中上一个
  useKeyPress(['uparrow'], () => {
    if (!isActiveElementValid()) return
    dispatch(selectPrevComponent())
  })

  // 选中下一个
  useKeyPress(['downarrow'], () => {
    if (!isActiveElementValid()) return
    dispatch(selectNextComponent())
  })
}

export default useBindCanvasKeyPress
