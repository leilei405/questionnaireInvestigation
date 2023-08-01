import React, { FC } from 'react'
import { Button, Space, Tooltip } from 'antd'
import { useDispatch } from 'react-redux'
import {
  DeleteTwoTone,
  EyeInvisibleTwoTone,
  LockTwoTone,
  CopyTwoTone,
  UpCircleTwoTone,
  DownCircleTwoTone,
  FileAddTwoTone,
  RollbackOutlined,
  RedoOutlined,
  UnlockTwoTone,
} from '@ant-design/icons'
import {
  changeComponentHidden,
  copySelectedIdComponent,
  pasteCopiedComponent,
  removeSelectedComponent,
  toggleComponentLocked,
} from '../../../store/componentReducer'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
const EditToolbar: FC = () => {
  const dispatch = useDispatch()
  const { selectedId, selectedComponent, copiedComponent } = useGetComponentInfo()
  const { isLocked } = selectedComponent || {}
  // 删除选中组件
  const handleCLickDelete = () => {
    dispatch(removeSelectedComponent())
  }

  // 隐藏选中组件
  const handleHidden = () => {
    dispatch(changeComponentHidden({ fe_id: selectedId, isHidden: true }))
  }

  // 锁定选中组件
  const handleLock = () => {
    dispatch(toggleComponentLocked({ fe_id: selectedId }))
  }

  // 复制
  const copy = () => {
    dispatch(copySelectedIdComponent())
  }

  // 粘贴组件
  const paste = () => {
    dispatch(pasteCopiedComponent())
  }
  return (
    <Space>
      <Tooltip title="删除组件">
        <Button onClick={handleCLickDelete} shape="circle" icon={<DeleteTwoTone />}></Button>
      </Tooltip>
      <Tooltip title="隐藏组件">
        <Button onClick={handleHidden} shape="circle" icon={<EyeInvisibleTwoTone />}></Button>
      </Tooltip>
      <Tooltip title="锁定组件">
        <Button
          onClick={handleLock}
          shape="circle"
          icon={isLocked ? <LockTwoTone /> : <UnlockTwoTone />}
        ></Button>
      </Tooltip>
      <Tooltip title="复制组件">
        <Button onClick={copy} shape="circle" icon={<CopyTwoTone />}></Button>
      </Tooltip>
      <Tooltip title="粘贴组件">
        <Button
          onClick={paste}
          disabled={copiedComponent == null}
          shape="circle"
          icon={<FileAddTwoTone />}
        ></Button>
      </Tooltip>
      <Tooltip title="上移组件">
        <Button shape="circle" icon={<UpCircleTwoTone />}></Button>
      </Tooltip>
      <Tooltip title="下移组件">
        <Button shape="circle" icon={<DownCircleTwoTone />}></Button>
      </Tooltip>
      <Tooltip title="撤销">
        <Button
          shape="circle"
          icon={<RollbackOutlined style={{ color: 'rgb(24, 144, 255)' }} />}
        ></Button>
      </Tooltip>
      <Tooltip title="重做">
        <Button
          shape="circle"
          icon={<RedoOutlined style={{ color: 'rgb(24, 144, 255)' }} />}
        ></Button>
      </Tooltip>
    </Space>
  )
}

export default EditToolbar
