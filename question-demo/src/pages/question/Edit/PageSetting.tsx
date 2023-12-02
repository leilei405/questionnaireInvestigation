import React, { FC, useEffect } from 'react'
import { Form, Input } from 'antd'
import { useDispatch } from 'react-redux'
import useGetPageInfo from '../../../hooks/useGetPageInfo'
import { resetPageInfo } from '../../../store/pageInfoReducer'
const { TextArea } = Input

const PageSetting: FC = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const pageInfo = useGetPageInfo()

  // 实时更新表单内容
  useEffect(() => {
    form.setFieldsValue(pageInfo)
  }, [pageInfo])

  // 获取表单内容
  const handleValueChange = () => {
    console.log('values', form.getFieldsValue())
    dispatch(resetPageInfo(form.getFieldsValue()))
  }

  return (
    <Form form={form} layout="vertical" initialValues={pageInfo} onValuesChange={handleValueChange}>
      <Form.Item
        label="问卷标题"
        name="title"
        rules={[
          {
            required: true,
            message: '请输入标题',
          },
        ]}
      >
        <Input placeholder="请输入标题" />
      </Form.Item>
      <Form.Item label="问卷描述" name="desc">
        <TextArea placeholder="问卷描述 ...." />
      </Form.Item>
      <Form.Item label="样式代码" name="css">
        <TextArea placeholder="输入 CSS 样式代码" />
      </Form.Item>
      <Form.Item label="脚本代码" name="js">
        <TextArea placeholder="输入 JS 脚本代码" />
      </Form.Item>
    </Form>
  )
}
export default PageSetting
