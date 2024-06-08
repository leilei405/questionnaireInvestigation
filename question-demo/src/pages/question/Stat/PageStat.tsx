import React, { FC, useState } from 'react'

import { Typography, Spin, Table, Pagination } from 'antd'

import { useRequest } from 'ahooks'

import { useParams } from 'react-router-dom'

import { getQuestionStatListService } from '../../../services//stat'

import useGetComponentInfo from '../../../hooks/useGetComponentInfo'

import { STAT_PAGE_SIZE } from '../../../constant'

type PropsType = {
  selectedComponentId: string
  setSelectedComponentId: (id: string) => void
  setSelectedComponentType: (type: string) => void
}

const { Title } = Typography

const PageStat: FC<PropsType> = (props: PropsType) => {
  const { selectedComponentId, setSelectedComponentId, setSelectedComponentType } = props

  const { id = '' } = useParams()

  const [total, setTotal] = useState(0)

  const [page, setPage] = useState(1)

  const [pageSize, setPageSize] = useState(STAT_PAGE_SIZE)

  const [list, setList] = useState([])

  // 获取列表数据
  const { loading } = useRequest(
    async () => {
      return await getQuestionStatListService(id, { page, pageSize })
    },
    {
      refreshDeps: [id, page, pageSize],
      onSuccess(res) {
        const { total, list = [] } = res
        setTotal(total)
        setList(list)
      },
    }
  )

  // 列表渲染
  const { componentList } = useGetComponentInfo()
  const columns = componentList.map(col => {
    const { fe_id, title, type, props = {} } = col
    const colTitle = props!.title || title
    const color = fe_id === selectedComponentId ? '#1890ff' : 'inherit'
    return {
      title: (
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setSelectedComponentId(fe_id)
            setSelectedComponentType(type)
          }}
        >
          <span style={{ color }}>{colTitle}</span>
        </div>
      ),
      dataIndex: fe_id,
    }
  })

  const dataSource = list.map((item: any) => ({ ...item, key: item._id }))

  const TableElem = () => {
    return (
      <div>
        <Table columns={columns} pagination={false} dataSource={dataSource} />
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Pagination
            total={total}
            pageSize={pageSize}
            current={page}
            onChange={cur => {
              setPage(cur)
            }}
            onShowSizeChange={(page, pageSize) => {
              setPage(page)
              setPageSize(pageSize)
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Title level={3}>答卷数量:{!loading && total}</Title>
      {loading && (
        <div style={{ textAlign: 'center' }}>
          <Spin />
        </div>
      )}
      {!loading && <TableElem />}
    </div>
  )
}

export default PageStat
