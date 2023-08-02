import React, { FC } from 'react'
import { Typography } from 'antd'
import { QuestionInfoDefaultProps, QuestionInfoPropsType } from './InfoType'

const { Title, Paragraph } = Typography

export const QuestionInfo: FC<QuestionInfoPropsType> = (props: QuestionInfoPropsType) => {
  const { title, desc = '' } = { ...QuestionInfoDefaultProps, ...props }
  const descList = desc.split('\n')
  return (
    <div style={{ textAlign: 'center' }}>
      <Title style={{ fontSize: '24px' }}>{title}</Title>
      <Paragraph>
        {descList.map((desc, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {desc}
          </span>
        ))}
      </Paragraph>
    </div>
  )
}
