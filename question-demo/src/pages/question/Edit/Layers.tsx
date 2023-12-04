import React, { ChangeEvent, FC, useState } from 'react'
import { message, Input, Button, Space } from 'antd'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import {
  changeSelectId,
  changeComponentTitle,
  toggleComponentLocked,
  changeComponentHidden,
  moveComponent,
} from '../../../store/componentReducer'
import styles from './Layers.module.scss'
import SortContainer from '../../../components/DragSortable/SortableContainer'
import SortableItem from '../../../components/DragSortable/SortableItem'
const Layers: FC = () => {
  const { componentList, selectedId } = useGetComponentInfo()
  const dispatch = useDispatch()
  const [changedTitleId, setChangedTitleId] = useState('')

  // 点击选中组件
  const handleTitleClick = (fe_id: string) => {
    const curComp = componentList.find(c => c.fe_id === fe_id)
    if (curComp && curComp.isHidden) {
      message.info('不能选中已经隐藏的组件')
      return
    }
    if (fe_id !== selectedId) {
      // 当前组件未被选中,执行选中
      dispatch(changeSelectId(fe_id))
      setChangedTitleId('')
      return
    }

    // 点击修改标题
    setChangedTitleId(fe_id)
  }

  // 修改标题
  const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event, 'changeTitle')
    const newTitle = event.target.value.trim()
    if (!newTitle || !selectedId) return
    dispatch(changeComponentTitle({ fe_id: selectedId, title: newTitle }))
  }

  // 切换 显示隐藏
  const changeHidden = (fe_id: string, isHidden: boolean) => {
    dispatch(changeComponentHidden({ fe_id, isHidden }))
  }

  // 切换 锁定解锁
  const changeLocked = (fe_id: string) => {
    dispatch(toggleComponentLocked({ fe_id }))
  }

  // SortContainer 组件组件 items 属性  需要每个item都有id
  const componentListWithId = componentList.map(c => {
    return {
      ...c,
      id: c.fe_id,
    }
  })

  // 拖拽排序结束
  const onDragEnd = (oldIndex: number, newIndex: number) => {
    dispatch(moveComponent({ oldIndex, newIndex }))
  }

  return (
    <SortContainer items={componentListWithId} onDragEnd={onDragEnd}>
      {componentList.map(item => {
        const { fe_id, title, isHidden, isLocked } = item

        const titleDefaultClassName = styles.title
        const selectedClassName = styles.selected
        const titleClassName = classNames({
          [titleDefaultClassName]: true,
          [selectedClassName]: fe_id === selectedId,
        })
        return (
          <SortableItem key={fe_id} id={fe_id}>
            <div className={styles.wrapper}>
              <div className={titleClassName} onClick={() => handleTitleClick(fe_id)}>
                {fe_id === changedTitleId && (
                  <Input
                    value={title}
                    onChange={changeTitle}
                    onPressEnter={() => setChangedTitleId('')}
                    onBlur={() => setChangedTitleId('')}
                  />
                )}
                {fe_id !== changedTitleId && title}
              </div>
              <div className={styles.handler}>
                <Space>
                  <Button
                    size="small"
                    shape="circle"
                    className={!isHidden ? styles.btn : ''}
                    icon={<EyeInvisibleOutlined />}
                    type={isHidden ? 'primary' : 'text'}
                    onClick={() => changeHidden(fe_id, !isHidden)}
                  />
                  <Button
                    size="small"
                    shape="circle"
                    className={!isLocked ? styles.btn : ''}
                    icon={<LockOutlined />}
                    type={isLocked ? 'primary' : 'text'}
                    onClick={() => changeLocked(fe_id)}
                  />
                </Space>
              </div>
            </div>
          </SortableItem>
        )
      })}
    </SortContainer>
  )
}

export default Layers
