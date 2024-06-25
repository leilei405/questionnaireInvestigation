import React, { FC, CSSProperties } from 'react'

type PropsType = {
  text: string
  level: number
  isCenter?: boolean
}

const QuestionTitle: FC<PropsType> = ({ text, level, isCenter }) => {
  const style: CSSProperties = {}
  if (isCenter) style.textAlign = 'center'

  if (level === 1) return <h1 style={style}>{text}</h1>
  if (level === 2) return <h2 style={style}>{text}</h2>
  if (level === 3) return <h3 style={style}>{text}</h3>

  return null
}

export default QuestionTitle
