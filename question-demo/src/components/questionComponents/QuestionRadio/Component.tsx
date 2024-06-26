import React, { FC } from 'react'
import { Radio, Typography, Space } from 'antd'
import { QuestionRadioDefaultProps, QuestionRadioPropsType } from './type'

const { Paragraph } = Typography

export const QuestionRadio: FC<QuestionRadioPropsType> = (props: QuestionRadioPropsType) => {
  const { title, isVertical, options = [], value } = { ...QuestionRadioDefaultProps, ...props }

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group value={value} style={{ margin: '5px' }}>
        <Space direction={isVertical ? 'vertical' : 'horizontal'}>
          {options?.map(item => {
            const { value, text } = item
            return (
              <Radio key={value} value={value}>
                {text}
              </Radio>
            )
          })}
        </Space>
      </Radio.Group>
    </div>
  )
}
