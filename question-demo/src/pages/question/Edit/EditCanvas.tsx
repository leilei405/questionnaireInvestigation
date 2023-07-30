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
import { ComponentInfoType, changeSelectId } from '../../../store/componentReducer'
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

export const EditCanvas: FC<PropsType> = ({ loading }) => {
  const { componentList, selectedId } = useGetComponentInfo()
  // console.log(componentList, '服务端Mock的数据')
  const dispatch = useDispatch()

  const handleClick = (event: MouseEvent, id: string) => {
    event.stopPropagation() // 阻止事件冒泡
    dispatch(changeSelectId(id))
  }

  if (loading) {
    return (
      <div style={{ marginTop: '50%', textAlign: 'center' }}>
        <Spin />
      </div>
    )
  }
  return (
    <div className={styles.canvas}>
      {componentList.map(item => {
        const { fe_id } = item
        // 拼接class name
        const selectedClassName = styles['selected']
        const wrapperDefaultClassName = styles['component-wrapper']

        const wrapperClassName = classNames({
          [wrapperDefaultClassName]: true,
          [selectedClassName]: fe_id === selectedId,
        })
        return (
          <div key={fe_id} className={wrapperClassName} onClick={e => handleClick(e, fe_id)}>
            <div className={styles.component}>{genComponent(item)}</div>
          </div>
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
  )
}
