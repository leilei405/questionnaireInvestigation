import React, { FC, useEffect } from 'react'
import { useRequest } from 'ahooks'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, Checkbox, Form, Input, Space, Typography, message } from 'antd'
import { UserSwitchOutlined } from '@ant-design/icons'
import styles from './Login.module.scss'
import { MANAGE_INDEX_PATHNAME, REGISTER_PATHNAME } from '../router'
import {
  rememberUser,
  deleteUserForm,
  getUserInfoFormStorage,
  setToken,
} from '../utils/rememberInfo'
import { LoginType } from '../types/LoginRegister'
import { loginServices } from '../services/user'
export const Login: FC = () => {
  const { Title } = Typography
  const [form] = Form.useForm() // 第三方hook
  const nav = useNavigate()
  /**
   * @method onFinish
   * @param values
   * @description 登录账号
   */
  const { run } = useRequest(async values => await loginServices({ ...values }), {
    manual: true,
    onSuccess: result => {
      const { token = '' } = result
      // 存储设置token
      setToken(token)
      message.success('登录成功')
      nav(MANAGE_INDEX_PATHNAME) // 跳转到我的问卷
    },
  })

  const onFinish = (values: LoginType) => {
    const { username, password, remember } = values
    run(values)
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
