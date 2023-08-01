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
} from '@ant-design/icons'
import { removeSelectedComponent } from '../../../store/componentReducer'
const EditToolbar: FC = () => {
  const dispatch = useDispatch()
  // 删除选中组件
  const handleCLickDelete = () => {
    dispatch(removeSelectedComponent())
  }
  return (
    <Space>
      <Tooltip title="删除组件">
        <Button onClick={handleCLickDelete} shape="circle" icon={<DeleteTwoTone />}></Button>
      </Tooltip>
      <Tooltip title="隐藏组件">
        <Button shape="circle" icon={<EyeInvisibleTwoTone />}></Button>
      </Tooltip>
      <Tooltip title="锁定组件">
        <Button shape="circle" icon={<LockTwoTone />}></Button>
      </Tooltip>
      <Tooltip title="复制组件">
        <Button shape="circle" icon={<CopyTwoTone />}></Button>
      </Tooltip>
      <Tooltip title="粘贴组件">
        <Button shape="circle" icon={<FileAddTwoTone />}></Button>
      </Tooltip>
      <Tooltip title="上移组件">
        <Button shape="circle" icon={<UpCircleTwoTone />}></Button>
      </Tooltip>
      <Tooltip title="下移组件">
        <Button shape="circle" icon={<DownCircleTwoTone />}></Button>
      </Tooltip>
      <Tooltip title="撤销上一步">
        <Button
          shape="circle"
          icon={<RollbackOutlined style={{ color: 'rgb(24, 144, 255)' }} />}
        ></Button>
      </Tooltip>
      <Tooltip title="重做组件">
        <Button
          shape="circle"
          icon={<RedoOutlined style={{ color: 'rgb(24, 144, 255)' }} />}
        ></Button>
      </Tooltip>
    </Space>
  )
}

export default EditToolbar
