import React, { FC } from 'react'
import { Input, Typography } from 'antd'
import { QuestionTextAreaDefaultProps, QuestionTextAreaPropsType } from './type'

const { Paragraph } = Typography
const { TextArea } = Input

export const QuestionTextArea: FC<QuestionTextAreaPropsType> = (
  props: QuestionTextAreaPropsType
) => {
  const { title, placeholder } = { ...QuestionTextAreaDefaultProps, ...props }

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <TextArea placeholder={placeholder} />
      </div>
    </div>
  )
}
