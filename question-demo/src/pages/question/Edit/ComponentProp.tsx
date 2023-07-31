import React, { FC } from 'react'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import { getComponentConfigByType } from '../../../components/questionComponents'

const NoProp: FC = () => {
  return <div style={{ textAlign: 'center' }}>未选中组件</div>
}

const ComponentProp: FC = () => {
  // 在redux中获取信息
  const { selectedComponent } = useGetComponentInfo()
  if (selectedComponent == null) return <NoProp />
  const { type, props } = selectedComponent
  // 通过type 获取组件配置
  const componentConfig = getComponentConfigByType(type)
  if (componentConfig == null) return <NoProp />

  const { PropComponent } = componentConfig

  return <PropComponent {...props} />
}

export default ComponentProp
