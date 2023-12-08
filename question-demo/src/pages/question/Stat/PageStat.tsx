import React, { FC, useState } from 'react'

import { Typography, Spin } from 'antd'

import { useRequest } from 'ahooks'

import { useParams } from 'react-router-dom'

import { getQuestionStatListService } from '../../../services//stat'

type PropsType = {
  selectedComponentId: string
  setSelectedComponentId: (id: string) => void
  setSelectedComponentType: (type: string) => void
}

const { Title } = Typography

const PageStat: FC<PropsType> = (props: PropsType) => {
  const { id = '' } = useParams()
  const [total, setTotal] = useState(0)
  const [list, setList] = useState([])
  const { loading } = useRequest(
    async () => {
      return await getQuestionStatListService(id, { page: 1, pageSize: 10 })
    },
    {
      onSuccess(res) {
        const { total, list = [] } = res
        setTotal(total)
        setList(list)
      },
    }
  )
  return (
    <div>
      <Title level={3}>答卷数量:{!loading && total}</Title>
      {loading && (
        <div style={{ textAlign: 'center' }}>
          <Spin />
        </div>
      )}
    </div>
  )
}

export default PageStat
