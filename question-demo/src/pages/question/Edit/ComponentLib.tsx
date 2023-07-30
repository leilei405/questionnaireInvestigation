import React, { FC } from 'react'
import { Typography } from 'antd'
import { ComponentGroup } from '../../../components/questionComponents' // 分组

const { Title } = Typography
const Lib: FC = () => {
  return (
    <div>
      {ComponentGroup.map((item, index) => {
        return (
          <div key={item.groupId}>
            <Title level={3} style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : 0 }}>
              {item.groupName}
            </Title>
          </div>
        )
      })}
    </div>
  )
}

export default Lib
