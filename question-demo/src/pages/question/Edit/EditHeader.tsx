import React, { ChangeEvent, FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Space, Typography, Input } from 'antd'
import { LeftOutlined, CheckOutlined, EditOutlined } from '@ant-design/icons'
import useGetPageInfo from '../../../hooks/useGetPageInfo'
import styles from './EditHeader.module.scss'
import EditToolbar from './EditToolbar' // 中间工具栏
import { useDispatch } from 'react-redux'
import { changePageTitle } from '../../../store/pageInfoReducer'

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
            <Button icon={<CheckOutlined />}>保存</Button>
            <Button type="primary">发布</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default EditHeader
