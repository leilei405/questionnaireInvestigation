import React, { FC, useEffect, useState } from 'react'

import { Typography } from 'antd'

import { useParams } from 'react-router-dom'

import { useRequest } from 'ahooks'

import { getComponentStatService } from '../../../services/stat'

import { getComponentConfigByType } from '../../../components/questionComponents'

const { Title } = Typography

type PropsType = {
  selectedComponentId: string
  selectedComponentType: string
}

const ChartStat: FC<PropsType> = (props: PropsType) => {
  const { selectedComponentId, selectedComponentType } = props

  const [data, setData] = useState([])

  const { id = '' } = useParams()

  const { run } = useRequest(
    async (questionId, componentId) => await getComponentStatService(questionId, componentId),
    {
      manual: false, // true 手动触发
      onSuccess(res) {
        setData(res.stat)
      },
    }
  )

  useEffect(() => {
    if (selectedComponentId) run(id, selectedComponentId)
  }, [selectedComponentId])

  // 生成统计图表
  function getStatElem() {
    if (!selectedComponentId) return <div>未选中组件</div>
    const { StatComponent } = getComponentConfigByType(selectedComponentType) || {}
    if (StatComponent == null) return <div>该组件无统计图表</div>
    return <StatComponent stat={data} />
  }

  return (
    <>
      <Title level={4}>问卷统计</Title>
      <div>{getStatElem()}</div>
    </>
  )
}

export default ChartStat
