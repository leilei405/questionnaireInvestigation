import React, { FC } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
]

const colorsArr = ['red', 'green', 'blue', 'magenta', 'cyan', 'white']

const PieDemo: FC = () => {
  return (
    <div style={{ width: '300px', height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={50} // 饼图的直径
            fill="#8884d8"
            label={p => `${p.name}: ${p.value}`}
          >
            {data01.map((i, idx) => {
              return <Cell key={idx} fill={colorsArr[idx]} />
            })}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieDemo
