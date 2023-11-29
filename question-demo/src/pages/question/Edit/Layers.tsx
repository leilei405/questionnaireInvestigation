import React, { ChangeEvent, FC, useState } from 'react'
import { message, Input } from 'antd'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import { changeSelectId, changeComponentTitle } from '../../../store/componentReducer'
import styles from './Layers.module.scss'
const Layers: FC = () => {
  const { componentList, selectedId } = useGetComponentInfo()
  const dispatch = useDispatch()
  const [changedTitleId, setChangedTitleId] = useState('')

  // 点击选中组件
  const handleTitleClick = (fe_id: string) => {
    console.log(fe_id)
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

  return (
    <>
      {componentList.map(item => {
        const { fe_id, title, isHidden, isLocked } = item

        const titleDefaultClassName = styles.title
        const selectedClassName = styles.selected
        const titleClassName = classNames({
          [titleDefaultClassName]: true,
          [selectedClassName]: fe_id === selectedId,
        })
        return (
          <div key={fe_id} className={styles.wrapper}>
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
            <div className={styles.handler}>按钮</div>
          </div>
        )
      })}
    </>
  )
}

export default Layers
