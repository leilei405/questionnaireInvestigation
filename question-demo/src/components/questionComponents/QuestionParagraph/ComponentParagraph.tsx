import React, { FC } from 'react'
import { Typography } from 'antd'
import { QuestionParagraphDefaultProps, QuestionParagraphPropsType } from './paragraphType'

const { Paragraph } = Typography

const ComponentParagraph: FC<QuestionParagraphPropsType> = (props: QuestionParagraphPropsType) => {
  const { text = '', isCenter = false } = { ...QuestionParagraphDefaultProps, ...props }
  return (
    <Paragraph style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: 0 }}>
      {text}
    </Paragraph>
  )
}
export default ComponentParagraph
