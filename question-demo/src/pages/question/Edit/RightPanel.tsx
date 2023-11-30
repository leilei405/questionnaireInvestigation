import React, { FC, useState, useEffect } from 'react'
import { Tabs } from 'antd'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'
import ComponentProp from './ComponentProp'
import PageSetting from './PageSetting'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'

// 枚举
enum TAB_KEYS {
  PROP_KEY = 'prop',
  SETTING_KEY = 'setting',
}

const RightComponentPanel: FC = () => {
  const { PROP_KEY, SETTING_KEY } = TAB_KEYS
  const [activeKey, setActiveKey] = useState(PROP_KEY)

  const { selectedId } = useGetComponentInfo()

  useEffect(() => {
    if (selectedId) {
      setActiveKey(PROP_KEY)
    } else {
      setActiveKey(SETTING_KEY)
    }
  }, [selectedId])

  const tabsItems = [
    {
      key: PROP_KEY,
      label: (
        <span>
          <FileTextOutlined />
          属性
        </span>
      ),
      children: <ComponentProp />,
    },
    {
      key: SETTING_KEY,
      label: (
        <span>
          <SettingOutlined />
          页面设置
        </span>
      ),
      children: <PageSetting />,
    },
  ]
  return <Tabs activeKey={activeKey} items={tabsItems} defaultActiveKey="prop" />
}

export default RightComponentPanel
