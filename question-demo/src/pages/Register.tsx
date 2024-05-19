import React, { FC } from 'react'
import { Button, Card, Form, Input, Space, Typography, message } from 'antd'
import { UserSwitchOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { useNavigate } from 'react-router-dom'
import styles from './Register.module.scss'
import { Link } from 'react-router-dom'
import { LOGIN_PATHNAME } from '../router'
import { LoginType } from '../types/LoginRegister'
import { registerServices } from '../services/user'
const Register: FC = () => {
  const { Title } = Typography
  const nav = useNavigate()

  const { run } = useRequest(async values => await registerServices({ ...values }), {
    manual: true,
    onSuccess: () => {
      message.success('注册成功')
      nav(LOGIN_PATHNAME)
    },
  })

  /**
   * @method onFinish
   * @param values
   * @description 注册账号
   */
  const onFinish = (values: LoginType) => {
    run(values)
  }

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserSwitchOutlined />
          </Title>
          <Title level={2}>用户注册</Title>
        </Space>
      </div>
      <Card className={styles.card}>
        <Form onFinish={onFinish} labelCol={{ span: 4 }}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: '请输入用户名' },
              { type: 'string', min: 5, max: 20, message: '字符长度在5 - 20之间' },
              { pattern: /^\w+$/, message: '只能是字母数字下划线' },
            ]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请再次输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="surePassword"
            dependencies={['password']} // 依赖于 password, password发生变化, 会重新触发 validator
            rules={[
              { required: true, message: '请输入密码' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  } else {
                    return Promise.reject(new Error('俩次密码不一致'))
                  }
                },
              }),
            ]}
          >
            <Input.Password placeholder="请输入确认密码" />
          </Form.Item>
          <Form.Item
            label="昵称"
            name="nickname"
            rules={[{ required: true, message: '请输入昵称' }]}
          >
            <Input placeholder="请输入昵称" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <Link to={LOGIN_PATHNAME}>已有账户,去登录</Link>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Register
