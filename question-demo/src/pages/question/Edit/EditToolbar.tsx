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
  DownCircleFilled,
  UpCircleFilled,
} from '@ant-design/icons'
import { ActionCreators } from 'redux-undo'
import {
  changeComponentHidden,
  copySelectedIdComponent,
  pasteCopiedComponent,
  removeSelectedComponent,
  toggleComponentLocked,
  moveComponent,
} from '../../../store/componentReducer'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
const EditToolbar: FC = () => {
  const dispatch = useDispatch()
  const { selectedId, componentList, selectedComponent, copiedComponent } = useGetComponentInfo()
  const { isLocked } = selectedComponent || {}
  // 判断是不是第一个  是就不用上移了
  const length = componentList.length
  const selectedIndex = componentList.findIndex(c => c.fe_id === selectedId)
  const isFirst = selectedIndex <= 0
  const isLast = selectedIndex + 1 >= length
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

  // 上移组件
  const handleKeyUp = () => {
    if (isFirst) return
    dispatch(moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex - 1 }))
  }

  // 下移组件
  const handleKeyDown = () => {
    if (isLast) return
    dispatch(moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex + 1 }))
  }

  // 撤销回到上一步  最多撤销20步
  const onUndo = () => {
    dispatch(ActionCreators.undo())
  }
  // 重做
  const onRedo = () => {
    dispatch(ActionCreators.redo())
  }
  return (
    <Space>
      <Tooltip title="删除组件">
        <Button onClick={handleCLickDelete} shape="circle" icon={<DeleteTwoTone />} />
      </Tooltip>
      <Tooltip title="隐藏组件">
        <Button onClick={handleHidden} shape="circle" icon={<EyeInvisibleTwoTone />} />
      </Tooltip>
      <Tooltip title="锁定组件">
        <Button
          onClick={handleLock}
          shape="circle"
          icon={isLocked ? <LockTwoTone /> : <UnlockTwoTone />}
        />
      </Tooltip>
      <Tooltip title="复制组件">
        <Button onClick={copy} shape="circle" icon={<CopyTwoTone />} />
      </Tooltip>
      <Tooltip title="粘贴组件">
        <Button
          onClick={paste}
          disabled={copiedComponent == null}
          shape="circle"
          icon={<FileAddTwoTone />}
        />
      </Tooltip>
      <Tooltip title={!isFirst ? '上移组件' : <span style={{ color: 'red' }}>已经是第一个了</span>}>
        <Button
          shape="circle"
          icon={!isFirst ? <UpCircleTwoTone /> : <DownCircleFilled />}
          onClick={handleKeyUp}
          disabled={isFirst}
        />
      </Tooltip>
      <Tooltip title={!isLast ? '下移组件' : <span style={{ color: 'red' }}>已经是最后一个</span>}>
        <Button
          shape="circle"
          icon={!isLast ? <DownCircleTwoTone /> : <UpCircleFilled />}
          onClick={handleKeyDown}
          disabled={isLast}
        />
      </Tooltip>
      <Tooltip title="撤销">
        <Button
          shape="circle"
          icon={<RollbackOutlined style={{ color: 'rgb(24, 144, 255)' }} />}
          onClick={onUndo}
        />
      </Tooltip>
      <Tooltip title="重做">
        <Button
          shape="circle"
          icon={<RedoOutlined style={{ color: 'rgb(24, 144, 255)' }} />}
          onClick={onRedo}
        />
      </Tooltip>
    </Space>
  )
}

export default EditToolbar
