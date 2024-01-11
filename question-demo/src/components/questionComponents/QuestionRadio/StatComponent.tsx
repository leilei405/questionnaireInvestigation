import React, { FC, useMemo } from 'react'

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

import { QuestionRadioStatPropsType } from './radioType'

const colorsArr = ['red', 'green', 'blue', 'magenta', 'cyan', 'white']

function format(n: number) {
  return (n * 100).toFixed(2)
}

export const StatComponent: FC<QuestionRadioStatPropsType> = (
  props: QuestionRadioStatPropsType
) => {
  const { stat = [] } = props
  const sum = useMemo(() => {
    let s = 0
    stat.forEach(i => (s += i.count))
    return s
  }, [stat])
  return (
    <div style={{ width: '350px', height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="count"
            isAnimationActive={false}
            data={stat}
            cx="50%"
            cy="50%"
            outerRadius={50} // 饼图的直径
            fill="#8884d8"
            label={p => `${p.name}: ${format(p.count / sum)}%`}
          >
            {stat.map((i, idx) => {
              return <Cell key={idx} fill={colorsArr[idx]} />
            })}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
