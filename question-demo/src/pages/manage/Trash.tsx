/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react'
import { Table, Empty, Typography, Tag, Button, Space, Spin, message } from 'antd'
import { useTitle, useRequest } from 'ahooks'
import styles from './common.module.scss'
import ListSearch from '../../components/ListSearch'
// import { QuestionCard } from '../../components/QuestionCard'
import { useLoadQuestionList } from '../../hooks/useLoadQuestionList'
import { ListPage } from '../../components/ListPage'
import { updateQuestionServices } from '../../services/question'
const { Title } = Typography

const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '发布状态',
    dataIndex: 'isPublished',
    render: (isSub: boolean) => {
      return isSub ? <Tag color="cyan">已发布</Tag> : <Tag color="red">未发布</Tag>
    },
  },
  {
    title: '问卷数量',
    dataIndex: 'answerCount',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
  },
]
const Trash: FC = () => {
  useTitle('Amorous - 回收站')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])
  // const [questionList, setQuestionList] = useState(dataList)
  // const [loading, setLoading] = useState(false)
  const { data = {}, loading, refresh } = useLoadQuestionList({ isDeleted: true })
  const { list = [], total = 0 } = data

  // 选中的问卷
  const onSelectChange = (newSelectedRowKeys: any[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  // 恢复
  const { run: restore } = useRequest(
    async () => {
      for await (const id of selectedRowKeys) {
        await updateQuestionServices(id, { isDeleted: false })
      }
    },
    {
      manual: true,
      debounceWait: 500, // 防抖 防止重复点击
      onSuccess: () => {
        message.success('恢复成功')
        refresh() // 手动刷新列表
      },
    }
  )

  // 彻底删除
  const deleteTrash = () => {
    console.log('彻底删除')
    // setLoading(true)
    setTimeout(() => {
      setSelectedRowKeys([])
      // setLoading(false)
    }, 1000)
  }

  const hasSelected = selectedRowKeys.length > 0

  return (
    <div>
      {/* header */}
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.delOrResBtn}>
        <Space>
          <Button type="primary" onClick={restore} disabled={!hasSelected} loading={loading}>
            恢复
          </Button>
          <Button type="primary" onClick={deleteTrash} disabled={!hasSelected} loading={loading}>
            彻底删除
          </Button>
        </Space>
      </div>
      {/* Table */}
      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {!loading && list.length === 0 && <Empty description="没有数据" />}
        {!loading && list.length > 0 && (
          <Table
            rowSelection={rowSelection}
            pagination={false}
            columns={columns}
            dataSource={list}
            rowKey="_id"
          />
        )}
      </div>
      <div className={styles.footer}>
        <ListPage total={total} />
      </div>
    </div>
  )
}
export default Trash
