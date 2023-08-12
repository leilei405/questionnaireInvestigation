import React, { FC } from 'react'
import { Checkbox, Typography, Space } from 'antd'
import { QuestionCheckBoxDefaultProps, QuestionCheckBoxPropsType } from './checkType'

const { Paragraph } = Typography

export const QuestionCheckBox: FC<QuestionCheckBoxPropsType> = (
  props: QuestionCheckBoxPropsType
) => {
  const { title, isVertical, list } = { ...QuestionCheckBoxDefaultProps, ...props }

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Space style={{ margin: '5px' }} direction={isVertical ? 'vertical' : 'horizontal'}>
        {list?.map(item => {
          const { value, text, checked } = item
          return (
            <Checkbox checked={checked} key={value} value={value}>
              {text}
            </Checkbox>
          )
        })}
      </Space>
    </div>
  )
}
