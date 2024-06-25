import React, { FC } from 'react'
import styles from './index.module.scss'
import { PropsType } from './types'

const QuestionInput: FC<PropsType> = ({ fe_id, props }) => {
  const { title, placeholder = '' } = props || {}

  return (
    <>
      <p>{title}</p>
      <div className={styles.inputWrapper}>
        <input name={fe_id} placeholder={placeholder} />
      </div>
    </>
  )
}

export default QuestionInput
