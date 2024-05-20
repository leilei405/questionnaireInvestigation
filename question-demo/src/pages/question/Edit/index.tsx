import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useTitle } from 'ahooks'
import { useLoadQuestionData } from '../../../hooks/useLoadQuestionData'
import { changeSelectId } from '../../../store/componentReducer'
// 组件
import EditHeader from './EditHeader' // 顶部
import LeftComponentPanel from './LeftPanel' // 左边组件,图层
import EditCanvas from './EditCanvas' // 中间画布
import RightComponentPanel from './RightPanel' // 右边属性设置
import useGetPageInfo from '../../../hooks/useGetPageInfo'
// 样式
import styles from './index.module.scss'
const Edit: FC = () => {
  // 获取问卷详情 test
  const { loading } = useLoadQuestionData()
  const dispatch = useDispatch()

  // 修改标题
  const { title } = useGetPageInfo()
  useTitle(`问卷统计 ${title}`)

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
