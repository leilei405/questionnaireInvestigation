import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Spin, Result, Button } from 'antd'
import { useTitle } from 'ahooks'
import { useLoadQuestionData } from '../../../hooks/useLoadQuestionData'
import useGetPageInfo from '../../../hooks/useGetPageInfo'
export const Stat: FC = () => {
  const nav = useNavigate()

  // 获取问卷详情
  const { loading } = useLoadQuestionData()
  const { isPublished, title } = useGetPageInfo()

  // 修改标题
  useTitle(`问卷编辑 ${title}`)

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Spin />
      </div>
    )
  }

  if (!isPublished) {
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

  return <div>Stat</div>
}
export default Stat
