import React, { FC, useMemo, useRef } from 'react'
import { Button, Space, Typography, Input, Tooltip, message, Popover } from 'antd'
import type { InputRef } from 'antd'
import QRCode from 'qrcode.react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './StatHeader.module.scss'
import { CopyOutlined, LeftOutlined, QrcodeOutlined } from '@ant-design/icons'
import useGetPageInfo from '../../../hooks/useGetPageInfo'

const { Title } = Typography
const StatHeader: FC = () => {
  const nav = useNavigate()
  const { id } = useParams()
  const { title, isPublished } = useGetPageInfo()

  //   拷贝链接
  const urlInputRef = useRef<InputRef>(null)
  const copy = () => {
    const elem = urlInputRef.current
    if (elem == null) return
    elem.select() // 选中input内容
    document.execCommand('copy') // 拷贝选中内容
    message.success('拷贝成功')
  }

  // 使用useMemo 缓存函数结果 避免每次渲染都重新计算
  // useMemo 第一个参数是函数，第二个参数是依赖项
  // 依赖项变化时才会重新计算
  // 1.依赖项是否经常变化 2.缓存的元素是否创建成本较高
  const GetLinkAndQRcode = useMemo(() => {
    if (!isPublished) return null
    // 拼接url 需要参考C端规则
    const url = `http://localhost:8000/question/stat/${id}`

    // 定义二维码组件
    const QRCodeElem = () => {
      return (
        <div style={{ textAlign: 'center' }}>
          <QRCode value={url} size={150} />
        </div>
      )
    }

    return (
      <Space>
        <Input ref={urlInputRef} value={url} style={{ width: '300px' }} />
        <Tooltip title="拷贝链接">
          <Button onClick={copy} icon={<CopyOutlined />} />
        </Tooltip>
        <Popover content={<QRCodeElem />}>
          <Button icon={<QrcodeOutlined />} />
        </Popover>
      </Space>
    )
  }, [id, isPublished])

  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space align="baseline">
            <Button icon={<LeftOutlined />} onClick={() => nav(-1)} type="link">
              返回
            </Button>
            <Title level={5}>{title}</Title>
          </Space>
        </div>
        <div className={styles.main}>{GetLinkAndQRcode}</div>
        <div className={styles.right}>
          <Button type="primary" onClick={() => nav(`/question/edit/${id}`)}>
            编辑
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StatHeader
