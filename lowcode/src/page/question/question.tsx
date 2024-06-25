import React, { useEffect, useState } from 'react'
import http from 'axios'
import PageWrapper from '../../components/pageWrapper'
import { getQuestionById } from '../../services/question'
import { postAnswer } from '../../services/answer'
import { getComponent } from '../../components'
import { PropsType } from './types'
import { extractIdFromUrl } from '../../utils'
import styles from './index.module.scss'

const HOST = 'http://www.lowcodedemo.top'
export default function Question() {
  const [questionData, setQuestionData] = useState<PropsType>({})
  const { errno, data, msg = '' } = questionData || {}
  const { _id: id, title = '', isDeleted, desc = '', isPublished, componentList = [] } = data || {}

  // 获取组件列表
  const fetchData = async () => {
    http.get(`${HOST}/api/question/${extractIdFromUrl(location.href)}`).then(res => {
      setQuestionData(res.data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  // 数据错误
  if (errno !== 0) {
    return (
      <PageWrapper title="错误">
        <h3>错误</h3>
        <p>{msg}</p>
      </PageWrapper>
    )
  }

  // 已经被删除的
  if (isDeleted) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h3>问卷标题：{title}</h3>
        <p>该问卷已经被删除了</p>
      </PageWrapper>
    )
  }

  // 尚未发布的
  if (!isPublished) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h3>问卷标题：{title}</h3>
        <p>该问卷还没有发布</p>
      </PageWrapper>
    )
  }

  // 遍历 动态渲染组件
  const ComponentListDom = (
    <>
      {componentList.map(item => {
        // 获取组件
        const ComponentElem = getComponent(item)
        return (
          <div key={item.fe_id} className={styles.componentWrapper}>
            {ComponentElem}
          </div>
        )
      })}
    </>
  )

  const handleSubmit = async () => {
    http
      .post(`${HOST}/api/answer`, {
        params: {
          questionId: id,
          // answerList,
        },
      })
      .then(res => {
        console.log(res)
      })

    // const data = await postAnswer({
    //   questionId: id,
    // })
    // console.log(data)
  }

  return (
    <PageWrapper title={title} desc={desc}>
      <form method="post" action="http://www.lowcodedemo.top/api/answer">
        <input type="hidden" name="questionId" value={id} />
        {ComponentListDom}
        <div className={styles.submitBtnContainer}>
          <button type="submit">提交</button>
        </div>
      </form>
      <div className={styles.submitBtnContainer}>
        <button onClick={handleSubmit}>提交</button>
      </div>
    </PageWrapper>
  )
}
