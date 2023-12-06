import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Spin, Result, Button } from 'antd'
import { useTitle } from 'ahooks'
import { useLoadQuestionData } from '../../../hooks/useLoadQuestionData'
import useGetPageInfo from '../../../hooks/useGetPageInfo'
import styles from './index.module.scss'
import StatHeader from './StatHeader'
export const Stat: FC = () => {
  const nav = useNavigate()

  // 获取问卷详情
  const { loading } = useLoadQuestionData()
  const { isPublished, title } = useGetPageInfo()

  // 修改标题
  useTitle(`问卷编辑 ${title}`)

  // Loading 效果
  const RenderLoading = () => {
    return (
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Spin />
      </div>
    )
  }

  // 主体
  const GenContent = () => {
    if (typeof isPublished === 'boolean' && !isPublished) {
      return (
        <div style={{ flex: '1' }}>
          <Result
            status="404"
            title="404"
            subTitle="抱歉,你访问的页面未发布,请重试!!!"
            extra={
              <Button type="primary" onClick={() => nav(-1)}>
                返回
              </Button>
            }
          />
        </div>
      )
    }
    return (
      <>
        <div className={styles.left}>left</div>
        <div className={styles.main}>main</div>
        <div className={styles.right}>right</div>
      </>
    )
  }

  return (
    <div className={styles.container}>
      <StatHeader />
      <div className={styles['content-wrapper']}>
        {loading && <RenderLoading />}
        {!loading && (
          <div className={styles.content}>
            <GenContent />
          </div>
        )}
      </div>
    </div>
  )
}
export default Stat
