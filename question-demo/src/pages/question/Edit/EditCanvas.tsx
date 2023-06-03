import React, { FC } from 'react'
import styles from './editCanvas.module.scss'
import { QuestionTitle } from '../../../components/questionComponents/questionTitle/ComponentsTitle'
import { QuestionInput } from '../../../components/questionComponents/questionInput/ComponentsInput'
import { Spin } from 'antd'

type PropsType = {
  loading: boolean
}

export const EditCanvas: FC<PropsType> = ({ loading }) => {
  if (loading) {
    return (
      <div style={{ marginTop: '50%', textAlign: 'center' }}>
        <Spin />
      </div>
    )
  }
  return (
    <div className={styles.canvas}>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionTitle />
        </div>
      </div>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionInput />
        </div>
      </div>
    </div>
  )
}
