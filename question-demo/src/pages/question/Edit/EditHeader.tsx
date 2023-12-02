import React, { ChangeEvent, FC, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Space, Typography, Input } from 'antd'
import { LeftOutlined, CheckOutlined, EditOutlined, LoadingOutlined } from '@ant-design/icons'
import { useRequest, useKeyPress, useDebounceEffect } from 'ahooks'
import useGetPageInfo from '../../../hooks/useGetPageInfo'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import styles from './EditHeader.module.scss'
import EditToolbar from './EditToolbar' // 中间工具栏
import { useDispatch } from 'react-redux'
import { changePageTitle } from '../../../store/pageInfoReducer'
import { updateQuestionServices } from '../../../services/question'

// 标题组件
const TitleElem: FC = () => {
  const [editState, setEditState] = useState(false)
  const { title } = useGetPageInfo()
  const dispatch = useDispatch()

  // 显示隐藏 Header input
  const inputShowVisible = () => {
    setEditState(true)
  }

  // 标题同步
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value.trim()
    if (newTitle) {
      dispatch(changePageTitle(newTitle))
    } else {
      return
    }
  }
  return (
    <Space>
      {editState ? (
        <Input
          onPressEnter={() => setEditState(false)}
          onBlur={() => setEditState(false)}
          value={title}
          onChange={handleChangeValue}
        />
      ) : (
        <Title>{title}</Title>
      )}
      <Button icon={<EditOutlined />} type="text" onClick={inputShowVisible} />
    </Space>
  )
}

// 保存按钮组件
const SaveButton: FC = () => {
  const { id } = useParams()
  const { componentList } = useGetComponentInfo() // 获取组件列表信息
  const pageInfo = useGetPageInfo() // 获取页面信息

  // 保存问卷信息
  const { loading, run: save } = useRequest(
    async () => {
      if (!id) return
      await updateQuestionServices(id, { ...pageInfo, componentList })
    },
    {
      manual: true,
    }
  )

  // 快捷键 ctrl + s  Or command + s  保存问卷信息
  useKeyPress(['ctrl.s', 'meta.s'], (event: KeyboardEvent) => {
    event.preventDefault() // 阻止默认行为
    if (!loading) save()
  })

  // 自动保存 监听内容变化, 注意!!! 不是定期保存

  useDebounceEffect(
    () => {
      save()
    },
    [componentList, pageInfo],
    { wait: 1000 }
  )

  return (
    <Button
      onClick={save}
      disabled={loading}
      icon={loading ? <LoadingOutlined /> : <CheckOutlined />}
    >
      保存
    </Button>
  )
}

const { Title } = Typography
const EditHeader: FC = () => {
  const nav = useNavigate()
  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button onClick={() => nav(-1)} type="link" icon={<LeftOutlined />}>
              返回
            </Button>
            <TitleElem />
          </Space>
        </div>
        <div className={styles.main}>
          <EditToolbar />
        </div>
        <div className={styles.right}>
          <Space>
            <SaveButton />
            <Button type="primary">发布</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default EditHeader
