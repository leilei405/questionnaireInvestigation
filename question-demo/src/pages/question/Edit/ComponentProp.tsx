import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import {
  getComponentConfigByType,
  ComponentPropsType,
} from '../../../components/questionComponents'
import { changeComponentProps } from '../../../store/componentReducer' // 修改组件属性
const NoProp: FC = () => {
  return <div style={{ textAlign: 'center' }}>未选中组件</div>
}

const ComponentProp: FC = () => {
  const dispatch = useDispatch()
  // 在redux中获取信息
  const { selectedComponent } = useGetComponentInfo()
  if (selectedComponent == null) return <NoProp />
  const { type, props, isLocked, isHidden } = selectedComponent
  // 通过type 获取组件配置
  const componentConfig = getComponentConfigByType(type)
  if (componentConfig == null) return <NoProp />

  const { PropComponent } = componentConfig

  const changeProps = (newProps: ComponentPropsType) => {
    // 选中组件==null 不执行
    if (selectedComponent == null) return
    const { fe_id } = selectedComponent

    dispatch(changeComponentProps({ fe_id, newProps }))

    console.log(newProps, 'new')
  }

  return <PropComponent {...props} onChange={changeProps} disabled={isLocked || isHidden} />
}

export default ComponentProp
