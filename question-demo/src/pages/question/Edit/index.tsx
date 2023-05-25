import React, { FC } from 'react'
import { useLoadQuestionData } from '../../../hooks/useLoadQuestionData'
import styles from './index.module.scss'
const Edit: FC = () => {
  // 获取问卷详情
  const { loading, data } = useLoadQuestionData()
  return (
    <div className={styles.container}>
      {/* 顶部 */}
      <div className={styles.header}>Header</div>
      {/* 主体内容区域 */}
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>Left</div>
          <div className={styles.main}>
            <div className={styles['canvas-wrapper']}>
              <div style={{ height: '900px' }}>画布滚动</div>
            </div>
          </div>
          <div className={styles.right}>Right</div>
        </div>
      </div>
    </div>
  )
}
export default Edit
