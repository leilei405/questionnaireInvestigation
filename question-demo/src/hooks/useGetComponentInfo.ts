import { useSelector } from 'react-redux'
import { StateType } from '../store'
import { ComponentsStateType } from '../store/componentReducer'
function useGetComponentInfo() {
  // as 转换为 ComponentsStateType
  // 从redux store 中通过 useSelector 获取组件信息
  const components = useSelector<StateType>(state => state.components) as ComponentsStateType

  const { componentList = [], selectedId, copiedComponent } = components

  const selectedComponent = componentList.find(c => c.fe_id === selectedId)
  return {
    componentList,
    selectedId,
    selectedComponent,
    copiedComponent,
  }
}

export default useGetComponentInfo
