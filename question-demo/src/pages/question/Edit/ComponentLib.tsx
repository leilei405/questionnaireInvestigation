import React, { FC } from 'react'
import { Typography } from 'antd'
import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { ComponentGroup, ComponentConfType } from '../../../components/questionComponents' // 分组
import styles from './ComponentLib.module.scss'
import { addComponent } from '../../../store/componentReducer'
const { Title } = Typography
const Lib: FC = () => {
  const dispatch = useDispatch()
  // 生成组件
  const genComponent = (components: ComponentConfType) => {
    const { title, type, Component, defaultProps } = components

    // 点击将组件添加到画布中
    const handleClick = () => {
      dispatch(
        addComponent({
          fe_id: nanoid(),
          title,
          type,
          props: defaultProps,
        })
      )
    }

    return (
      <div key={type} className={styles.wrapper} onClick={handleClick}>
        <div className={styles.component}>
          <Component />
        </div>
      </div>
    )
  }
  return (
    <div>
      {ComponentGroup.map((item, index) => {
        const { groupId, groupName, components } = item
        return (
          <div key={groupId}>
            <Title level={3} style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : 0 }}>
              {groupName}
            </Title>
            <div>{components.map(item => genComponent(item))}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Lib
