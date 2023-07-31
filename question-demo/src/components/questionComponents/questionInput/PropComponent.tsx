import React, { FC, useEffect } from 'react'
import { Input, Form } from 'antd'
import { QuestionInputPropsType } from './inputType'

const PropComponent: FC<QuestionInputPropsType> = (props: QuestionInputPropsType) => {
  const { title, placeholder } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, placeholder })
  }, [title, placeholder])

  return (
    <Form layout="vertical" initialValues={{ title, placeholder }} form={form}>
      <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Placeholder" name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  )
}

export default PropComponent
