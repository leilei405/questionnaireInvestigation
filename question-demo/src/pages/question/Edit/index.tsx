import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useLoadQuestionData } from '../../../hooks/useLoadQuestionData'
import styles from './index.module.scss'
import { EditCanvas } from './EditCanvas'
import { changeSelectId } from '../../../store/componentReducer'
import LeftComponentPanel from './LeftPanel' // 左边组件,图层
import RightComponentPanel from './RightPanel' // 右边属性设置
import EditHeader from './EditHeader'
const Edit: FC = () => {
  // 获取问卷详情 test
  const { loading } = useLoadQuestionData()
  const dispatch = useDispatch()

  // 点击空白处取消选中
  const clearSelectedId = () => {
    dispatch(changeSelectId(''))
  }
  return (
    <div className={styles.container}>
      {/* 顶部 */}
      <div className={styles.header}>
        <EditHeader />
      </div>
      {/* 主体内容区域 */}
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LeftComponentPanel />
          </div>
          <div className={styles.main} onClick={clearSelectedId}>
            <div className={styles['canvas-wrapper']}>
              <div style={{ height: '900px' }}>
                <EditCanvas loading={loading} />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <RightComponentPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Edit
