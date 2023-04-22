import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd'
import { UserSwitchOutlined } from '@ant-design/icons'
import styles from './Login.module.scss'
import { REGISTER_PATHNAME } from '../router'
import { rememberUser, deleteUserForm, getUserInfoFormStorage } from '../utils/rememberInfo'
import { LoginType } from '../types/LoginRegister'
export const Login: FC = () => {
  const { Title } = Typography
  const [form] = Form.useForm() // 第三方hook

  /**
   * @method onFinish
   * @param values
   * @description 登录账号
   */

  const onFinish = (values: LoginType) => {
    const { username, password, remember } = values
    if (remember) {
      rememberUser(username, password)
    } else {
      deleteUserForm()
    }
  }
  useEffect(() => {
    const { username, password } = getUserInfoFormStorage()
    form.setFieldsValue({ username, password })
  }, [])

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserSwitchOutlined />
          </Title>
          <Title level={2}>用户登录</Title>
        </Space>
      </div>
      <Card className={styles.card}>
        <Form
          form={form}
          onFinish={onFinish}
          initialValues={{ remember: true }}
          labelCol={{ span: 4 }}
          // wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: '请输入用户名' },
              { type: 'string', min: 5, max: 20, message: '字符长度在 5-20 之间' },
              { pattern: /^\w+$/, message: '只能是字母数字下划线' },
            ]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4 }}>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={REGISTER_PATHNAME}>还没有账户,去注册</Link>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login
