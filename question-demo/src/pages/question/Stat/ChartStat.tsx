import React, { FC } from 'react'

import { Typography } from 'antd'

import PieDemo from './PieDemo'
import BarCharts from './BarChart'

const { Title } = Typography

type PropsType = {
  selectedComponentId: string
  selectedComponentType: string
}

const ChartStat: FC<PropsType> = (props: PropsType) => {
  const { selectedComponentId, selectedComponentType } = props
  console.log('selectedComponentId', selectedComponentId)
  console.log('selectedComponentType', selectedComponentType)

  return (
    <>
      <Title level={4}>问卷统计</Title>
      <div>
        <PieDemo />
        <BarCharts />
      </div>
    </>
  )
}

export default ChartStat
