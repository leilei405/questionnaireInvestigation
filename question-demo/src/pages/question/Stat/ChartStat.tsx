import React, { FC, useEffect, useState } from 'react'

import { Typography } from 'antd'

import { useParams } from 'react-router-dom'

import { useRequest } from 'ahooks'

import { getComponentStatService } from '../../../services/stat'

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

  const [data, setData] = useState([])

  const { id = '' } = useParams()

  const { run } = useRequest(
    async (questionId, componentId) => await getComponentStatService(questionId, componentId),
    {
      manual: false, // true 手动触发
      onSuccess(res) {
        console.log(res, '=====')

        setData(res.stat)
      },
    }
  )

  console.log(data, '===data==')

  useEffect(() => {
    if (selectedComponentId) run(id, selectedComponentId)
  }, [selectedComponentId])

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
