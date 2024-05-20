import React, { FC, MouseEvent } from 'react'
import styles from './editCanvas.module.scss'
// 临时静态展示 title input
// import { QuestionTitle } from '../../../components/questionComponents/questionTitle/ComponentsTitle'
// import { QuestionInput } from '../../../components/questionComponents/questionInput/ComponentsInput'
import { Spin } from 'antd'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import { getComponentConfigByType } from '../../../components/questionComponents'
import { ComponentInfoType, changeSelectId, moveComponent } from '../../../store/componentReducer'
import useBindCanvasKeyPress from '../../../hooks/useBindCanvasKeyPress'
import SortContainer from '../../../components/DragSortable/SortableContainer'
import SortableItem from '../../../components/DragSortable/SortableItem'
type PropsType = {
  loading: boolean
}

function genComponent(componentInfo: ComponentInfoType) {
  // 每个组件的信息  redux store 中获取
  const { type, props } = componentInfo
  const componentConfig = getComponentConfigByType(type)
  if (componentConfig == null) return null
  const { Component } = componentConfig
  return <Component {...props} />
}

const EditCanvas: FC<PropsType> = ({ loading }) => {
  const { componentList, selectedId } = useGetComponentInfo()
  // console.log(componentList, '服务端Mock的数据')
  const dispatch = useDispatch()

  // 点击选中组件
  const handleClick = (event: MouseEvent, id: string) => {
    event.stopPropagation() // 阻止事件冒泡
    dispatch(changeSelectId(id))
  }

  useBindCanvasKeyPress()

  if (loading) {
    return (
      <div style={{ marginTop: '50%', textAlign: 'center' }}>
        <Spin />
      </div>
    )
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
      <div className={styles.canvas}>
        {componentList
          .filter(c => !c.isHidden)
          .map(item => {
            const { fe_id, isLocked } = item
            // 拼接class name
            const selectedClassName = styles['selected']
            const wrapperDefaultClassName = styles['component-wrapper']
            const lockedClassName = styles['locked']

            const wrapperClassName = classNames({
              [wrapperDefaultClassName]: true,
              [selectedClassName]: fe_id === selectedId,
              [lockedClassName]: isLocked,
            })
            return (
              <SortableItem key={fe_id} id={fe_id}>
                <div className={wrapperClassName} onClick={e => handleClick(e, fe_id)}>
                  <div className={styles.component}>{genComponent(item)}</div>
                </div>
              </SortableItem>
            )
          })}
        {/* <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionTitle />
        </div>
      </div>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionInput />
        </div>
      </div> */}
      </div>
    </SortContainer>
  )
}

export default EditCanvas
