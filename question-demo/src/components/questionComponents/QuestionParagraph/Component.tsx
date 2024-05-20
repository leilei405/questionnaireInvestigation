import React, { FC } from 'react'
import { Typography } from 'antd'
import { QuestionParagraphDefaultProps, QuestionParagraphPropsType } from './type'

const { Paragraph } = Typography

const ComponentParagraph: FC<QuestionParagraphPropsType> = (props: QuestionParagraphPropsType) => {
  const { text = '', isCenter = false } = { ...QuestionParagraphDefaultProps, ...props }
  // const n = text.replaceAll('\n', '<br>')
  const textList = text.split('\n')
  return (
    <Paragraph style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: 0 }}>
      {/* 1.不建议使用dangerouslySetInnerHTML 方式 */}
      {/* <span dangerouslySetInnerHTML={{ __html: n }}></span> */}
      {/* 2.map */}
      {textList.map((item, index) => {
        return (
          <span key={index}>
            {index > 0 && <br />}
            {item}
          </span>
        )
      })}
    </Paragraph>
  )
}
export default ComponentParagraph
